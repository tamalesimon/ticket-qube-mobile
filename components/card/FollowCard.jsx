import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { icons, FONTS, COLORS } from '../../constants';
import GenericButton from '../buttons/genericButton';

export default function FollowCard({ isFollowing, onPress, item }) {
  const isFollowed = isFollowing.includes(item)
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item?.picUrl}}
        resizeMode='cover'
        style={styles.cardImage}
      />
      <View style={{gap:4}}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubTitle}>by {item.name}</Text>
      </View>
      <View style={styles.organizerLocation}>
        <View style={{flexDirection: 'row', gap:6.79, alignItems: 'center'}}>
            <icons.MapPin/>
            <Text>{item.location}</Text>
        </View>
        <View>
            <Text>People icons</Text>
        </View>
      </View>
      <View style={{ paddingBottom:20}}>
        <GenericButton
            label={ isFollowed? 'Following':'Follow'}
            borderColor={'grayBase'}
            fontColor={ isFollowed? 'white' : 'grayBase'}
            borderWidth={1}
            item={item}
            onPress={onPress}
            bgColor={ isFollowed? 'grayBase' :''}
            />
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding:16,
        backgroundColor: COLORS.white,
        borderRadius:16,
        gap:12,
        width:244,
        // height: 335,
        // shadowColor: '#000',
        // shadowOffset: {
        // width: 0,
        // height: 3,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 3.84,
        // elevation: 3,
        },
    cardImage: {
        borderRadius:16,
        height:140,
        width:"100%",
    },
    cardTitle:{
        fontFamily: FONTS.NotoSansJPExtraBold,
        fontSize:14,
        lineHeight:21,
        fontWeight:700,
        color:COLORS.grayBase
    },
    cardSubTitle:{
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize:12,
        lineHeight:18,
        fontWeight:400,
        color:COLORS.gray400
    },
    organizerLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 24
    }
})
