import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesignIcon from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { UserModel } from "../../../api/openapi-spec/models/UserModel";

interface StudentCardProps {
  data: UserModel;
  onDelete: () => void;
  onEdit: () => void;
}

const StudentCard: React.FC<StudentCardProps> = ({
  data,
  onDelete,
  onEdit,
}) => {
  return (
    <View className="border-[1px] border-[#efefef] m-2 rounded-2xl">
      <View className="border-b-[1px] border-[#efefef] p-3 flex flex-row items-center justify-between">
        <Text className="font-medium">{data.name}</Text>
        <View className="flex flex-row">
          <TouchableOpacity
            onPress={onEdit}
            className="border-[1px] border-[#efefef] bg-white p-2 mx-2  items-center justify-center rounded-2xl"
          >
            <AntDesignIcon name="edit" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onDelete}
            className="border-[1px] border-[#efefef] bg-white p-2 mx-2  items-center justify-center rounded-2xl"
          >
            <Ionicons name="trash-outline" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="p-3">
        <View className="py-1 flex flex-row items-center justify-between">
          <Text className="text-gray-500">Age</Text>
          <Text className="font-medium">{data.age}</Text>
        </View>
        <View className="py-1 flex flex-row items-center justify-between">
          <Text className="text-gray-500">Hometown</Text>
          <Text className="font-medium">{data.hometown}</Text>
        </View>
      </View>
    </View>
  );
};

export default StudentCard;
