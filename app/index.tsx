import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
// @ts-ignore
import logo from "@/assets/images/Frame 8.png";
// @ts-ignore
import personLayz from "@/assets/images/Image.png";
import { StatusBar } from "expo-status-bar";

type Props = {};

const Index = (props: Props) => {
  const gotoLogin = () => {
    router.push("/login");
  };

  const gotoRegister = () => {
    router.push("/register");
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          statusBarStyle: "dark",
          statusBarColor: "#FAFAFA",
        }}
      />
      <View className="bg-zinc-50 flex-1">
        <SafeAreaView className="pt-16 px-4">
          <View className="items-center mb-7">
            <Image source={logo} className="w-28 h-10" resizeMode="contain" />
          </View>
          <View className="items-center mb-20">
            <Image
              source={personLayz}
              className="w-64 h-64"
              resizeMode="contain"
            />
          </View>
          <Text className="text-3xl font-medium text-center mb-3">
            Lorem ipsum dolor sit amet.
          </Text>
          <Text className="text-center text-sm font-light mb-9">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, voluptatem alias cumque dolorem repudiandae nisi?
          </Text>

          <View className="space-y-2">
            <TouchableOpacity
              className="bg-gray-700 justify-center p-3 rounded-2xl"
              onPress={gotoLogin}
            >
              <Text className="text-center text-sm font-semibold text-slate-50">
                Sign in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="justify-center p-3 rounded-2xl"
              onPress={gotoRegister}
            >
              <Text className="text-center text-sm font-light text-gray-700">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Index;
