import { SafeAreaView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Footer, OrderSummary, PaymentMethod, EventSummaryOrderDetail } from './components'

const DetailsOrder = () => {
    const route = useRoute();
    const selectedPaymentOption = route.params?.selectedPaymentOptions;
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1, overflow: 'hidden', paddingHorizontal: 24, gap: 24, paddingTop: 16 }}>
            <EventSummaryOrderDetail />
            <OrderSummary />
            <PaymentMethod />
            <Footer
                info={"UGX 152,000"}
                spotInfo={"You're going! +1"}
                label={"Complete payment"}
            />
        </SafeAreaView>
    )
}

export default DetailsOrder;