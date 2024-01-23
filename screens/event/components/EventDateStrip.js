import { View, Text, StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../../constants';
import React from 'react'

const EventDateStrip = ({ startTime, endTime }) => {

    const startDate = new Date(startTime);
    const endDate = new Date(endTime)

    const dateList = [];

    const options = { day: 'numeric', month: 'short' };

    // Calculate the time difference in milliseconds
    const timeDiff = endDate.getTime() - startDate.getTime();

    // Convert the time difference into days
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    console.log('Number of Days:', daysDiff);


    for (let i = -1; i <= 3; i++) {
        const day = new Date(startDate);
        day.setDate(startDate.getDate() + i);
        const formattedDate = day.toLocaleDateString(undefined, options);
        const [formattedDay, formattedMonth] = formattedDate.split(' ');
        dateList.push({ day: formattedDay, month: formattedMonth });
    }

    const numbersArray = Array.from({ length: daysDiff }, (_, i) => i + 1);

    return (
        <View style={styles.container}>
            {dateList.map((date, index) => (
                <View key={index} style={[styles.dateContainer, numbersArray.includes(index) && { backgroundColor: COLORS.secondaryBase }]}>
                    <Text style={[styles.day, numbersArray.includes(index) && { color: COLORS.white }]}>{date.month}</Text>
                    <Text style={[styles.month, numbersArray.includes(index) && { color: COLORS.white }]}>{date.day}</Text>
                </View>
            ))}
        </View>
    );
};

export default EventDateStrip;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 16,
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
        backgroundColor: COLORS.white,
        // marginRight: 12
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