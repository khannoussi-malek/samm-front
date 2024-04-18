import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import Axios, { AxiosError } from "axios";
import { StudentType } from "./student.type";

const factoryKeyStudent = {

    all: () => ["student"],
    studentList: () => ["student list", ...factoryKeyStudent.all()]
}


export const useStudentList = (config: UseQueryOptions<
    StudentType[], // the result of api
    AxiosError // the error type
> = {}) => {
    const result = useQuery(
        factoryKeyStudent.studentList(),
        (): Promise<any> => Axios.get('/admin/users'), config
    );


    return {
        students: result?.data || [],
        ...result,
    };
};