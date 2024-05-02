import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import Axios, { AxiosError } from "axios";
import { CourseType } from "./courses.type";
import { createQueryKeys } from "@lukemorales/query-key-factory";

const factoryKeyCourse = {
    all: () => ["course"],
    courses: () => ["courses", ...factoryKeyCourse.all()],
    get: (id: number) => [{ id }],
}


export const coursKeys = createQueryKeys('course', {
    list: ["list"],
    get: (id: number) => [{ id }],
});


type GetCourseQueryOptions = UseQueryOptions<CourseType>;


export const useGetCourses = (config: UseQueryOptions<
    { data: CourseType[] },
    AxiosError
> = {}) => {
    const result = useQuery(
        factoryKeyCourse.courses(),
        (): Promise<any> => Axios.get('/subjects'), config
    );


    return {
        courses: result?.data?.data || [],
        ...result,
    };
};

/*
export const useCourseDetails = async (id: number, queryOptions: GetCourseQueryOptions = {}) => {
    const result = useQuery({
        queryKey: factoryKeyCourse.get(id),
        queryFn: async () => Axios.get(`/subjects/${id}`),

    }
    );

    return {
        course: result?.data || [],
        ...result,
    };
}

*/

export const useCourseDetails = (id: number, queryOptions: GetCourseQueryOptions = {}) => {
    const query = useQuery({
        queryKey: coursKeys.get(id).queryKey,
        queryFn: async () => {
            const response = await Axios.get('/subjects/' + id);
            return response?.data;
        },
        ...queryOptions,
    });
    return { ...query, course: query.data };
};