import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { FONTS, COLORS, FONTSIZE } from "../../constants";

export default function AcceptTerms() {
  return (
    <View style={styles.container}>
      <Text style={styles.textBody}>
        By signing in, I accept the <Text style={styles.textTitle}>Terms of Service</Text> and <Text style={styles.textTitle}>Community Guidelines</Text>
        {' '}and have read <Text style={styles.textTitle}>Privacy Policy.</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 305,
    marginTop: 50,
    alignItems: 'center',
  },
  textBody: {
    textAlign: "center",
    fontSize: FONTSIZE.xsmall,
    color: COLORS.gray400,
    fontFamily: FONTS.NotoSansJPRegular,
  },
  textTitle: {
    fontWeight: 500,
    color: "black",
  }
})
