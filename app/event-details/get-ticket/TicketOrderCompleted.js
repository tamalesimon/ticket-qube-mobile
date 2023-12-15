import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter, Stack } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from '~/constants'
import GenericButton from '~/components/buttons/genericButton'
import OrderCompleted from '~/assets/images/ticket-order-completed.png'
import { ICONS } from '../../../constants'


const TicketOrderCompleted = () => {
    const router = useRouter();
    const navigation = useNavigation();
    const HeadersWithClose = {
        headerStyle: {
            backgroundColor: COLORS.white,
            elevation: 0,
            borderBottomWidth: 0,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
            fontFamily: FONTS.NotoSansJPBold,
            // fontWeight: '700',
            lineHeight: 24,
            // backgroundColor: COLORS.gray500,
            color: COLORS.grayBase
        },
        headerLeft: () => (
            <View style={styles.headerButtonContainer}>
                <TouchableOpacity onPress={() => router.replace("/")}>
                    <ICONS.CloseIcon />
                </TouchableOpacity>
            </View>
        ),
        headerTitleAlign: 'center',
        headerTitle: ''
    }
    const handleViewTickets = () => {
        navigation.navigate(`Tickets/${id}`)
    }
    const handleViewEvents = () => {
        navigation.navigate("Explore")
    }
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1, overflow: 'hidden', paddingHorizontal: 24 }}>
            <Stack.Screen
                options={{ ...HeadersWithClose, headerTitle: "" }}
            />
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
                    <GenericButton bgColor={'primaryBase'} label={'View ticket'} fontColor={'white'} onPress={handleViewTickets} />
                    <GenericButton borderWidth={1} borderColor={'primaryBase'} label={'Discover more events'} fontColor={'primaryBase'} onPress={handleViewEvents} />
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