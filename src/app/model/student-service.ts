import { Injectable } from "@angular/core";
import { StudentDetail } from "./student-detail";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root',
})
export class StudentService{
    constructor(private http:HttpClient){} //ci permette di fare chiamate http al server
    // private studentDetail: StudentDetail [];
    // = [
    //     {id:1, nome:'Stefano', cognome:'Puro'},
    //     {id:2, nome:'Marco', cognome: 'Falconetti'},
    //     {id:3, nome:'Carlotta', cognome: 'Pisano'},
    //     {id:4, nome:'Eleonora', cognome: 'Siciliano'},  
    //     {id:5, nome:'Alessandro', cognome: 'Massa'},
    //     {id:6, nome:'Lucrezia', cognome: 'Lauri'}
    // ]
    getStudentDetail(): Observable<StudentDetail[]> {
        return this.http.get<StudentDetail[]>("http://localhost:8080/student");
    }
    //chiamata sarà asincrona
    //angular usa la libreria degli Observable
}
