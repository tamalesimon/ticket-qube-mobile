import { View, Text, StyleSheet, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation, Stack, useRouter } from 'expo-router';
import React from 'react';
import { COLORS, FONTS, ICONS } from '~/constants';
import TicketCard from '~/screens/event/components/TicketCard';
import { Footer } from '~/screens/event/components';
import FiveDayStrip from '~/screens/event/components/EventDateStrip'
import { selectCurrentEventTickets, selectSelectedEventTitle, selectSelectedEventDate } from '../../../redux/events/eventSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const GetTicket = () => {
    const navigation = useNavigation();
    const router = useRouter();
    const tickets = useSelector(selectCurrentEventTickets)
    const ticketTitle = useSelector(selectSelectedEventTitle)
    const ticketDate = useSelector(selectSelectedEventDate)

    const { startTime, endTime } = ticketDate;
    const { name, imageUrl } = ticketTitle;

    const [selectedTicket, setSelectedTicket] = useState();
    const [ticketAmount, setTicketAmount] = useState();

    const handleTicketSelect = async (item) => {
        const { ticketId, name } = item
        setSelectedTicket(ticketId)
        console.log("selected ticket -> ", selectedTicket)
        console.log("ticket amount: ", ticketAmount)
    }

    const genericScreenOptions = {
        headerStyle: {
            backgroundColor: COLORS.gray50,
            elevation: 0,
            borderBottomWidth: 0,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
            fontFamily: FONTS.NotoSansJPBold,
            // fontWeight: '700',
            lineHeight: 24,
            // backgroundColor: COLORS.gray500,
            color: COLORS.grayBase
        },
        headerLeft: () => {
            return (
                <View style={styles.headerButtonContainer}>
                    <View>
                        <TouchableOpacity style={styles.Arrow} onPress={() => router.back()}>
                            <ICONS.ArrowLeftIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        },
        headerTitleAlign: 'center',
    }
    const handleClickButton = () => {
        router.push("event-details/get-ticket/ContactInfo")
    }
    console.log("tickets in getTickets: ", tickets)
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.gray50, flex: 1, overflow: 'hidden' }}>
            <Stack.Screen
                options={{ ...genericScreenOptions, headerTitle: 'Get Ticket' }}
            />
            <View style={styles.calendarContainer}>
                <FiveDayStrip startTime={startTime} endTime={endTime} />
            </View>
            <View style={styles.chooseTicketContainer}>
                <Text style={styles.ticketsTitle}>Select your ticket</Text>
                {
                    tickets.map((item) => {
                        return (
                            <TicketCard
                                key={item?.ticketId}
                                item={item}
                                title={name}
                                imageUrl={imageUrl}
                                handleTicketSelect={() => handleTicketSelect(item)}
                                ticketAmount={ticketAmount}
                                selectedTicket={selectedTicket}
                                setTicketAmount={setTicketAmount}
                            />
                        )
                    })
                }
            </View>
            <Footer info={ticketAmount ? ticketAmount : 0} spotInfo="You're going! +1" label={"Continue"} handleClickButton={handleClickButton} />
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
    },
    Arrow: {
        paddingVertical: 12,
        // paddingHorizontal:13.5,
        borderRadius: 12,
    },
    headerButtonContainer: {
        marginHorizontal: 24, //24px
        alignItems: 'center',
        justifyContent: 'center',
    }
})
