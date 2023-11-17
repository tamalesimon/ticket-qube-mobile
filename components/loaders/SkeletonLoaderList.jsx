import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Skeleton } from 'moti/skeleton'
import { COLORS, ICONS } from '../../constants'

const SkeletonLoaderList = () => {
    const data = new Array(10).fill('')
    return (
        <>
            {
                data.map((item, index) => (
                    <Skeleton.Group show key={index}>
                        <View style={styles.cardContainer}>
                            <Skeleton colorMode='light' backgroundColor='#F9FAFB'><View style={styles.imageSkeleton} /></Skeleton>
                            <View style={{ gap: 12, flexDirection: 'column' }}>
                                <View style={{ gap: 4 }}>
                                    <Skeleton colorMode='light'><View style={styles.largeSkeletonText} /></Skeleton>
                                    <Skeleton colorMode='light' width={'60%'}><View style={styles.smallSkeletonText} /></Skeleton>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', gap: 4 }}>
                                        <ICONS.MapPinSmallIcon />
                                        <Skeleton colorMode='light'><View style={styles.locationName} /></Skeleton>
                                    </View>
                                    <Skeleton colorMode='light'><View style={styles.buttonSkeleton} /></Skeleton>
                                </View>
                            </View>
                        </View>
                    </Skeleton.Group>
                ))
            }
        </>
    )
}

export default SkeletonLoaderList

const styles = StyleSheet.create({
    cardContainer: {
        height: 120,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.gray100,
        padding: 12,
        gap: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        marginBottom: 12
    },
    imageSkeleton: {
        width: 88,
        height: 96,
        borderRadius: 16,
        backgroundColor: COLORS.gray100,
    },
    largeSkeletonText: {
        width: 200,
        height: 16,
        borderRadius: 4,
        backgroundColor: COLORS.gray100,
    },
    smallSkeletonText: {
        width: 100,
        height: 16,
        borderRadius: 4,
        backgroundColor: COLORS.gray100,
    },
    locationName: {
        width: 74,
        height: 12,
        borderRadius: 4,
        backgroundColor: COLORS.gray100
    },
    buttonSkeleton: {
        width: 72,
        height: 32,
        backgroundColor: COLORS.gray100,
        borderRadius: 12
    }
})