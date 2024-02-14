import { View, Text, StyleSheet, useWindowDimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation, Stack, useRouter } from 'expo-router';
import React from 'react';
import { COLORS, FONTS, ICONS } from '~/constants';
import TicketCard from '~/screens/event/components/TicketCard';
import { Footer } from '~/screens/event/components';
import FiveDayStrip from '~/screens/event/components/EventDateStrip'
import { selectCurrentEventTickets, selectSelectedEventTitle, selectSelectedEventDate, selectPlusOne, setTotalPlusOne, setSelectedTicketDetails } from '../../../redux/events/eventSlice';
import { setPaymentObject } from '../../../redux/payments/paymentSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const GetTicket = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const router = useRouter();
    const tickets = useSelector(selectCurrentEventTickets)
    const ticketTitle = useSelector(selectSelectedEventTitle)
    const ticketDate = useSelector(selectSelectedEventDate)


    const { startTime, endTime } = ticketDate;
    const { name, imageUrl } = ticketTitle;

    const [selectedTicket, setSelectedTicket] = useState();
    const [ticketAmount, setTicketAmount] = useState();
    const [plusOne, setPlusOne] = useState();

    const handleTicketSelect = async (item) => {
        const { ticketId, name, price, currency, processingFee, availableSlots } = item
        setSelectedTicket(ticketId)
        dispatch(setPaymentObject({
            ticketId
        }))
        dispatch(setSelectedTicketDetails({ ticketId, name, price, currency, processingFee, availableSlots }))
    }

    useEffect(() => {
        dispatch(setTotalPlusOne(plusOne))
    }, [plusOne])

    const genericScreenOptions = {
        headerStyle: {
            backgroundColor: COLORS.gray50,
            elevation: 0,
            borderBottomWidth: 0,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
            fontFamily: FONTS.NotoSansJPBold,
            // fontWeight:  700,
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
                                setPlusOne={setPlusOne}
                            />
                        )
                    })
                }
            </View>
            <Footer info={ticketAmount ? ticketAmount : 0} label={"Continue"} handleClickButton={handleClickButton} />
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
