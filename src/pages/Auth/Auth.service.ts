import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from 'axios';
import { useAuthContext } from "./AuthContext";

export type RegisterStudentPayload = {
    nom: string;
    prenom: string
    email: string;
    password: string;
    phone: string;
    CIN?: string;
    passeport?: string

}
export const useRegisterStudent = (config: UseMutationOptions<void, AxiosError<any>, RegisterStudentPayload> = {}) => {
    return useMutation(async (payload) => await axios.post("/auth/signupstudent", payload), config);
};
export const useRegisterTeacher = (config: UseMutationOptions<void, AxiosError<any>, RegisterStudentPayload> = {}) => {
    return useMutation(async (payload) => await axios.post("/auth/signupTeacher", payload), config);
};

type LoginPayload ={
    access_token: string
}

export const useLogin = (
    config: UseMutationOptions<
      LoginPayload,
      AxiosError<ApiErrorResponse>,
      { email: string; password: string }
    > = {}
  ) => {
    const { updateToken } = useAuthContext();
    return useMutation(
      async ({ email, password }) => {
        const response = await axios.post('/auth/login', {
            email,
          password,
        });
        return response.data;
      },
      {
        ...config,
        onSuccess: (data, ...args) => {
          updateToken(data.access_token);
          config?.onSuccess?.(data, ...args);
        },
      }
    );
  };