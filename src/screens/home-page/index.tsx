import { Text, View } from "react-native";
import React from "react";
import Header from "../../components/home-page/header";
import StudentList from "../../components/home-page/student-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStudentContext } from "../../ctx/student.context";

const HomePage: React.FC = ({}) => {
  const studentCtx = useStudentContext();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <Header />
      <StudentList
        data={studentCtx.values.data}
        error={studentCtx.values.error}
        isLoading={studentCtx.values.isLoading}
        onDelete={studentCtx.functions.onDeleteStudent}
        onAdd={studentCtx.functions.onAddDummyStudent}
      />
    </SafeAreaView>
  );
};

export default HomePage;
