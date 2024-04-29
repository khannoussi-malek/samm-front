import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import Axios, { AxiosError } from "axios";
import { CourseType } from "./courses.type";
import axios from "axios";

const factoryKeyCourse = {

    all: () => ["course"],
    courses: () => ["courses", ...factoryKeyCourse.all()],
    get: (id: number) => [ { id }],
}


export const useGetCourses = (config: UseQueryOptions<
    {data:CourseType[]}, 
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

export const useCourseDetails = async (
    id: number,
  ) =>
    await (
      await axios.get(`/subjects/${id}`)
    ).data as CourseType;