import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { Link } from "expo-router";
import { COLORS, FONTS } from "../../../constants";
import GenericButton from "../../../components/buttons/genericButton";
import { moneyFormat, formatMoney, formatMoneyUtil } from "../../../utils/utils";

import { selectCurrentEventTickets, selectTotalTicketAmount, selectPlusOne } from "../../../redux/events/eventSlice";

const Footer = ({ info, label, handleClickButton, hideAmount }) => {

    const ticketDetails = useSelector(selectCurrentEventTickets);
    const totalTicketAmount = useSelector(selectTotalTicketAmount);
    const plusOne = useSelector(selectPlusOne)
    const shouldCenterButton = hideAmount;

    const amountSubtitle = () => {
        if (plusOne === 0) {
            return "Are you going!"
        } else if (plusOne === 1) {
            return "You're going!"
        } else {
            return `You and +${plusOne - 1} others are going!`
        }
    }

    const currencyType = ticketDetails[0]?.currency?.toUpperCase();
    console.log("ticket-details", ticketDetails)

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {!hideAmount ? <View>
                    <Text style={styles.amount}>{currencyType ? currencyType : null}{" "}{formatMoneyUtil(totalTicketAmount)}</Text>
                    <Text style={styles.spots}>{amountSubtitle()}</Text>
                </View> : null}
                <View style={{
                    alignItems: hideAmount ? 'center' : 'flex-start',
                    width: hideAmount ? '100%' : undefined,
                }}>
                    <GenericButton
                        bgColor={"primaryBase"}
                        fontColor={"white"}
                        label={label}
                        shouldCenterButton={shouldCenterButton}
                        onPress={handleClickButton} />
                </View>
            </View>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    wrapper: {

        backgroundColor: "white",
        // alignItems: "center",
        // justifyContent: "center",
        // height: 92,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 24,
        paddingVertical: 8,
        // shadowColor: "#111827",
        // shadowOffset: {
        //     width: 0,
        //     height: 18,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 20.00,
        // elevation: 5
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    amount: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 700,
        marginBottom: 4,
        color: COLORS.grayBase
    },
    spots: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 12,
        lineHeight: 18,
        fontWeight: 400,
        color: COLORS.gray400
    }
})