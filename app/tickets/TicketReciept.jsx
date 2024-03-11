import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter, Stack, useLocalSearchParams } from 'expo-router';
import { COLORS, FONTS, ICONS } from '../../constants'
import TestImage from '../../assets/images/artur-matosyan-4YWUMaftmag-unsplash.jpg'
import noImage from '../../assets/images/no-image-placeholder.jpeg'
import GenericButton from '../../components/buttons/genericButton'
import { FooterMultipleButtons } from '../../screens/event/components'
import { useSelector } from 'react-redux';
import { selectCurrentBooking } from '../../redux/bookings/bookingSlice';
import { formatMoney } from '../../utils/utils';

const TicketReciept = () => {
    const router = useRouter();
    const myBooking = useSelector(selectCurrentBooking);
    const ticketTotal = (myBooking?.numTickets) * myBooking?.ticket?.price + (myBooking?.numTickets) * myBooking?.ticket?.processingFee;
    const HeaderStack = {
        headerTitleStyle: {
            fontFamily: FONTS.NotoSansJPBold,
            fontWeight: 700,
        },
        headerStyle: {
            backgroundColor: COLORS.gray50,
            elevation: 0,
            borderBottomWidth: 0,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
            fontFamily: FONTS.NotoSansJPBold,
            // fontWeight:  700,
            lineHeight: 24,
            // backgroundColor: COLORS.gray500,
            color: COLORS.grayBase
        },
        headerLeft: () => (
            <View style={styles.headerButtonContainer}>
                <TouchableOpacity onPress={() => router.back()}>
                    <ICONS.ArrowLeftIcon />
                </TouchableOpacity>
            </View>
        ),
        headerRight: () => (
            <View style={styles.headerButtonContainer}>
                <ICONS.VerticalDotsIcon />
            </View>
        ),

        headerTitleAlign: 'center',
    }
    const handleRecieptDownload = () => {
        console.log("Downloading reciept =>")
    }
    const handleShowQRC = () => {
        router.push("tickets/TicketQrcode")
    }

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.gray50, flex: 1, paddingHorizontal: 24, paddingTop: 24, paddingBottom: 16 }}>
            <Stack.Screen options={{ ...HeaderStack, headerTitle: 'Ticket Receipt', }} />
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: myBooking?.event?.imageUrl ? '../../assets/images/no-image-placeholder.jpeg' : require('../../assets/images/no-image-placeholder.jpeg') }} resizeMode='contain' style={{ width: 279, height: 170 }} />
                </View>
                <View>
                    <View style={styles.line} />
                    <View style={styles.ticketReciept}>
                        <Text style={styles.ticketTitle}>{myBooking?.event?.name}</Text>
                        <View style={styles.lineDashed} />
                        <View style={styles.details}>
                            <View style={styles.ticket_date_time}>
                                <View>
                                    <Text style={styles.txt_title}>Date</Text>
                                    {myBooking?.event?.startTime && (
                                        <Text style={styles.txt_subtitle}>
                                            {
                                                new Date(myBooking?.event?.startTime).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                        </Text>
                                    )}
                                </View>
                                <View>
                                    <Text style={styles.txt_title}>Venue</Text>
                                    <Text style={{ ...styles.txt_subtitle, width: '90%' }}>{myBooking?.event?.location}</Text>
                                </View>
                            </View>
                            <View style={styles.ticket_date_time}>
                                <View>
                                    <Text style={styles.txt_title}>Time</Text>
                                    {myBooking?.event?.startTime && (
                                        <Text style={styles.txt_subtitle}>
                                            {
                                                new Date(myBooking?.event?.startTime).toLocaleTimeString('en-US', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                        </Text>
                                    )}
                                </View>
                                <View>
                                    <Text style={styles.txt_title}>Seat</Text>
                                    <Text style={styles.txt_subtitle}>{myBooking?.numTickets}x{myBooking?.ticket?.name}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.lineDashed]} />
                        <View style={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                            <ICONS.SuccessCheckMark />
                            <Text style={{ ...styles.ticketTitle, color: '#22C55E', fontWeight: 400, }}>Successful Payment!</Text>
                            <Text style={{ ...styles.ticketTitle }}>{formatMoney(myBooking?.ticket?.currency, ticketTotal)}</Text>
                        </View>
                        <View style={[styles.receipt_look, { marginTop: 3 }]}>
                            <View style={styles.semiCircleLeft} />
                            <View style={[styles.lineDashed]} />
                            <View style={styles.semiCircleRight} />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <ICONS.Barcode />
                            <Text style={styles.txt_subtitle}>{myBooking?.bookingId}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <FooterMultipleButtons
                iconName={"Download"}
                iconName2={"BxQr"}
                label={"Download Receipt"}
                label2={"Show QR Code"}
                fontSize={12}
                handleClickButton={handleRecieptDownload}
                handleClickButton2={handleShowQRC}
            />
        </SafeAreaView>
    )
}

export default TicketReciept

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryBase,
        borderRadius: 32,
        padding: 20,
        // gap: 24,
        shadowColor: COLORS.primaryBase,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.23,
        shadowRadius: 12.81,
        elevation: 16
    },
    imageContainer: {
        overflow: 'hidden',
        borderRadius: 16,
        borderColor: COLORS.white,
        borderWidth: 4,
        backgroundColor: '#474C50'
    },
    eventImage: {
        width: 178,
    },
    line: {
        position: 'relative',
        zIndex: 99,
        top: 0,
        height: 10,
        width: '100%',
        borderRadius: 50,
        // borderWidth:2,
        borderColor: COLORS.gray700,
        shadowColor: COLORS.grayBase,
        shadowColor: "#000000",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 20
    },
    ticketReciept: {
        paddingHorizontal: 24,
        paddingTop: 28,
        paddingBottom: 16,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        gap: 16
    },
    ticketTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 21,
        color: COLORS.grayBase,
        textAlign: 'center',
    },
    lineDashed: {
        width: "100%",
        height: 1,
        borderColor: COLORS.gray200,
        borderRadius: 1,
        borderWidth: 1,
        borderStyle: 'dashed'
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center'
    },
    ticket_date_time: {
        flexDirection: 'column',
        gap: 16,
    },
    semiCircleLeft: {
        overflow: 'hidden',
        width: 15.75, // 70% of the previous width (22.5)
        height: 31.5, // 70% of the previous height (45)
        position: 'absolute',
        left: "-9.7%",
        // bottom: 62,
        borderTopLeftRadius: 26.25, // 70% of the previous radius (37.5)
        borderBottomLeftRadius: 26.25, // 70% of the previous radius (37.5)
        backgroundColor: COLORS.primaryBase,
        transform: [
            { rotate: '180deg' }
        ]
    },
    semiCircleRight: {
        overflow: 'hidden',
        width: 15.75, // 70% of the previous width (22.5)
        height: 31.5, // 70% of the previous height (45)
        position: 'absolute',
        right: "-9.7%",
        // bottom: 62,
        borderTopLeftRadius: 26.25, // 70% of the previous radius (37.5)
        borderBottomLeftRadius: 26.25, // 70% of the previous radius (37.5)
        backgroundColor: COLORS.primaryBase,
        // transform: [
        //     { rotate: '180deg' }
        // ]
    },
    receipt_look: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttons: {
        gap: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt_title: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 18,
        color: COLORS.gray400
    },
    txt_subtitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 18,
        color: COLORS.grayBase
    },
    headerButtonContainer: {
        marginHorizontal: 24, //24px
        alignItems: 'center',
        justifyContent: 'center',
    }
})