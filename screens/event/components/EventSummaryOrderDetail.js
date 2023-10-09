import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FONTS, COLORS, ICONS } from '../../../constants'
import testImage from '../../../assets/images/test_image.jpg'

const EventSummaryOrderDetail = () => {
    return (
        <View style={styles.event_summary}>
            <Image source={testImage}
                resizeMode='cover'
                style={styles.event_summary_img}
            />
            <View style={styles.event_summary_content}>
                <Text style={styles.event_summary_content_title}>Xenson Art Festival: 2023 Kamwokya 29-30</Text>
                <View style={styles.date_time}>
                    <View style={styles.date_time_item}>
                        <ICONS.CalendarDetails />
                        <Text style={styles.event_summary_date_time}>March 19, 2023</Text>
                    </View>
                    <View style={styles.date_time_item}>
                        <ICONS.ClockDetailsTime />
                        <Text style={styles.event_summary_date_time}>10:00 PM - 12:00 PM</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default EventSummaryOrderDetail;

const styles = StyleSheet.create({
    event_summary: {
        padding: 12,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 16,
        gap: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 7,
        },
        shadowOpacity: 0.13,
        shadowRadius: 25,

        elevation: 15,
    },
    event_summary_img: {
        width: 88,
        height: 96,
        borderRadius: 12,

    },
    event_summary_content: {
        flex: 1,
        gap: 12
    },
    event_summary_content_title: {
        fontSize: 14,
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 700,
        lineHeight: 21,
        color: COLORS.grayBase
    },
    event_summary_date_time: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 15,
        color: COLORS.grayBase
    },
    event_summary_content_text: {
        fontSize: 14,
        color: '#666'
    },
    date_time: {
        gap: 8
    },
    date_time_item: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
})