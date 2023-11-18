import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import SuggestionCard from '../../components/card/SuggestionCard';
import SectionHeaders from '../../components/titleHeaders/SectionHeaders'
import useDataFetch from '../../utils/useDataFetch'
import SkeletonLoaderList from '../../components/loaders/SkeletonLoaderList';

export default function Suggestions() {
    const router = useRouter();
    const { data, isLoading, error, refetch } = useDataFetch('3000/suggestion')
    const [selectedEvent, setSelectedEvent] = useState();

    const handleEventClicked = (item) => {
        router.push(`event-details/${item.id}`)
        setSelectedEvent(item.id);
    }

    const renderSuggestion = () => {
        return (
            <View>
                <SectionHeaders sectionTitle="Suggestions for you" isLoading={isLoading} />
                {
                    isLoading ?
                        (<View style={{ marginTop: 16 }}>
                            <SkeletonLoaderList />
                        </View>) :
                        (
                            <View style={{ marginTop: 16 }}>
                                {
                                    data.map((item) => {
                                        return (
                                            <SuggestionCard style={styles.suggestionSection} handleEventClicked={() => handleEventClicked(item)} selectedEvent={selectedEvent} key={item?.id} item={item} />
                                        )
                                    })
                                }
                            </View>
                        )
                }


            </View>
        )
    }
    return (
        <View>
            {renderSuggestion()}
        </View>
    );
}

const styles = StyleSheet.create({
    suggestionSection: {
        flexDirection: 'column',
        gap: 16,
        // marginHorizontal:10
    }
})
