import { Pressable, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const Header: React.FC = ({}) => {
  const navigation = useNavigation();

  const handleDrawerOpen = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View className="p-5 bg-white flex flex-row justify-between items-center">
      <View className="border-l-4 border-l-[#ffab33]">
        <Text className="ml-3 font-bold text-xl">CRUD OPERATIONS</Text>
      </View>

      <Pressable onPress={handleDrawerOpen}>
        <Ionicons name="menu-sharp" size={32} color="gray" />
      </Pressable>
    </View>
  );
};

export default Header;
