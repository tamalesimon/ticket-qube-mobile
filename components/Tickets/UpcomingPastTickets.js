import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, ICONS } from '../../constants'
import TicketStrip from './TicketStrip';

const UpcomingPastTickets = () => {
    const tabOptions = [
        { label: "Upcoming", value: "upcoming" },
        { label: "Past", value: "past" }
    ];
    const [selected, setSelected] = useState(tabOptions[0].value)
    const handleTabPress = (tab) => {
        setSelected(tab)
    }
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                {tabOptions.map((tabOption) => (
                    <TouchableOpacity style={[styles.tab, selected === tabOption.value && styles.tabSelected]} onPress={() => handleTabPress(tabOption.value)}>
                        <Text style={[styles.tabText, selected === tabOption.value && styles.tabTextSelected]}>{tabOption.label}</Text>
                    </TouchableOpacity>
                ))
                }
            </View>
            <TicketStrip />
            <TicketStrip />
            <TicketStrip />
        </View>
    )
}

export default UpcomingPastTickets

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 16,
        marginTop: 16
    },
    tabContainer: {
        flexDirection: 'row',
        gap: 8,
        padding: 4,
        backgroundColor: COLORS.white,
        borderRadius: 8
    },
    tab: {
        paddingHorizontal: 47.25,
        paddingVertical: 7,
        borderRadius: 8
    },
    tabSelected: {
        backgroundColor: COLORS.secondaryBase,
    },
    tabText: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 18,
        color: COLORS.gray400
    },
    tabTextSelected: {
        color: COLORS.white,
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 18
    }
})