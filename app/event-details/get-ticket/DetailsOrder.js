import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter, Stack } from 'expo-router'
import { COLORS, FONTS, FONTSIZE, ICONS } from '~/constants';
import { Footer, OrderSummary, PaymentMethod, EventSummaryOrderDetail } from '~/screens/event/components'
import { useDispatch, useSelector } from 'react-redux';
import { setTotalTicketAmount } from '../../../redux/events/eventSlice';
import { selectPaymentMethod, selectPaymentObject, setPaymentObject } from '../../../redux/payments/paymentSlice';
import { useBookTicketMutation } from '../../../redux/payments/paymentApiSlice';

const DetailsOrder = () => {
    const router = useRouter();
    const paymentMethod = useSelector(selectPaymentMethod)
    const paymentObject = useSelector(selectPaymentObject)

    const [bookTicket, { error, isLoading, isSuccess }] = useBookTicketMutation()
    const WhiteBGScreenOptions = {
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
            // if (paymentMethod !== null && response.) {
                
            //     router.push("event-details/get-ticket/TicketOrderCompleted")
            // } else {
            //     console.log("Payment_Object: ", paymentObject)
            //     console.log("Please select a payment method to proceed")
            // }
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
    }
})