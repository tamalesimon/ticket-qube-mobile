import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'expo-router';

import { useGetEventSuggestionsMutation } from '../../redux/events/eventsApiSlice';
import { selectCurrentUserToken } from '../../redux/auth/authSlice';
import { selectCurrentEventId } from '../../redux/events/eventSlice';
import { setEvents, setEventId } from '../../redux/events/eventSlice';

import SuggestionCard from '../../components/card/SuggestionCard';
import SectionHeaders from '../../components/titleHeaders/SectionHeaders'

import SkeletonLoaderList from '../../components/loaders/SkeletonLoaderList';

export default function Suggestions() {
    const dispatch = useDispatch();
    const errRef = useRef();

    const [getEventSuggestions, { data: events, error, isError, isLoading, isSuccess }] = useGetEventSuggestionsMutation();

    const router = useRouter();
    const [selectedEvent, setSelectedEvent] = useState();

    useEffect(() => {
        const suggestionResults = getEventSuggestions('suggestions?page=0&size=5').unwrap
        dispatch(setEvents({ ...suggestionResults }));
        console.log("token: " + selectCurrentUserToken)
    }, [getEventSuggestions])

    const handleEventClicked = async (item) => {
        dispatch(setEventId(item.eventId))
        router.push(`event-details/${item.eventId}`)
        console.log("selected Event id: " + item.eventId);
    }

    let content;

    if (isLoading) {
        content = (
            <View style={{ marginTop: 16 }}>
                <SkeletonLoaderList />
            </View>
        )
    } else if (isSuccess) {
        content = (
            <View style={{ marginTop: 16 }}>
                {
                    events.data.map((item) => {
                        return (
                            <SuggestionCard style={styles.suggestionSection} handleEventClicked={() => handleEventClicked(item)} selectedEvent={selectedEvent} key={item?.eventId} item={item} />
                        )
                    })
                }
            </View>
        )
    } else if (isError) {
        console.log("Something is wrong: " + JSON.stringify(error))
    }
    return (
        <View>
            <SectionHeaders sectionTitle="Suggestions for you" isLoading={isLoading} />
            {content}
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
