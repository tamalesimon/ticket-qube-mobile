import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Footer } from './components'
import { COLORS, FONTS, FONTSIZE, icons } from '../../constants'

const SelectPayment = () => {
  const [selectedPayment, setSelectedPayment] = useState(false)

  // const handleSelected = () => {
  //   setIsSelected(!isSelected)
  // }
  const paymentOptions = [{
    id: 1,
    name: "Card",
    icon: "MasterCardVisa"
  }, {
    id: 2,
    name: "Apple pay",
    icon: "ApplePay"
  }, {
    id: 3,
    name: "PayPal",
    icon: "PayPal"
  }, {
    id: 4,
    name: "Payooneer",
    icon: "Payooneer"
  }]
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, overflow: 'hidden', paddingHorizontal: 24 }}>
      <View>
        <TouchableOpacity style={styles.one_click_payment}>
          <Text style={styles.one_click_payment_text}>One click payment</Text>
          <icons.ArrowNarrowRight />
        </TouchableOpacity>
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>
        {
          paymentOptions.map((item) => {
            const handleSelected = () => setSelectedPayment(item.id);
            const isSelected = selectedPayment == item.id;
            const IconComponent = icons[item.icon];
            return (
              <TouchableOpacity key={item.id} onPress={handleSelected}>
                <View style={styles.other_payments}>
                  <View style={styles.other_payments_icon_text}>
                    {isSelected ? <icons.SelectCircleSelected /> : <icons.SelectCircle />}
                    <Text style={styles.other_payments_text}>{item.name}</Text>
                  </View>
                  {/* <IconComponent /> */}
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <Footer label={"Confirm"} />
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
})