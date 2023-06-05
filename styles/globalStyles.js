import { StyleSheet } from "react-native";
import { FONTS, COLORS } from "../constants";

const globalStyles = StyleSheet.create({
    container: {
        width:"100%"
    },
    Heading1: {
        fontSize: 48,
        fontWeight: FONTS.Bold,
        lineHeight: 19.2,
    },
    Heading2: {
        fontSize: 40,
        fontWeight: FONTS.NotoSansJPBold,
        lineHeight: 19.2,
    },
    Heading3:{
        fontSize: 32,
        fontWeight: FONTS.NotoSansJPBold,
        lineHeight: 22.4,
    },
    Heading4: {
        fontSize: 24,
        fontFamily: FONTS.NotoSansJPBold,
        color: COLORS.grayBase,
        fontWeight:700,
        lineHeight: 36,
    },
    Heading5: {
        fontSize: 20,
        fontFamily: FONTS.NotoSansJPBold,
        color: COLORS.grayBase,
        fontWeight: 700,
        lineHeight: 24
    },
    Heading6: {
        fontSize: 18,
        fontWeight: FONTS.NotoSansJPBold,
        lineHeight: 24,
    },
})

export default globalStyles;