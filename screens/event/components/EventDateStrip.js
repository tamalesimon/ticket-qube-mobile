import { View, Text, StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../../constants';
import React from 'react'

const EventDateStrip = ({ date }) => {

    const currentDate = new Date(date);

    const dateList = [];

    const options = { day: 'numeric', month: 'short' };

    for (let i = -3; i <= 2; i++) {
        const day = new Date(currentDate);
        day.setDate(currentDate.getDate() + i);
        const formattedDate = day.toLocaleDateString(undefined, options);
        const [formattedDay, formattedMonth] = formattedDate.split(' ');
        dateList.push({ day: formattedDay, month: formattedMonth });
    }

    return (
        <View style={styles.container}>
            {dateList.map((date, index) => (
                <View key={index} style={[styles.dateContainer, index === 3 && { backgroundColor: COLORS.grayBase }]}>
                    <Text style={[styles.day, index === 3 && { color: COLORS.white }]}>{date.month}</Text>
                    <Text style={[styles.month, index === 3 && { color: COLORS.white }]}>{date.day}</Text>
                </View>
            ))}
        </View>
    );
};

export default EventDateStrip;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'center',
        // borderRadius: 12,
        //marginRight:12
        //  

    },
    dateContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 9,
        backgroundColor: 'white',
        marginRight: 12
    },
    middleContainer: {
        color: COLORS.grayBase
    },
    day: {
        fontFamily: FONTS.NotoSansJPRegular,
        color: COLORS.gray400,
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 21
    },
    month: {
        fontFamily: FONTS.NotoSansJPRegular,
        color: COLORS.gray400,
        fontSize: 10,
        color: COLORS.gray400
    }
})