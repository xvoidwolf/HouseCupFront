import { Injectable } from "@angular/core";
import { StudentDetail } from "./student-detail";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { HouseScoreService } from "./house-score-service";
import { HouseRankingDto } from "./house-ranking-dto";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})
export class StudentService{
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
    getStudentDetail(): Observable<StudentDetail[]> {
        return this.http.get<StudentDetail[]>("http://localhost:8080/student");
    }
    getBestStudentsFromHouse(houseId:number, classId:number):Observable<StudentDetail[]>{
        return this.http.get<StudentDetail[]>("http://localhost:8080/student/class/"+ classId +"/house/"+ houseId +"/bestStudent") //da rendere dinamico
    }
    //chiamata sarà asincrona
    //angular usa la libreria degli Observable
}
