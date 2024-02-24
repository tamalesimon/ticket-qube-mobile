import { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter, Stack } from 'expo-router'
import { COLORS, FONTS, FONTSIZE, ICONS } from '~/constants';
import { Footer, OrderSummary, PaymentMethod, EventSummaryOrderDetail } from '~/screens/event/components'
import { useDispatch, useSelector } from 'react-redux';
import { setTotalTicketAmount } from '../../../redux/events/eventSlice';
import { selectPaymentMethod, selectPaymentObject, setPaymentObject } from '../../../redux/payments/paymentSlice';
import { useBookTicketMutation } from '../../../redux/payments/paymentApiSlice';
import LoadingIndicator from '../../../components/loaders/LoadingIndicator';


const DetailsOrder = () => {
    const router = useRouter();
    const paymentMethod = useSelector(selectPaymentMethod)
    const paymentObject = useSelector(selectPaymentObject)

    const [bookingLoading, setBookingLoading] = useState(false);

    const [bookTicket, { error, isLoading, isSuccess }] = useBookTicketMutation()
    const WhiteBGScreenOptions = {
        headerStyle: {
            backgroundColor: bookingLoading ? '#7F7F7F' : COLORS.white,
            elevation: 0,
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
                <TouchableOpacity onPress={() => router.back()}>
                    <ICONS.ArrowLeftIcon />
                </TouchableOpacity>
            </View>
        ),
        headerTitleAlign: 'center',
    }
    const handleClickButton = async () => {
        try {
            const response = await bookTicket(paymentObject).unwrap()

            console.log("Response: ", response)
            setBookingLoading(true)
            if (paymentMethod !== null && response.bookingId) {
                setTimeout(() => {
                    setBookingLoading(false)
                    router.push({
                        pathname: "event-details/get-ticket/TicketOrderCompleted",
                        params: { eventName: "Eating Contest" }
                    })
                }, 3000)
            } else {
                console.log("Payment_Object: ", paymentObject)
                console.log("Please select a payment method to proceed")
                console.log("Error: ", error?.message || "Unknown Error Occurred, try again later")
            }
        } catch (err) {

        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1, overflow: 'hidden', paddingHorizontal: 24, gap: 24, paddingTop: 16 }}>
            <Stack.Screen
                options={{ ...WhiteBGScreenOptions, headerTitle: 'Order Details' }}
            />
            <EventSummaryOrderDetail />
            <OrderSummary />
            <PaymentMethod />
            <Footer
                info={"UGX 152,000"}
                spotInfo={"You're going! +1"}
                label={"Complete payment"}
                handleClickButton={handleClickButton}
            />
            {bookingLoading &&
                <View style={styles.loader}>
                    <LoadingIndicator />
                </View>
            }
        </SafeAreaView>
    )
}

export default DetailsOrder;

const styles = StyleSheet.create({
    Arrow: {
        paddingVertical: 12,
        // paddingHorizontal:13.5,
        borderRadius: 12,
    },
    headerButtonContainer: {
        marginHorizontal: 24, //24px
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
})