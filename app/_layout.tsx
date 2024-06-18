import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

type Props = {};

const Layout = (props: Props) => {
  return <Stack initialRouteName="(auth)/register/index" />;
};

export default Layout;
