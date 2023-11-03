import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, ICONS } from '../../constants'
import TicketStrip from './TicketStrip';

const UpcomingPastTickets = () => {
    
    return (
        <View style={styles.container}>
            
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
    
})