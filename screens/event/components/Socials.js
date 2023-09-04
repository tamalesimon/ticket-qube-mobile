import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { COLORS, FONTS } from '../../../constants';

const Socials = () => {
    const socialsData = [
        { network: 'Facebook' },
        { network: 'Instagram' },
        { network: 'Twitter' },
        { network: 'Whatsapp' },

    ]
    return (
        <View style={{ flexDirection: 'row'}}>
        { socialsData.map((item, index) => (
            <View key={index} style={styles.container}>
                <View style={styles.iconContainer}>
                    <SocialIcon network={item.network.toLowerCase()} />
                </View>
                <Text style={styles.network}>{item.network}</Text>
            </View>
            )
            )}
        </View>
    )
}

export default Socials

const styles = StyleSheet.create({
    container: {
        marginRight: 6,
        flexDirection:'column',
        alignItems: 'center',
        gap:12
    },
    iconContainer:{
        padding: 16,
        borderColor: COLORS.gray100,
        borderWidth: 1,
        borderRadius: "100%",
    },
    network: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 12,
        fontWeight: 400,
        color:COLORS.grayBase,
        lineHeight: 18,
    }
})