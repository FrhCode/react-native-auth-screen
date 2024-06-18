import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  EnvelopeOpenIcon,
  EyeIcon,
  LockClosedIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/outline";

type Props = {};

const index = (props: Props) => {
  const [showPassword, setshowPassword] = useState(false);

  const handleTooglePassword = () => {
    setshowPassword(!showPassword);
  };

  const backToHome = () => {
    router.push("/");
  };

  const gotoRegister = () => {
    router.push("/register");
  };

  return (
    <>
      <Stack.Screen
        options={{
          statusBarStyle: "dark",
          statusBarColor: "#FAFAFA",
          headerStyle: {
            backgroundColor: "#FAFAFA",
          },
          headerShadowVisible: false,
          title: "",
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={backToHome}
                className="bg-zinc-200 p-3 rounded-full"
              >
                <ArrowLeftIcon size={20} color={"black"} />
              </TouchableOpacity>
            );
          },
        }}
      />
      <View className="bg-zinc-50 flex-1">
        <SafeAreaView className="pt-5 px-4">
          <View className="mb-5">
            <Text className="text-3xl font-medium">Hey, </Text>
            <Text className="text-3xl font-medium">Welcome</Text>
            <Text className="text-3xl font-medium">Back</Text>
          </View>

          <View className="space-y-3 mb-5">
            <View className="border border-gray-700 rounded-2xl p-3 flex-row items-center space-x-2">
              <EnvelopeOpenIcon size={20} color={"black"} />
              <TextInput className="flex-grow" placeholder="Email" />
            </View>

            <View className="border border-gray-700 rounded-2xl p-3 flex-row items-center space-x-2">
              <LockClosedIcon size={20} color={"black"} />
              <TextInput
                className="flex-grow"
                placeholder="Password"
                secureTextEntry={showPassword == false}
              />
              <TouchableOpacity onPress={handleTooglePassword}>
                <EyeIcon size={20} color={"black"} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="space-y-5">
            <View className="items-end">
              <Text>Forgot Password?</Text>
            </View>
            <TouchableOpacity
              className="bg-gray-700 justify-center p-3 rounded-2xl"
              onPress={() => {}}
            >
              <Text className="text-center font-semibold text-sm text-slate-50">
                Sign in
              </Text>
            </TouchableOpacity>
            <View className="flex flex-row items-center justify-center">
              <Text className="">Don’t have an account? </Text>
              <TouchableOpacity onPress={gotoRegister}>
                <Text className="font-semibold">Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default index;
