import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { COLORS, FONTS } from "../../../constants";
import GenericButton from "../../../components/buttons/genericButton";

const FooterMultipleButtons = ({ info, spotInfo, iconName, iconName2, fontSize, label, label2, handleClickButton, handleClickButton2 }) => {
    const shouldCenterButton = !info && !spotInfo;
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {/* <View>
                    {info && <Text style={styles.amount}>{info}</Text>}
                    {spotInfo && <Text style={styles.spots}>{spotInfo}</Text>}
                </View> */}
                <View style={{
                    gap: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    // alignItems: shouldCenterButton ? 'center' : 'flex-start',
                    width: shouldCenterButton ? '50%' : undefined,
                }}>
                    <GenericButton
                        bgColor={"primaryBase"}
                        fontColor={"white"}
                        fontSize={fontSize}
                        label={label}
                        iconName={iconName}
                        shouldCenterButton={shouldCenterButton}
                        onPress={handleClickButton} />
                    <GenericButton
                        bgColor={"white"}
                        fontColor={"grayBase"}
                        fontSize={fontSize}
                        label={label2}
                        iconName={iconName2}
                        shouldCenterButton={shouldCenterButton}
                        onPress={handleClickButton2} />
                </View>
            </View>
        </View>
    )
}

export default FooterMultipleButtons;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.gray50,
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