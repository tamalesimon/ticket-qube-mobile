import { View, Text, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native'
import { useNavigation } from 'expo-router';
import React from 'react';
import { COLORS, FONTS } from '../../constants';
import TicketCard from './components/TicketCard';
import { Footer } from './components';
import FiveDayStrip from './components/EventDateStrip'

const GetTicket = () => {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.gray50, flex: 1, overflow: 'hidden' }}>
            <View style={styles.calendarContainer}>
                <FiveDayStrip date="2023-09-09" />
            </View>
            <View style={styles.chooseTicketContainer}>
                <Text style={styles.ticketsTitle}>Select your ticket</Text>
                <TicketCard />
                <TicketCard />
            </View>
            {/* <Footer info={"UGX 150,000"} spotInfo="You're going! +1" label={"Continue"} /> */}
        </SafeAreaView>
    )
}

export default GetTicket;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray50
    },
    ticketsTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 16,
        fontWeight: 700,
        color: COLORS.grayBase,
        marginBottom: 16
    },
    chooseTicketContainer: {
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: COLORS.white,

        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        padding: 24,

    },
    calendarContainer: {
        marginBottom: 24,
        marginTop: 12,
        height: 60
    }
})
