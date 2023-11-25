import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from 'expo-router';
import { SafeAreaView, Text, useWindowDimensions, View, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { COLORS, ICONS } from "~/constants";
import { useSelector } from "react-redux";
import { EventImage, Details, EventOrganizer, Footer, EventItenary, EventLocation, ShareEvent } from "~/screens/event/components";
import useDataFetch from "../../utils/useDataFetch";
import { ScrollView } from "react-native-gesture-handler";
import BackLeft from "../../components/header/explore/BackLeft";
import Upload from "../../screens/event/components/Upload";
import LikesHeart from "../../screens/event/components/LikesHeart";

const EventDetails = () => {
    const router = useRouter();
    const params = useSearchParams();

    const { data, isLoading, error, refetch } = useDataFetch('3000/suggestion', params.id)

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
        navigation.navigate("Get a Ticket")
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
                <EventImage data={data} isLoading={isLoading} />
                <Details data={data} isLoading={isLoading} />
                <EventOrganizer data={data} isLoading={isLoading} />
                <EventItenary data={data} isLoading={isLoading} />
                <EventLocation data={data} isLoading={isLoading} />
            </ScrollView>
            <Footer
                info={data}
                spotInfo={"You're going! +1"}
                label={"Get a Ticket"}
                handleClickButton={navigateToNext} />
            <ShareEvent activeHeight={height * 0.45} ref={bottomSheetRef} handlePress={closeHandler} data={data} />
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