import { User } from "../Auth/service";

export type CourseType = {
    id: number;
    name: string
    coef: number;
    type: string;
    teacher: User;
    chapters: string
}