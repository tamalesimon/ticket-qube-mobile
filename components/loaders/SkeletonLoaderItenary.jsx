import { View, Text } from 'react-native'
import React from 'react'
import { Skeleton } from 'moti/skeleton';
import { COLORS, ICONS } from '../../constants';

const SkeletonLoaderItenary = () => {
    return (
        <Skeleton.Group show>
            <View style={{ marginBottom: 16, width: '100%' }}>
                <Skeleton width={120} height={20} colorMode='light'><View /></Skeleton>
            </View>
            <View style={{ marginBottom: 24, flexDirection: 'row', gap: 16, justifyContent: 'center' }}>
                <View style={{
                    flexDirection: 'column', height: 200, alignItems: 'center', borderRadius: 16, paddingVertical: 24,
                    paddingHorizontal: 18, backgroundColor: COLORS.gray50, gap: 16
                }}>
                    <Skeleton width={64} height={64} radius={128} colorMode='light'><View></View></Skeleton>
                    <View style={{ gap: 4, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Skeleton width={116} height={20} colorMode='light'><View /></Skeleton>
                        <Skeleton width={80} height={15} colorMode='light'><View /></Skeleton>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'center', }}>
                        <ICONS.ClockDetailsTime />
                        <Skeleton width={50} height={15} colorMode='light'><View /></Skeleton>
                        <Skeleton width={50} height={15} colorMode='light'><View /></Skeleton>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'column', width: 175, height: 200, alignItems: 'center', borderRadius: 16, paddingVertical: 24,
                    paddingHorizontal: 18, backgroundColor: COLORS.gray50, gap: 16
                }}>
                    <Skeleton width={64} height={64} radius={128} colorMode='light'><View></View></Skeleton>
                    <View style={{ gap: 4, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Skeleton width={116} height={20} colorMode='light'><View /></Skeleton>
                        <Skeleton width={80} height={15} colorMode='light'><View /></Skeleton>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'center', }}>
                        <ICONS.ClockDetailsTime />
                        <Skeleton width={50} height={15} colorMode='light'><View /></Skeleton>
                        <Skeleton width={50} height={15} colorMode='light'><View /></Skeleton>
                    </View>
                </View>
            </View>
        </Skeleton.Group>
    )
}

export default SkeletonLoaderItenary