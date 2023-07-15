import React from 'react';
import { View, Text, Image } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function UpcomingSkeleton() {
  return (
    <SkeletonPlaceholder>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 60, height: 60, borderRadius: 50}} />
            <View style={{marginLeft: 20}}>
                {/* <Image style={{width: 120, height: 20}} source={require('../assets/images/skeleton.png')} /> */}
                <Text style={{marginTop: 6, fontSize: 14, lineHeight: 18}}>Hello world</Text>
            </View>
        </View>
    </SkeletonPlaceholder>
  );
}
