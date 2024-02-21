import { Image, StatusBar, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

export default function index() {

    const router = useRouter();


  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/img4.jpg")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
          <Text className="text-white font-bold tracking-wide" style={{ fontSize: hp(5) }}>
            Best
            <Text className="text-orange-400"> Workouts</Text>
          </Text>
          <Text className="text-white font-bold tracking-wide" style={{ fontSize: hp(5) }}>
            For You
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
            <TouchableOpacity
                onPress={() => {
                    router.push('Home')
                }}
                style={{height: hp(7), width:wp(80)}}
                className="bg-orange-400 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
            >
                <Text 
                style={{fontSize: hp(3)}}
                className="text-white font-bold tracking-widest">
                    Get Started
                </Text>
            </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
