import { View, Image, Text, StyleSheet } from "react-native"
import { FONTS, COLORS } from "../../../constants";

const EventLocation = () => {
    return (
        <View style={{ marginBottom: 75 }}>
            <Text style={styles.sectionTitle}>Event Location</Text>
            <Image source={require('../../../assets/images/Map.png')} style={{ width: '100%', borderRadius: 16 }} />
        </View>
    )
}

export default EventLocation;

const styles = StyleSheet.create({
    container: {},
    sectionTitle: {
        fontSize: 16,
        fontFamily: FONTS.NotoSansJPRegular,
        lineHeight: 24,
        color: COLORS.grayBase,
        fontWeight: 700,
        marginBottom: 16
    }
})