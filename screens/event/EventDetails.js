import { useCallback, useEffect, useRef } from "react";
import { SafeAreaView, Text, useWindowDimensions, View, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { COLORS, ICONS } from "../../constants";
import { useSelector } from "react-redux";
import { EventImage, Details, EventOrganizer, Footer, EventItenary, EventLocation, ShareEvent } from "./components";
import { ScrollView } from "react-native-gesture-handler";
import BackLeft from "../../components/header/explore/BackLeft";
import Upload from "./components/Upload";
import LikesHeart from "./components/LikesHeart";

const EventDetails = () => {
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
            {/* <View style={styles.container}>
                <View style={styles.buttonsContainer}>
                    <BackLeft />
                    <View style={styles.buttonsRightHeader}>
                        <Upload handlePress={openHandler} />
                        <LikesHeart handlePress={closeHandler} />
                    </View>
                </View>
            </View> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <EventImage />
                <Details />
                <EventOrganizer />
                <EventItenary />
                <EventLocation />
            </ScrollView>
            <Footer
                info={"UGX 150k - UGX 2mil"}
                spotInfo={"You're going! +1"}
                label={"Get a Ticket"}
                handleClickButton={navigateToNext} />
            <ShareEvent activeHeight={height * 0.45} ref={bottomSheetRef} handlePress={closeHandler} />
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