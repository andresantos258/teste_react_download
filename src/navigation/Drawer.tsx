import React from "react";
import { View, Text, Image } from "react-native";
import { router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

interface CustomDrawerItemProps {
  isActive: boolean;
  onPress: () => void;
  icon: React.FC<{ size: number }>;
  label: string;
}

const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({
  isActive,
  ...props
}) => {
  return (
    <DrawerItem
      labelStyle={[{ color: isActive ? "#ffab33" : "gray" }]}
      style={{ backgroundColor: isActive ? "#fffaee" : "#fff" }}
      {...props}
    />
  );
};

interface CustomDrawerContentProps {}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
  const pathname = usePathname();

  return (
    <View className="h-full">
      <DrawerContentScrollView {...props} className="">
        <View className="m-6 border-l-4 border-l-[#ffab33] ">
          <Text className="ml-3 font-bold text-xl">CRUD OPERATIONS</Text>
        </View>
        <View className="border-t-[1px] border-t-[#efefef]">
          <View className="flex flex-row bg-[#f8fafc] m-3 mt-8 mb-16 py-4 px-3 rounded-xl">
            <View className="relative">
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/22.jpg",
                }}
                width={50}
                height={50}
                className="rounded-full"
              />
              <View className="h-[11px] w-[11px] bg-green-500 rounded-full absolute right-[2px] top-[2px] border-[1px] border-[#f8fafc] "></View>
            </View>
            <View className="ml-[12px] mt-2">
              <Text className="text-md font-semibold">Ali Veli</Text>
              <Text className="text-sm text-gray-400">Admin</Text>
            </View>
          </View>
        </View>

        <View className="">
          <CustomDrawerItem
            icon={({ size }) => (
              <Ionicons
                name="grid"
                size={size}
                color={pathname == "/" ? "#ffab33" : "gray"}
              />
            )}
            label={"Home"}
            isActive={pathname == "/"}
            onPress={() => {
              router.push("/");
            }}
          />
          <CustomDrawerItem
            icon={({ size }) => (
              <Ionicons
                name="file-tray-full-outline"
                size={size}
                color={pathname == "/course" ? "#ffab33" : "gray"}
              />
            )}
            label={"Course"}
            isActive={pathname == "/course"}
            onPress={() => {
              // router.push("/course");
            }}
          />
          <CustomDrawerItem
            icon={({ size }) => (
              <Ionicons
                name="school-outline"
                size={size}
                color={pathname == "/students" ? "#ffab33" : "gray"}
              />
            )}
            label={"Students"}
            isActive={pathname == "/students"}
            onPress={() => {
              //   router.push("/students");
            }}
          />
          <CustomDrawerItem
            icon={({ size }) => (
              <Ionicons
                name="card-outline"
                size={size}
                color={pathname == "/payment" ? "#ffab33" : "gray"}
              />
            )}
            label={"Payment"}
            isActive={pathname == "/payment"}
            onPress={() => {
              //   router.push("/payment");
            }}
          />
          <CustomDrawerItem
            icon={({ size }) => (
              <Ionicons
                name="reader-outline"
                size={size}
                color={pathname == "/report" ? "#ffab33" : "gray"}
              />
            )}
            label={"Report"}
            isActive={pathname == "/report"}
            onPress={() => {
              //   router.push("/report");
            }}
          />
        </View>
      </DrawerContentScrollView>
      <View>
        <CustomDrawerItem
          icon={({ size }) => (
            <Ionicons
              name="settings-outline"
              size={size}
              color={pathname == "/settings" ? "#ffab33" : "gray"}
            />
          )}
          label={"Settings"}
          isActive={pathname == "/settings"}
          onPress={() => {
            // router.push("/settings");
          }}
        />
        <CustomDrawerItem
          icon={({ size }) => (
            <Ionicons name="log-out-outline" size={size} color={"gray"} />
          )}
          label={"Log out"}
          isActive={pathname == "/logout"}
          onPress={() => {
            // logout
          }}
        />
      </View>
    </View>
  );
};

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "overview",
          headerShown: false,
        }}
      />
    </Drawer>
  );
}
