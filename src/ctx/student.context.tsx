import React, {
  useContext,
  useState,
  useMemo,
  useEffect,
  createContext,
} from "react";
import { UserResponseModel } from "../api/openapi-spec/models/UserResponseModel";
import {
  httpAddStudentHandler,
  httpDeleteStudentHandler,
  httpFetchStudentListHandler,
} from "../api/requests";
import { generateRandomString } from "../utils/data.generate";

//
interface StudentContextValues {
  data: UserResponseModel[];
  isLoading: boolean;
  error?: any;
}

interface StudentContextFunctions {
  onDeleteStudent: (studentKey: string) => Promise<void>;
  onAddDummyStudent: () => Promise<void>;
}

interface StudentContextSetters {}

interface StudentContext {
  values: StudentContextValues;
  functions: StudentContextFunctions;
  setters: StudentContextSetters;
}

const StudentContext = createContext<StudentContext | undefined>(undefined);

export const useStudentContext = (): StudentContext => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("The component must be wrapped by the provider!");
  }
  return context;
};

export const StudentProvider: React.FC = (props) => {
  // STATES
  const [data, setData] = useState<UserResponseModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();

  // LISTENER
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await httpFetchStudentListHandler();
        setData(result);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onDeleteStudent = async (studentKey: string) => {
    try {
      setIsLoading(true);
      await httpDeleteStudentHandler(studentKey);
      const result = await httpFetchStudentListHandler();
      setData(result);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const onAddDummyStudent = async () => {
    try {
      setIsLoading(true);
      await httpAddStudentHandler({
        name: generateRandomString(10),
        age: Math.floor(Math.random() * 100),
        hometown: generateRandomString(10),
      });
      const result = await httpFetchStudentListHandler();
      setData(result);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // CONTEXT VALUE
  const value = useMemo(() => {
    return {
      values: { data, isLoading, error },
      functions: { onDeleteStudent, onAddDummyStudent },
      setters: {},
    };
  }, [data, isLoading, error, onDeleteStudent, onAddDummyStudent]);

  return <StudentContext.Provider value={value} {...props} />;
};
