import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TicketBottomStrip = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Total</Text>
        <Text>info</Text>
      </View>
    </View>
  )
}

export default TicketBottomStrip

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:24,
    }
})