import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter, Stack, useLocalSearchParams } from 'expo-router';
import { COLORS, FONTS, ICONS } from '~/constants'
import GenericButton from '~/components/buttons/genericButton'
import OrderCompleted from '~/assets/images/ticket-order-completed.png'
import { useGetBookingByIdMutation } from '../../../redux/bookings/bookingApiSlice';
import InLineLoader from '~/components/loaders/InlineLoader'
import { selectBookingId, selectCurrentBooking, setCurrentBooking } from '../../../redux/bookings/bookingSlice';
import { useSelector, useDispatch } from 'react-redux';




const TicketOrderCompleted = () => {
    const [bookingStatus, setBookingStatus] = useState("INITIATED")
    const [isProcessing, setIsProcessing] = useState(true)
    const [getBookingById, { data, error, isLoading, isSuccess }] = useGetBookingByIdMutation();
    // const bookingId = useSelector(selectBookingId)
    // const booking = useSelector(selectCurrentBooking)
    // const bookingStatus = booking?.status
    const params = useLocalSearchParams()
    const { eventName, bookingId } = params
    const router = useRouter();
    const dispatch = useDispatch();
    const HeadersWithClose = {
        headerStyle: {
            backgroundColor: COLORS.white,
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
        headerLeft: () => (
            <View style={styles.headerButtonContainer}>
                <TouchableOpacity onPress={() => router.replace("/")}>
                    <ICONS.CloseIcon />
                </TouchableOpacity>
            </View>
        ),
        headerTitleAlign: 'center',
        headerTitle: ''
    }
    // console.log("Event Name: ", eventName);
    const handleViewTickets = () => {
        router.push(`tickets/TicketReciept`)
    }
    const handleViewEvents = () => {
        router.replace("Explore")
    }

    const confirmBookingStatus = async () => {
        while (true) {
            const response = await getBookingById(bookingId).unwrap();
            console.log("booking: ", response)
            setBookingStatus(response?.status)

            if (response?.status === "ACTIVE") {
                setIsProcessing(false);
                dispatch(setCurrentBooking(response))
                console.log("Booking Status is now ACTIVE");
                return;
            }

            await delay(3000);
        }
    }

    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    useEffect(() => {
        confirmBookingStatus();
    }, [])

    const content = () => {
        if (isProcessing) {
            return (
                <View style={styles.text_image_container}>
                    <View style={styles.text_container}>
                        <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center', justifyContent: 'center', }}>
                            <InLineLoader />
                            <Text style={styles.title}>Processing...</Text>
                        </View>
                        <Text style={styles.sub_title}>Please wait while we confirm your booking</Text>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={styles.text_image_container}>
                    <Image style={{ alignSelf: 'center' }} source={OrderCompleted} resizeMode='contain' />
                    <View style={styles.text_container}>
                        <Text style={styles.title}>Order Complete</Text>
                        <Text style={styles.sub_title}>Your payment was successful!{<br />}
                            See you at the {eventName} </Text>
                    </View>
                </View>
            )
        }
    }


    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1, overflow: 'hidden', paddingHorizontal: 24 }}>
            <Stack.Screen
                options={{ ...HeadersWithClose, headerTitle: "" }}
            />
            <View style={styles.container}>
                {content()}
                {!isProcessing &&
                    <View style={styles.button_container}>
                        <GenericButton bgColor={'primaryBase'} label={'View ticket'} fontColor={'white'} onPress={handleViewTickets} shouldCenterButton />
                        <GenericButton borderWidth={1} borderColor={'primaryBase'} label={'Discover more events'} fontColor={'primaryBase'} onPress={handleViewEvents} shouldCenterButton />
                    </View>}
            </View>
        </SafeAreaView>
    )
}

export default TicketOrderCompleted

const styles = StyleSheet.create({
    container: {
        marginTop: 99
    },
    text_image_container: {
        gap: 48,
        textAlign: 'center'
    },
    text_container: {
        gap: 8
    },
    title: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 24,
        fontWeight: 700,
        color: COLORS.grayBase,
        lineHeight: 36,
        letterSpacing: -0.2
    },
    sub_title: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 400,
        color: COLORS.gray400,
        lineHeight: 21,
    },
    button_container: {
        gap: 12,
        marginTop: 56
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