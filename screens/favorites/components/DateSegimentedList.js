import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import useDataFetch from '../../../utils/useDataFetch';
import SuggestionCard from '../../../components/card/SuggestionCard';
import { FONTS, COLORS, ICONS } from '../../../constants';


const DateSegmentedList = () => {

    const { data, isLoading, error, refetch } = useDataFetch('3000/suggestion')

    // Ensure data is an array
    const dataArray = Array.isArray(data) ? data : [];

    //Group events by date
    const groupEvents = dataArray.reduce((acc, item) => {
        if (item && item.startDate) {
            const startDate = new Date(item.startDate);
            const formattedDate = startDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            if (!acc[formattedDate]) {
                acc[formattedDate] = [];
            }
            acc[formattedDate].push(item);
        }
        return acc;
    }, {});
    return (
        <>
            {Object.entries(groupEvents).map(([date, data]) => (
                <View key={date} style={{gap: 12}}>
                    <View style={styles.dates}>
                        <ICONS.CalendarIcon />
                        <Text style={styles.dateText}>{date}</Text>
                    </View>
                    {
                        data.map((item) => {
                            return (
                                <SuggestionCard style={styles.suggestionSection} key={item?.id} item={item} />
                            )
                        })
                    }
                </View>
            ))

            }</>

    )
}

export default DateSegmentedList

const styles = StyleSheet.create({
    dates: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    dateText: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 700,
        color: COLORS.grayBase
    },
})