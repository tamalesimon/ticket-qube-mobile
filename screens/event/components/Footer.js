import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { COLORS, FONTS } from "../../../constants";
import GenericButton from "../../../components/buttons/genericButton";

const Footer = ({ info, spotInfo, label }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.amount}>{info}</Text>
                    <Text style={styles.spots}>{spotInfo}</Text>
                </View>
                <GenericButton bgColor={"primaryBase"} fontColor={"white"} label={label} />
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
        height: 72,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 24,
        paddingVertical: 8,
        shadowColor: "#111827",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.00,
        elevation: 5
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