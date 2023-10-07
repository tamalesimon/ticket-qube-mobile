import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Footer } from './components';
import InputField from '../../components/inputField/InputField';
import { COLORS, FONTS, FONTSIZE, icons } from '../../constants';
import AcceptTerms from '../../components/terms/AcceptTerms';

const ContactInfo = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, overflow: 'hidden', }}>
      <View style={styles.form_details}>
        <View style={{ marginBottom: 16 }}>
          <Text style={styles.input_label}>
            Full Name
          </Text>
          <View style={styles.input_text_container}>
            <Text style={styles.input_text}>Simon Peter Tamale Kafeero</Text>
          </View>
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={styles.input_label}>
            Email Address
          </Text>
          <View style={styles.input_text_container}>
            <icons.MailIcon style={{ marginTop: 6 }} />
            <Text style={styles.input_text}>tamalesp@gmail.com</Text>
          </View>
        </View>
        <View>
          <Text style={styles.input_label}>
            Mobile Phone
          </Text>
          <View style={styles.input_text_container}>
            <icons.PhoneIcon />
            <Text style={styles.input_text}>+256 779 813 251</Text>
          </View>
        </View>
      </View>
      <View style={styles.keep_updated}>
        <TouchableOpacity onPress={handleClick}>
          {isClicked ? <icons.CheckCircle /> : <icons.CheckedCircleOrange />}
        </TouchableOpacity>
        <Text style={styles.keep_updated_text}>
          Keep me updated on the latest news, events, and the exclusive offers on this event organizer.
        </Text>
      </View>
      <View style={styles.policy}>
        <Text style={styles.data_sharing_policy}>
          By clicking "Confirm", I accept the <Text style={styles.data_sharing_policy_link}>Terms of Service</Text> and have read <Text style={styles.data_sharing_policy_link}>Privacy Policy</Text>. I agree that TicketQube may <Text style={styles.data_sharing_policy_link}>share my information</Text> with the event organizer.
        </Text>
      </View>
      <Footer info={"UGX 150,000"} spotInfo={"You're going! +1"} label={"Confirm"} />
    </SafeAreaView>
  )
}

export default ContactInfo;

const styles = StyleSheet.create({
  form_details: {
    backgroundColor: "white",
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 24,
    padding: 24,
    borderRadius: 20,
    shadowColor: "#c7c7c7",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.13,
    shadowRadius: 14,
    elevation: 0
  },
  input_label: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 21,
    color: COLORS.gray400,
    marginBottom: 8
  },
  input_text: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 21,
    color: COLORS.grayBase,
  },
  input_text_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 20,
    backgroundColor: COLORS.gray50,
    borderRadius: 16
  },
  keep_updated: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.gray50,
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 12
  },
  keep_updated_text: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
    color: COLORS.grayBase
  },
  policy: {
    marginHorizontal: 24,
    marginTop: 16

  },
  data_sharing_policy: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: FONTSIZE.small,
    fontWeight: 400,
    lineHeight: 18,
    color: COLORS.gray400
  },
  data_sharing_policy_link: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: FONTSIZE.small,
    fontWeight: 500,
    lineHeight: 18,
    color: COLORS.grayBase
  }

})