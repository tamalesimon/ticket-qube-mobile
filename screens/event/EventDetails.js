import { useCallback, useEffect, useRef } from "react";
import { SafeAreaView, Text, useWindowDimensions, View, StyleSheet } from "react-native";
import { COLORS, icons } from "../../constants";
import { useSelector } from "react-redux";
import { EventImage, Details, EventOrganizer, Footer, EventItenary, EventLocation, ShareEvent } from "./components";
import { ScrollView } from "react-native-gesture-handler";
import BackLeft from "../../components/header/explore/BackLeft";
import Upload from "./components/Upload";
import LikesHeart from "./components/LikesHeart";

const EventDetails = () => {
    const bottomSheetRef = useRef(null);
    const { height } = useWindowDimensions();

    const openHandler = useCallback(() => {
        bottomSheetRef.current.expand();
    }, []);
    const closeHandler = useCallback(() => {
        bottomSheetRef.current.close();
    }, [])
    return (
        <>
            <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 24 }}>
                <View style={styles.container}>
                    <View style={styles.buttonsContainer}>
                        <BackLeft />
                        <View style={styles.buttonsRightHeader}>
                            <Upload handlePress={openHandler} />
                            <LikesHeart handlePress={closeHandler} />
                        </View>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <EventImage />
                    <Details />
                    <EventOrganizer />
                    <EventItenary />
                    <EventLocation />
                </ScrollView>
                <Footer />
            </SafeAreaView>
            <ShareEvent activeHeight={height * 0.5} ref={bottomSheetRef} handlePress={closeHandler} />
            {/* {
                toggleBottomSheet && <ShareEvent activeHeight={height * 0.5} ref={bottomSheetRef} />
            } */}
        </>

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