import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Skeleton } from 'moti/skeleton'
import { COLORS, ICONS } from '../../constants'

const SkeletonLoaderCard = () => {
    return (
        <>
            <Skeleton.Group show>
                <View style={{ flexDirection: 'row', gap: 16, overflow: 'hidden' }}>
                    <View style={styles.cardContainer}>
                        <Skeleton colorMode='light'>
                            <View style={styles.imageSkeleton} />
                        </Skeleton>
                        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                            <Skeleton colorMode='light'><View style={styles.smallSkeletonText} /></Skeleton>
                            <Skeleton colorMode='light'><View style={styles.smallDot} /></Skeleton>
                            <Skeleton colorMode='light'><View style={styles.smallSkeletonText} /></Skeleton>
                        </View>

                        <Skeleton colorMode='light'><View style={styles.largeTextSkeleton} /></Skeleton>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', gap: 4 }}>
                                <ICONS.MapPinSmallIcon />
                                <Skeleton colorMode='light'><View style={styles.locationName} /></Skeleton>
                            </View>
                            <Skeleton colorMode='light'><View style={styles.buttonSkeleton} /></Skeleton>
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <Skeleton colorMode='light'>
                            <View style={styles.imageSkeleton} />
                        </Skeleton>
                        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                            <Skeleton colorMode='light'><View style={styles.smallSkeletonText} /></Skeleton>
                            <Skeleton colorMode='light'><View style={styles.smallDot} /></Skeleton>
                            <Skeleton colorMode='light'><View style={styles.smallSkeletonText} /></Skeleton>
                        </View>
                        <Skeleton colorMode='light'><View style={styles.largeTextSkeleton} /></Skeleton>
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
        </>
    )
}

export default SkeletonLoaderCard

const styles = StyleSheet.create({
    cardContainer: {
        width: 272,
        // height: 270,
        borderColor: COLORS.gray100,
        borderWidth: 1,
        borderRadius: 16,
        padding: 12,
        marginVertical: 16,
        gap: 12
    },
    imageSkeleton: {
        height: 140,
        borderRadius: 12,
        backgroundColor: COLORS.gray100,
        marginBottom: 14
    },
    smallSkeletonText: {
        width: 48,
        height: 12,
        borderRadius: 4,
        backgroundColor: COLORS.gray100
    },
    smallDot: {
        width: 4,
        // height: 4,
        borderRadius: 2,
        backgroundColor: COLORS.gray100,
        display: 'inline-block'
    },
    largeTextSkeleton: {
        width: 150,
        height: 24,
        borderRadius: 6,
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
        height: 32
    }
})