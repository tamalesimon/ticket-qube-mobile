import { View, Text } from 'react-native'
import React from 'react'
import { Skeleton } from 'moti/skeleton'

const SkeletonLoaderDetails = () => {
    return (
        <>
            <Skeleton.Group show>
                <View style={{ gap: 24 }}>
                    <View>
                        <Skeleton colorMode='light' width={250}><View style={{ width: 200, height: 25 }} /></Skeleton>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flex: '1', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Skeleton colorMode='light'><View style={{ width: 40, height: 25 }} /></Skeleton>
                            <Skeleton colorMode='light'><View style={{ width: 100, height: 25 }} /></Skeleton>
                        </View>
                        <View>
                            <Skeleton colorMode='light'><View style={{ width: 40, height: 25 }} /></Skeleton>
                        </View>
                    </View>
                    <View style={{ gap: 8 }}>
                        <Skeleton colorMode='light' width={150}><View style={{ width: '60%', height: 24 }} /></Skeleton>
                        <Skeleton colorMode='light'><View style={{ width: '100%', height: 25 }} /></Skeleton>
                        <Skeleton colorMode='light'><View style={{ width: '100%', height: 25 }} /></Skeleton>
                    </View>
                </View>
            </Skeleton.Group >
        </>
    )
}

export default SkeletonLoaderDetails