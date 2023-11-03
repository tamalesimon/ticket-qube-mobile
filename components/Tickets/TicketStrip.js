import { View, Text, StyleSheet, } from 'react-native'
import React from 'react';
import { COLORS, FONTS, ICONS } from '../../constants';

const TicketStrip = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title_icon}>
                <Text style={styles.ticketTitle}>Xenson Art Exibit: 2023 Xgallery 29-30</Text>
                <ICONS.PaintIcon />
            </View>
            <View style={styles.ticketDivider}>
                <View style={styles.semiCircleLeft} />
                <View style={styles.line} />
                <View style={styles.semiCircleRight} />
            </View>
            <View style={styles.ticketStrip_details}>
                <View style={styles.ticketTime_seating}>
                    <View style={styles.time_seat}>
                        <Text style={styles.time_title}>Time</Text>
                        <Text style={styles.time_text}>10:00 PM</Text>
                    </View>
                    <View style={styles.time_seat}>
                        <Text style={styles.time_title}>Seating</Text>
                        <Text style={styles.time_text}>N/A</Text>
                    </View>
                </View>
                <View style={styles.tickerStrip_button}>
                    <Text style={styles.ticketStrip_button_text}>Premium ticket x1</Text>
                </View>
            </View>
        </View>
    )
}

export default TicketStrip

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: COLORS.white,
        borderRadius: 16,
        gap: 16
    },
    title_icon: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    ticketTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 21,
        color: COLORS.grayBase
    },
    lineContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },
    line: {
        width: "100%",
        height: 1,
        borderColor: COLORS.gray100,
        borderRadius: 1,
        borderWidth: 1,
        borderStyle: 'dashed'
    },
    semiCircleLeft: {
        overflow: 'hidden',
        width: 15.75, // 70% of the previous width (22.5)
        height: 31.5, // 70% of the previous height (45)
        position: 'absolute',
        left: -21,
        // bottom: 62,
        borderTopLeftRadius: 26.25, // 70% of the previous radius (37.5)
        borderBottomLeftRadius: 26.25, // 70% of the previous radius (37.5)
        backgroundColor: COLORS.gray50,
        transform: [
            { rotate: '180deg' }
        ]
    },
    semiCircleRight: {
        overflow: 'hidden',
        width: 15.75, // 70% of the previous width (22.5)
        height: 31.5, // 70% of the previous height (45)
        position: 'absolute',
        right: -21,
        // bottom: 62,
        borderTopLeftRadius: 26.25, // 70% of the previous radius (37.5)
        borderBottomLeftRadius: 26.25, // 70% of the previous radius (37.5)
        backgroundColor: COLORS.gray50,
        // transform: [
        //     { rotate: '180deg' }
        // ]
    },
    ticketDivider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        gap: 8
    },
    ticketStrip_details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ticketTime_seating: {
        gap: 16,
        flexDirection: 'row',
    },
    time_seat: {
        gap: 2
    },
    time_text: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 21,
        color: COLORS.grayBase
    },
    time_title: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 15,
        color: COLORS.gray400
    },
    ticketStrip_button_text: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 10,
        fontWeight: 500,
        lineHeight: 15
    },
    tickerStrip_button: {
        backgroundColor: COLORS.gray50,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8
    }
})