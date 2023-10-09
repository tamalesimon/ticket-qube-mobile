import { SafeAreaView } from 'react-native'
import { Footer, OrderSummary, PaymentMethod, EventSummaryOrderDetail } from './components'
import { COLORS, FONTS, ICONS } from '../../constants';
import testImage from '../../assets/images/test_image.jpg'

const DetailsOrder = () => {
    const { CalendarDetails, ClockDetailsTime } = ICONS
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