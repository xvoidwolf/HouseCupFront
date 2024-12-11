import { Injectable } from "@angular/core";
import { StudentSummary } from "./student-summary";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { HouseScoreService } from "./house-score-service";
import { HouseRankingDto } from "./house-ranking-dto";
import { Router } from "@angular/router";
import { HttpConfig } from "../config/http-config";
import { StudentDetails } from "./student-detail";

@Injectable({
    providedIn: 'root',
})
export class StudentService{
    urlExtension = "/student";
    constructor(private http:HttpClient, private houseService:HouseScoreService, private router:Router){} //ci permette di fare chiamate http al server
    // private studentDetail: StudentDetail [];
    // = [
    //     {id:1, nome:'Stefano', cognome:'Puro'},
    //     {id:2, nome:'Marco', cognome: 'Falconetti'},
    //     {id:3, nome:'Carlotta', cognome: 'Pisano'},
    //     {id:4, nome:'Eleonora', cognome: 'Siciliano'},  
    //     {id:5, nome:'Alessandro', cognome: 'Massa'},
    //     {id:6, nome:'Lucrezia', cognome: 'Lauri'}
    // ]
    getStudentDetail(): Observable<StudentSummary[]> {
        return this.http.get<StudentSummary[]>(`${HttpConfig.apiUrl}${this.urlExtension}`);
    }
    getBestStudentsFromHouse(houseId:number, classId:number):Observable<StudentSummary[]>{
        //return this.http.get<StudentDetail[]>("http://localhost:8080/student/class/"+ classId +"/house/"+ houseId +"/bestStudent") //da rendere dinamico
        return this.http.get<StudentSummary[]>(`${HttpConfig.apiUrl}${this.urlExtension}/class/${classId}/house/${houseId}/bestStudent`);
    }
    //chiamata sarà asincrona
    //angular usa la libreria degli Observable
    saveStudent(student:StudentDetails):Observable<StudentDetails> {
        const hds = new HttpHeaders({
            'Content-Type':'application/json'
        }); //settare il giusto content type
        return this.http.post<StudentDetails>(`${HttpConfig.apiUrl}${this.urlExtension}`, student, { headers: hds }); 
    }
    updateStudent(student:StudentDetails):Observable<StudentDetails> {
        return this.http.put<StudentDetails>(`${HttpConfig.apiUrl}${this.urlExtension}/${student.id!}`, student); 
    }
    deleteStudent(id:number):Observable<void> {
        return this.http.delete<void>(`${HttpConfig.apiUrl}${this.urlExtension}/${id}`);
    }
    getStudentById(id:number):Observable<StudentDetails> {
        return this.http.get<StudentDetails>(`${HttpConfig.apiUrl}${this.urlExtension}/${id}`);
    }
}
