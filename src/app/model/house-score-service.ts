import { Injectable } from "@angular/core";
import { HouseDto } from "./house-dto";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { HouseRankingDto } from "./house-ranking-dto";
import { ScoreComponent } from "../score/score.component";
import { Data } from "@angular/router";

@Injectable({
    providedIn:'root',
})
export class HouseScoreService {
    constructor(private http:HttpClient){}
    // private houseScore : HouseDetail [] = [
    //     {id:1, name:'GRYFFINDOR', score: 1000000, img:'/assets/images/Gryffindor.png'},
    //     {id:2, name:'SLYTHERIN', score:10000, img:'/assets/images/Slytherin.png'},
    //     {id:3,name:'HUFFLEPUFF', score:1000, img:'/assets/images/Hufflepuff.png'},
    //     {id:4,name:'RAVENCLAW', score:0, img:'/assets/images/Ravenclaw.png'}
    // ]
    getHouseDetail(): Observable<HouseRankingDto>{
        return this.http.get<HouseRankingDto>("http://localhost:8080/ranking");
    }
    getHouseScoreById(id: number):void {
        let idk = this.http.get<ScoreComponent>("qui ci andrà il link per il back").subscribe((sc:Data) => {return sc});
    }
}