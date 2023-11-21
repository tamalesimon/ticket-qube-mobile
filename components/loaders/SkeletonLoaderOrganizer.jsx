import { View, Text } from 'react-native'
import React from 'react'
import { Skeleton } from 'moti/skeleton'

const SkeletonLoaderOrganizer = () => {
    return (
        <Skeleton.Group show>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:50 }}>
                <View style={{ flexDirection: 'row', gap: 16, flex: 1, alignItems: 'center' }}>
                    <View>
                        <Skeleton colorMode='light' width={48} radius={100}><View style={{ width: 48, height: 48, }} /></Skeleton>
                    </View>
                    <View style={{ gap: 4 }}>
                        <Skeleton colorMode='light' width={100}><View style={{ width: 100, height: 20 }} /></Skeleton>
                        <Skeleton colorMode='light' width={50}><View style={{ width: 50, height: 15 }} /></Skeleton>
                    </View>
                </View>
                <Skeleton colorMode='light' width={96}><View style={{ width: 96, height: 40 }} /></Skeleton>
            </View>
        </Skeleton.Group>
    )
}

export default SkeletonLoaderOrganizer