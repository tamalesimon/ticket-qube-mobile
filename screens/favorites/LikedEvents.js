import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, FONTS, ICONS } from '../../constants'
import DateSegmentedList from './components/DateSegimentedList'

const LikedEvents = () => {
    return (
        <LinearGradient style={styles.container} colors={[COLORS.white, COLORS.gray100]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.sections}>
                    <DateSegmentedList />
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default LikedEvents

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        paddingTop: 16
    },
    sections: {
        gap: 26,

    }
})