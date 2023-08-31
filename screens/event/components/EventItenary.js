import { View, Image, Text, StyleSheet } from "react-native"
import { COLORS, FONTS } from "../../../constants";

const EventItenary = () => {
    return (
        <View style={{marginBottom: 24}}>
            <Text style={styles.sectionTitle}>Activity list</Text>
        </View>
    )
}

export default EventItenary;

const styles = StyleSheet.create({
    container: {},
    sectionTitle:{
        fontSize: 16,
        fontFamily: FONTS.NotoSansJPRegular,
        lineHeight: 24,
        color: COLORS.grayBase,
        fontWeight: 700
    }
})