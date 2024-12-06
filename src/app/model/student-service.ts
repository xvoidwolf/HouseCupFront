import { Injectable } from "@angular/core";
import { StudentDetail } from "./student-detail";

@Injectable({
    providedIn: 'root',
})
export class StudentService{
    private studentDetail: StudentDetail [] = [
        {id:1, nome:'Stefano', cognome:'Puro'},
        {id:2, nome:'Marco', cognome: 'Falconetti'},
        {id:3, nome:'Carlotta', cognome: 'Pisano'},
        {id:4, nome:'Eleonora', cognome: 'Siciliano'},  
        {id:5, nome:'Alessandro', cognome: 'Massa'},
        {id:6, nome:'Lucrezia', cognome: 'Lauri'}
    ]
    getStudentDetail(): StudentDetail[] {
        return this.studentDetail;
    }
}
