import axios, { AxiosResponse } from "axios";
import { UserResponseModel } from "../api/openapi-spec/models/UserResponseModel";
import { UserModel } from "../api/openapi-spec/models/UserModel";
import { DeleteUserResponseModel } from "../api/openapi-spec/models/DeleteUserResponseModel";

export const httpFetchStudentListHandler = async (): Promise<
  UserResponseModel[]
> => {
  const response = await axios.get<UserResponseModel[]>(
    "https://crud-example-api.vercel.app/users",
    {
      headers: {
        Accept: "application/json",
        Authorization: "Basic ZGVtbzpkZW1v",
      },
    }
  );
  return response.data;
};

export const httpDeleteStudentHandler = async (
  studentKey: string
): Promise<boolean> => {
  const response = await axios.delete<DeleteUserResponseModel>(
    `https://crud-example-api.vercel.app/users/${studentKey}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: "Basic ZGVtbzpkZW1v",
      },
    }
  );

  return response.data.is_successful;
};

export const httpAddStudentHandler = async ({
  name,
  hometown,
  age,
}: UserModel): Promise<boolean> => {
  const response = await axios.post(
    `https://crud-example-api.vercel.app/users`,
    { name, hometown, age },
    {
      headers: {
        Accept: "application/json",
        Authorization: "Basic ZGVtbzpkZW1v",
      },
    }
  );

  return response.data;
};
