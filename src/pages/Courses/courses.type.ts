import { TeacherType } from "../TeacherList/teacher.type";

export type CourseType = {
    id: number;
    name: string
    coef: number;
    type: string;
    teacher: TeacherType;
    chapters: string
}