import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FONTS, COLORS, } from '../../constants';

export default function PopularLocations() {
  return (
    <View style={{marginTop:24, flexDirection:'column', gap:16, width:327}}>
    <View>
        <Text style={styles.title}>Popular location</Text>
    </View>
    
      <TouchableOpacity>
      <View style={styles.cardButton}>
            <View>
                <Text style={styles.cardTitle}>Metropolitan area</Text>
                <Text style={styles.cardSubTitle}>Kampala, Uganda</Text>
            </View>
            <Image
                source={require('../../assets/images/Map-teal.png')}
                resizeMode='contain'
            />
       </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.cardButton}>
            <View>
                <Text style={styles.cardTitle}>Gulu</Text>
                <Text style={styles.cardSubTitle}>Gulu, Uganda</Text>
            </View>
            <Image
                source={require('../../assets/images/Map-portage.png')}
                resizeMode='contain'
            />
       </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.cardButton}>
            <View>
                <Text style={styles.cardTitle}>Jinja</Text>
                <Text style={styles.cardSubTitle}>Jinja, Uganda</Text>
            </View>
            <Image
                source={require('../../assets/images/Map-camaron.png')}
                resizeMode='contain'
            />
       </View>
      </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize:14,
        fontWeight:700,
        color: COLORS.gray400
    },
    cardButton: {
        padding:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius:16,
        borderWidth:1,
        borderColor: COLORS.gray100
    },
    cardTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize:16,
        fontWeight:700,
        color: COLORS.grayBase
    },
    cardSubTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize:12,
        fontWeight:400,
        color: COLORS.gray400
    }
})
