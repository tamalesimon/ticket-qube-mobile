import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Footer } from '../../../screens/event/components'
import { COLORS, FONTS, FONTSIZE, ICONS } from '../../../constants';
import { selectPaymentMethods, setPaymentMethod } from '../../../redux/payments/paymentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter, Stack } from 'expo-router';


const SelectPayment = () => {
  const [selectedPayment, setSelectedPayment] = useState()
  const [isSelected, setIsSelected] = useState(false)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const router = useRouter();

  const paymentMethods = useSelector(selectPaymentMethods)

  const handleSelectedPaymentOption = () => {
    const selectedPaymentOption = paymentMethods.find(Option => Option.id === selectedPayment)
    router.back()
    // navigation.navigate("event-details/get-ticket/DetailsOrder")
  }

  const handleSelectedPayment = (item) => {
    setSelectedPayment(item.id)
    const { name, icon } = item
    dispatch(setPaymentMethod({ name, icon }))
  }
  const screenOptions = {
    headerStyle: {
      backgroundColor: COLORS.white,
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
        <TouchableOpacity onPress={() => { router.back() }}>
          <ICONS.ArrowLeftIcon />
        </TouchableOpacity>
      </View>
    ),
    headerRight: () => (
      <View style={styles.headerButtonContainer}>
        <TouchableOpacity>
          <ICONS.CircleQuestion />
        </TouchableOpacity>
      </View>
    ),
    headerTitleAlign: 'center',
  }

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, overflow: 'hidden', paddingHorizontal: 24 }}>
      <Stack.Screen
        options={{ ...screenOptions, headerTitle: 'Select Payment' }} />
      <View>
        <TouchableOpacity style={styles.one_click_payment}>
          <Text style={styles.one_click_payment_text}>One click payment</Text>
          <ICONS.ArrowNarrowRight />
        </TouchableOpacity>
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>
        {
          paymentMethods?.map((item) => {
            const IconComponent = ICONS[item.icon];
            return (
              <TouchableOpacity key={item.id} onPress={() => handleSelectedPayment(item)}>
                <View style={styles.other_payments}>
                  <View style={styles.other_payments_icon_text}>
                    {selectedPayment === item.id ? <ICONS.SelectCircleSelected /> : <ICONS.SelectCircle />}
                    <Text style={styles.other_payments_text}>{item.name}</Text>
                  </View>
                  <View><IconComponent /></View>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <Footer label={"Confirm"} handleClickButton={handleSelectedPaymentOption} hideAmount={true} />
    </SafeAreaView>
  )
}

export default SelectPayment;

const styles = StyleSheet.create({
  one_click_payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginTop: 16,
    borderColor: COLORS.primaryBase,
    borderRadius: 16
  },
  one_click_payment_text: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: FONTSIZE.small,
    fontWeight: 500,
    lineHeight: 18,
    color: COLORS.primaryBase
  },
  other_payments: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: COLORS.gray50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12
  },
  other_payments_icon_text: {
    flexDirection: "row",
    gap: 12
  },
  other_payments_text: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: FONTSIZE.small,
    fontWeight: 700,
    lineHeight: 18,
  },
  divider: {
    marginVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  }, dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray100,
  },
  dividerText: {
    fontSize: 16,
    color: COLORS.gray300
  },
  headerButtonContainer: {
    marginHorizontal: 24, //24px
    alignItems: 'center',
    justifyContent: 'center',
  },
})

