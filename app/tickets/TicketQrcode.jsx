import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, ICONS } from '../../constants'
import { useRouter, Stack, useLocalSearchParams } from 'expo-router';
import GenericButton from '../../components/buttons/genericButton'
import test_image from '../../assets/images/test_image.jpg'
import { useSelector } from 'react-redux';
import { FooterMultipleButtons } from '../../screens/event/components'
import { selectCurrentBooking } from '../../redux/bookings/bookingSlice';
import DashedLine from 'react-native-dashed-line'
import useImageErrorHandler from '../../hooks/useImageErrorHandler';

const TicketQrcode = () => {

  const router = useRouter();
  const myBooking = useSelector(selectCurrentBooking);
  const [imageSource, handleImageError] = useImageErrorHandler(myBooking?.event?.imageUrl)
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
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.gray50, flex: 1, paddingHorizontal: 24, paddingTop: 48, paddingBottom: 16 }}>
      <Stack.Screen options={{ ...HeaderStack, headerTitle: 'QR Code', }} />
      <View style={styles.qr_container}>
        <View style={styles.event_details}>
          <Image
            source={{ uri: imageSource ? imageSource : require('../../assets/images/no-image-placeholder.jpeg') }}
            resizeMode='cover'
            style={{ height: 66, width: 66, borderRadius: 12 }}
            onError={handleImageError}
          />
          <View style={{ flexDirection: 'column', gap: 8 }}>
            <View style={{ width: "80%" }}>
              <Text style={styles.event_details_title}>{myBooking?.event?.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 16 }}>
              <View style={styles.date_time_details}>
                <ICONS.CalendarDetails />
                {myBooking?.event?.startTime && (
                  <Text style={styles.text_small}>
                    {
                      new Date(myBooking?.event?.startTime).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                  </Text>
                )}
              </View>
              <View style={styles.date_time_details}>
                <ICONS.ClockDetailsTime />
                {myBooking?.event?.startTime && (
                  <Text style={styles.text_small}>
                    {
                      new Date(myBooking?.event?.startTime).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 24, marginBottom: 56 }}>
          <DashedLine dashLength={5} dashColor='#E5E7EB' dashGap={7} />
        </View>
        <View style={styles.qr_code}>
          <Image style={{ width: 200, height: 200 }} source={{ uri: myBooking?.qrCodeImageUrl }} resizeMode='contain' />
        </View>
      </View>
      <View style={styles.quick_tip}>
        <View style={{ backgroundColor: COLORS.white, padding: 8, borderRadius: 8 }}>
          <ICONS.LampOn />
        </View>
        <View style={{ width: "80%" }}>
          <Text style={styles.quick_tip_text}>Please show this code at the event entrance to proceed.</Text>
        </View>
      </View>
      <FooterMultipleButtons
        iconName={"Download"}
        iconName2={"Share"}
        label={"Download Image"}
        label2={"Share Code"}
        fontSize={12}
        handleClickButton={() => { }}
        handleClickButton2={() => { }}
      />
    </SafeAreaView>
  )
}

export default TicketQrcode;

const styles = StyleSheet.create({
  qr_container: {
    padding: 24,
    borderRadius: 32,
    backgroundColor: COLORS.white,
  },
  event_details: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  event_details_title: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 500,
    fontSize: 14,
    color: COLORS.grayBase,
    lineHeight: 21,
    flexWrap: 'wrap'
  },
  date_time_details: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  text_small: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 400,
    fontSize: 10,
    color: COLORS.grayBase,
    lineHeight: 15
  },
  lineDashed: {
    width: "100%",
    height: 1,
    borderColor: COLORS.gray200,
    borderRadius: 1,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginTop: 24,
    marginBottom: 56
  },
  qr_code: {
    alignItems: 'center',
    paddingBottom: 56
  },
  quick_tip: {
    marginTop: 32,
    gap: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.gray100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quick_tip_text: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 400,
    fontSize: 12,
    color: COLORS.grayBase,
    lineHeight: 18
  },
  headerButtonContainer: {
    marginHorizontal: 24, //24px
    alignItems: 'center',
    justifyContent: 'center',
  }
})