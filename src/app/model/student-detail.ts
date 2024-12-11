import { CourseDto } from "./courses/course-dto";
import { HouseDto } from "./house-dto";

export interface StudentDetails {
    id?: number; //opzionale
    firstname: string;
    surname: string;
    mail: string;
    phone: string;
    dob: string;
    sex: string;
    pref: boolean;
    background: string;
    education: string;
    course: CourseDto;
    house: HouseDto;
    totalScore?: number;
}