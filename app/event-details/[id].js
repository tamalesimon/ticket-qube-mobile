import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams, useNavigation } from 'expo-router';
import { useDispatch, useSelector } from "react-redux";
import { fetchEventById } from "../../redux/eventsSlice";
import { SafeAreaView, Text, useWindowDimensions, View, StyleSheet } from "react-native";
import { COLORS, ICONS } from "~/constants";
import { EventImage, Details, EventOrganizer, Footer, EventItenary, EventLocation, ShareEvent } from "~/screens/event/components";
import useDataFetch from "../../utils/useDataFetch";
import { ScrollView } from "react-native-gesture-handler";
import BackLeft from "../../components/header/explore/BackLeft";
import Upload from "../../screens/event/components/Upload";
import LikesHeart from "../../screens/event/components/LikesHeart";

const EventDetails = () => {
    const router = useRouter();
    const params = useSearchParams();
    const dispatch = useDispatch();
    const { eventByid, loading } = useSelector(state => state.events)

    const { data, isLoading, error, refetch } = useDataFetch('3000/suggestion', params.id)

    useEffect(() => {
        dispatch(fetchEventById(params.id))
    }, [])

    const navigation = useNavigation();
    const bottomSheetRef = useRef(null);
    const { height } = useWindowDimensions();

    const openHandler = useCallback(() => {
        bottomSheetRef.current.expand();
    }, []);
    const closeHandler = useCallback(() => {
        bottomSheetRef.current.close();
    }, [])

    const navigateToNext = () => {
        router.push("event-details/get-ticket/GetTicket")
    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, paddingHorizontal: 24, paddingBottom: 24, paddingTop: 12 }}>
            {/* <View>
                <Text>{JSON.stringify(data)}</Text>
            </View> */}
            <View style={styles.container}>
                <View style={styles.buttonsContainer}>
                    <BackLeft handlePress={() => router.back()} />
                    <View style={styles.buttonsRightHeader}>
                        <Upload handlePress={openHandler} />
                        <LikesHeart handlePress={closeHandler} />
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <EventImage data={eventByid} isLoading={isLoading} />
                <Details data={eventByid} isLoading={isLoading} />
                <EventOrganizer data={eventByid} isLoading={isLoading} />
                <EventItenary data={eventByid} isLoading={isLoading} />
                <EventLocation data={eventByid} isLoading={isLoading} />
            </ScrollView>
            <Footer
                info={eventByid}
                spotInfo={"You're going! Right"}
                label={"Get a Ticket"}
                handleClickButton={navigateToNext} />
            <ShareEvent activeHeight={height * 0.45} ref={bottomSheetRef} handlePress={closeHandler} data={eventByid} />
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