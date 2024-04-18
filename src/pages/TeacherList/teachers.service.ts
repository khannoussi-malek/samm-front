import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import Axios, { AxiosError } from "axios";
import { TeacherType } from "./Teacher.type";

const factoryKeyTeacher = {

    all: () => ["teacher"],
    teacherList: () => ["teachers list", ...factoryKeyTeacher.all()]
}


export const useTeacherList = (config: UseQueryOptions<
    TeacherType[], // the result of api
    AxiosError // the error type
> = {}) => {
    const result = useQuery(
        factoryKeyTeacher.teacherList(),
        (): Promise<any> => Axios.get('/admin/users'), config
    );


    return {
        teachers: result?.data || [],
        ...result,
    };
};