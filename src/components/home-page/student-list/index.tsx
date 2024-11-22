import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import StudentCard from "../student-card";
import { UserResponseModel } from "../../../api/openapi-spec/models/UserResponseModel";

interface StudentListProps {
  data: UserResponseModel[];
  error: Error;
  isLoading: boolean;
  onDelete: (studentKey: string) => Promise<void>;
  onAdd: () => Promise<void>;
}

const StudentList: React.FC<StudentListProps> = ({
  data,
  error,
  isLoading,
  onDelete,
  onAdd,
}) => {
  return (
    <View className="flex-1">
      <View className="p-5">
        <Text className="font-bold text-black text-3xl">Students List</Text>
        <Text className="font-light text-gray-600 text-md">
          Detailed information about your students
        </Text>
      </View>
      <View className="flex flex-row items-center my-5">
        <TouchableOpacity
          onPress={onAdd}
          className="mx-4 p-4 flex-1 flex flex-row bg-[#ffab33] items-center justify-center rounded-2xl "
        >
          <Ionicons name="add" size={25} color="white" />
          <Text className="text-white font-bold text-xl ml-1">
            Add New Student
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 mx-2  items-center justify-center rounded-2xl">
          <Ionicons name="list-outline" size={25} color="#ffab33" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 mx-2  items-center justify-center rounded-2xl">
          <Ionicons name="grid-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      {error && (
        <View className="flex justify-center items-center">
          <Text>{JSON.stringify(error)}</Text>
        </View>
      )}
      {isLoading && (
        <View className="flex justify-center items-center absolute h-full w-full z-50">
          <View className="bg-black opacity-40 h-full w-full absolute z-50" />
          <Text className="font-bold text-orange-500">Loading...</Text>
        </View>
      )}

      <FlatList
        className="bg-white rounded-2xl m-5 p-3 flex-1"
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <StudentCard
            data={item}
            onDelete={() => onDelete(item.key)}
            onEdit={() => {}}
          />
        )}
      />
    </View>
  );
};

export default StudentList;
