import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import Axios, { AxiosError } from "axios";
import { CourseType } from "./courses.type";

const factoryKeyStudent = {

    all: () => ["course"],
    studentList: () => ["courses", ...factoryKeyStudent.all()]
}


export const useGetCourses = (config: UseQueryOptions<
    CourseType[], // the result of api
    AxiosError // the error type
> = {}) => {
    const result = useQuery(
        factoryKeyStudent.studentList(),
        (): Promise<any> => Axios.get('/subjects'), config
    );


    return {
        courses: result?.data || [],
        ...result,
    };
};