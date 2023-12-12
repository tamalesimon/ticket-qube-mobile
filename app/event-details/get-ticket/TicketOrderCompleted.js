import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '~/constants'
import GenericButton from '~/components/buttons/genericButton'
import OrderCompleted from '~/assets/images/ticket-order-completed.png'

const TicketOrderCompleted = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1, overflow: 'hidden', paddingHorizontal: 24 }}>
            <View style={styles.container}>
                <View style={styles.text_image_container}>
                    <Image style={{ alignSelf: 'center' }} source={OrderCompleted} resizeMode='contain' />
                    <View style={styles.text_container}>
                        <Text style={styles.title}>Order Complete</Text>
                        <Text style={styles.sub_title}>Your payment was successful!{<br />}
                            See you at the [eventName_placeholder] </Text>
                    </View>
                </View>
                <View style={styles.button_container}>
                    <GenericButton bgColor={'primaryBase'} label={'View ticket'} fontColor={'white'} />
                    <GenericButton borderWidth={1} borderColor={'primaryBase'} label={'Discover more events'} fontColor={'primaryBase'} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TicketOrderCompleted

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
    }
})