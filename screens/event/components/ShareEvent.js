import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { icons, COLORS, FONTS } from '../../../constants';
import Display from '../../../utils/Display';

const ShareEvent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <View style={styles.divider}></View>
                <View>
                    <Text style={styles.sectionTitle}>Share this event</Text>
                    <TouchableOpacity>
                        <icons.CloseIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ShareEvent;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    section: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        paddingTop: 12,
        paddingBottom: 16,
        borderRadius: 40,
        width: Display.setWidth(375),
        height: Display.setHeight(394),
        flexDirection: 'column-reverse'
    },
    divider: {
        width: Display.setHeight(32),
        height: Display.setHeight(6),
        backgroundColor: COLORS.gray100,
        borderRadius: 50
    },
    sectionTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 24,
        color: COLORS.grayBase
    }
})