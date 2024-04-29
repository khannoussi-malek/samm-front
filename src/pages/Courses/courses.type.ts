import { User } from "../Auth/service";


export type CourseFileType = 'cours' | 'td'|'tp'

export type CourseFile = {
    id: number;
    name: string;
    type: CourseFileType;
}

export type Chapter = {
    id: number;
    name: string;
    order: number;
    pages: number;
    courseFiles: CourseFile[];
}

export type CourseType = {
    id: number;
    name: string
    coef: number;
    type: string;
    teacher: User;
    chapters: Chapter[];
}