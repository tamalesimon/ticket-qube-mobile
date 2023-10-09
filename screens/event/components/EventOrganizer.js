import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Xenson from "../../../assets/images/xenson_400x400.jpg"
import { COLORS, FONTS, ICONS } from "../../../constants";
import GenericButton from "../../../components/buttons/genericButton";

const EventOrganizer = () => {
    return (
        <View style={{ marginBottom: 24 }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 16 }}>
                        <Image source={Xenson} style={{ resizeMode: 'contain', borderRadius: 100, width: 48, height: 48 }} />
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.organizerName}>Xenson Creatives</Text>
                            <ICONS.BadgeVerified />
                        </View>
                        <Text style={styles.genre}>Art & Crafts</Text>
                    </View>
                </View>
                <GenericButton borderWidth={1} borderColor={'primaryBase'} fontColor={'primaryBase'} label={'Follow'} />
            </View>
        </View>
    )
}

export default EventOrganizer;

const styles = ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    organizerName: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        lineHeight: 21,
        color: COLORS.grayBase,
        fontWeight: 700,
        marginRight: 4
    },
    genre: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 12,
        lineHeight: 18,
        fontWeight: 400,
        color: COLORS.gray400
    }
})