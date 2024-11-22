import { View, Text } from "react-native";
import React from "react";
import DrawerView from "../src/navigation/Drawer";
import "../global.css";
import { StudentProvider } from "../src/ctx/student.context";

const _layout = (props) => {
  return (
    <StudentProvider {...props}>
      <DrawerView />
    </StudentProvider>
  );
};

export default _layout;
