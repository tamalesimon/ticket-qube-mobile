import React, { useMemo } from 'react';
import { View, StyleSheet, FlatList, ScrollView, Image, Text, ActivityIndicator } from 'react-native';
import EventCard from '../../components/card/EventCard';
import SectionHeaders from '../../components/titleHeaders/SectionHeaders'
import useFetch from '../../utils/useFetch';
import useDataFetch from '../../utils/useDataFetch';

export default function Upcoming() {
const { data, error, isLoading, refetch } = useDataFetch('3000/upcoming');
const renderUpcoming = () => {
    if (isLoading) {
        return <ActivityIndicator size="large" colors="black" />
    } else {
     return  (<View>
            <SectionHeaders sectionTitle="Upcoming events" />
            <FlatList
                data={data}
                renderItem={({ item }) => <EventCard item={item} />}
                keyExtractor={item => item?.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.eventSection}
                snapToInterval={250+16}
                decelerationRate="fast"
            />
        </View>)
    }
}
    return (
    <View>
        {renderUpcoming()}
    </View>
    );
}

const styles = StyleSheet.create({
    eventSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:16,
        paddingTop:16,
        paddingLeft:4,
        paddingBottom:24,
        zIndex: 100,
        position:'relative'
    }
});
