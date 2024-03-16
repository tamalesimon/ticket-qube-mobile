import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams, useNavigation } from 'expo-router';
import { useDispatch, useSelector } from "react-redux";
import { fetchEventById } from "../../redux/eventsSlice";
import { SafeAreaView, Text, useWindowDimensions, View, StyleSheet } from "react-native";
import { COLORS, ICONS } from "~/constants";
import { EventImage, Details, EventOrganizer, Footer, EventItenary, EventLocation, ShareEvent } from "~/screens/event/components";
// import useDataFetch from "../../utils/useDataFetch";
import { ScrollView } from "react-native-gesture-handler";
import BackLeft from "../../components/header/explore/BackLeft";
import Upload from "../../screens/event/components/Upload";
import LikesHeart from "../../screens/event/components/LikesHeart";

import { useGetEventByIdMutation } from "../../redux/events/eventsApiSlice";

import { selectCurrentEventId, selectCurrentEventTickets, selectCurrentUserEventSuggestions } from "../../redux/events/eventSlice";
import { setEventTickets } from "../../redux/events/eventSlice";
import EventDetailsSkeleton from "./EventDetailsSkeleton";

const EventDetails = () => {
    const router = useRouter();
    const params = useSearchParams();
    const dispatch = useDispatch();

    const [eventLiked, setEventLiked] = useState(true)


    const [getEventById, { data: event, error, isLoading, isSuccess, isError }] = useGetEventByIdMutation();
    const eventId = useSelector(selectCurrentEventId)
    const eventTicket = useSelector(selectCurrentEventTickets)

    useEffect(() => {
        const selectedEvent = getEventById(eventId).unwrap
        console.log("eventTicket: ", eventTicket[0])
    }, [eventId])

    const navigation = useNavigation();
    const bottomSheetRef = useRef(null);
    const { height } = useWindowDimensions();

    const openHandler = useCallback(() => {
        bottomSheetRef.current.expand();
    }, []);
    const closeHandler = useCallback(() => {
        bottomSheetRef.current.close();
    }, [])

    const handleEventLike = () => {
        setEventLiked(!eventLiked)
    }

    const navigateToNext = () => {
        router.push("event-details/get-ticket/GetTicket")
    }

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, paddingHorizontal: 24, paddingBottom: 24, paddingTop: 12 }}>
            <View style={styles.container}>
                <View style={styles.buttonsContainer}>
                    <BackLeft handlePress={() => router.back()} />
                    <View style={styles.buttonsRightHeader}>
                        <Upload handlePress={openHandler} />
                        <LikesHeart handlePress={handleEventLike} liked={eventLiked} />
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <EventImage data={event} isLoading={isLoading} />
                <Details data={event} isLoading={isLoading} />
                <EventOrganizer data={event} isLoading={isLoading} />
                <EventItenary data={event} isLoading={isLoading} />
                <EventLocation data={event} isLoading={isLoading} />
            </ScrollView>
            <Footer
                info={event}
                spotInfo={"You're going! Right"}
                label={"Get a Ticket"}
                handleClickButton={navigateToNext} />
            <ShareEvent activeHeight={height * 0.45} ref={bottomSheetRef} handlePress={closeHandler} data={event} />
        </SafeAreaView>
    );
}

export default EventDetails;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        height: 56,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonsRightHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})