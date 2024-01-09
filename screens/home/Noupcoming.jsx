import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants';

const Noupcoming = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No Events</Text>
        </View>
    )
}

export default Noupcoming

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        // borderWidth: 2,
        borderColor: COLORS.gray100,
        backgroundColor:COLORS.gray50,
        borderStyle: 'dashed',
        marginVertical:16,
        borderRadius: 16
    },
    text: {
        textAlign: 'center',
        color: COLORS.grayBase,
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 500
    }
})