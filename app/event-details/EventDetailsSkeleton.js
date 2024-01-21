import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Skeleton } from "moti/skeleton";
import BackLeft from "../../components/header/explore/BackLeft";
import Upload from "../../screens/event/components/Upload";
import LikesHeart from "../../screens/event/components/LikesHeart";
import SkeletonLoaderDetails from '../../components/loaders/SkeletonLoaderDetails';
import SkeletonLoaderOrganizer from '../../components/loaders/SkeletonLoaderOrganizer';
import SkeletonLoaderItenary from '../../components/loaders/SkeletonLoaderItenary';
import { COLORS } from '../../constants';

const EventDetailsSkeleton = () => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, paddingHorizontal: 24, paddingBottom: 24, paddingTop: 12 }}>
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <BackLeft handlePress={() => router.back()} />
          <View style={styles.buttonsRightHeader}>
            <Upload handlePress={openHandler} />
            <LikesHeart handlePress={closeHandler} />
          </View>
        </View>
      </View>
      <View style={{ gap: 24 }}>
        <Skeleton colorMode="light" height={240} show />
        <SkeletonLoaderDetails />
        <SkeletonLoaderOrganizer />
        <SkeletonLoaderItenary />
      </View>
    </SafeAreaView>
  )
}

export default EventDetailsSkeleton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: 56,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonsRightHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})