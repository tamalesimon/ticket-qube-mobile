import React, { useMemo, useEffect } from 'react';
import { View, StyleSheet, FlatList, ScrollView, Image, Text, ActivityIndicator } from 'react-native';
import EventCard from '../../components/card/EventCard';
import SectionHeaders from '../../components/titleHeaders/SectionHeaders'
import useFetch from '../../utils/useFetch';
import useDataFetch from '../../utils/useDataFetch';
import { Skeleton } from 'moti/skeleton';
import SkeletonLoaderCard from '../../components/loaders/SkeletonLoaderCard';

export default function Upcoming() {
    const { data, error, isLoading, refetch } = useDataFetch('3004/upcoming');
    const renderUpcoming = () => {
        return (
            <View>
                <SectionHeaders sectionTitle="Upcoming events" isLoading={isLoading} />
                {
                    isLoading ?
                        <SkeletonLoaderCard />
                        :
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <EventCard item={item} />}
                            keyExtractor={item => item?.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.eventSection}
                            snapToInterval={250 + 16}
                            decelerationRate="fast"
                        />
                }
            </View>)
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
        gap: 16,
        paddingTop: 16,
        paddingLeft: 4,
        paddingBottom: 24,
        zIndex: 100,
        position: 'relative'
    }
});
