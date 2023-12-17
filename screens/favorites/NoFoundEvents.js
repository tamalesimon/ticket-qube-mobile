import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '~/constants';
import GenericButton from '~/components/buttons/genericButton'
import NoFavorites from '~/assets/images/no-favorites-found.png'

const NoFoundEvents = (handleFindEvents) => {
    return (
        <View style={styles.container}>
            <View style={styles.text_image_container}>
                <Image style={{ alignSelf: 'center' }} source={NoFavorites} resizeMode='contain' />
                <View style={styles.text_container}>
                    <Text style={styles.title}>No favorites found</Text>
                    <Text style={styles.sub_title}>Like an event to find it later, and receive{<br />}
                        notifications before it sells out. </Text>
                </View>
            </View>
            <View style={styles.button_container}>
                <GenericButton bgColor={'primaryBase'} label={'Find Events'} fontColor={'white'} onPress={handleFindEvents} withWidth={148} />
            </View>
        </View>
    )
}

export default NoFoundEvents

const styles = StyleSheet.create({
    container: {
        marginTop: 99
    },
    text_image_container: {
        gap: 48,
        textAlign: 'center'
    },
    text_container: {
        gap: 8
    },
    title: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 24,
        fontWeight: 700,
        color: COLORS.grayBase,
        lineHeight: 36,
        letterSpacing: -0.2
    },
    sub_title: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 400,
        color: COLORS.gray400,
        lineHeight: 21,
    },
    button_container: {
        gap: 12,
        marginTop: 56
    },
    Arrow: {
        paddingVertical: 12,
        // paddingHorizontal:13.5,
        borderRadius: 12,
    },
    headerButtonContainer: {
        marginHorizontal: 24, //24px
        alignItems: 'center',
        justifyContent: 'center',
    }
})