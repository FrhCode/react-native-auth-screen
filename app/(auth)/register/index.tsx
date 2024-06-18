import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  EnvelopeOpenIcon,
  EyeIcon,
  LockClosedIcon,
  ArrowLeftIcon,
  UserIcon,
  CalendarIcon,
} from "react-native-heroicons/outline";
import DateTimePicker from "@react-native-community/datetimepicker";

const numberToMonth = (month: number) => {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "January";
  }
};

type Props = {};

const index = (props: Props) => {
  const [showPassword, setshowPassword] = useState(false);

  const [birthDate, setBirthDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleTooglePassword = () => {
    setshowPassword(!showPassword);
  };

  const backToHome = () => {
    router.push("/");
  };

  const gotoLogin = () => {
    router.push("/login");
  };

  const openDatePicker = () => {
    setOpen(true);
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setOpen(false);
    setBirthDate(currentDate);
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
          {open && (
            <DateTimePicker
              testID="dateTimePicker"
              value={birthDate}
              mode={"date"}
              is24Hour={true}
              onChange={onChange}
            />
          )}
          <View className="mb-5">
            <Text className="text-3xl font-medium">Let's get</Text>
            <Text className="text-3xl font-medium">Started</Text>
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

            <View className="border border-gray-700 rounded-2xl p-3 flex-row items-center space-x-2">
              <UserIcon size={20} color={"black"} />
              <TextInput className="flex-grow" placeholder="Name" />
            </View>

            <TouchableOpacity
              className="border border-gray-700 rounded-2xl p-3 flex-row items-center space-x-2"
              onPress={openDatePicker}
            >
              <CalendarIcon size={20} color={"black"} />
              <Text
              // className="flex-grow"
              // placeholder="Birth date"
              // i want show birth date in this input with format 10 July 1999
              >
                {`${birthDate.getDate()} ${numberToMonth(
                  birthDate.getMonth()
                )} ${birthDate.getFullYear()}`}
              </Text>
            </TouchableOpacity>
          </View>
          <View className="space-y-5">
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
              <TouchableOpacity onPress={gotoLogin}>
                <Text className="font-semibold">Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default index;
