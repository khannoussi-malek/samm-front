import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from 'axios';

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