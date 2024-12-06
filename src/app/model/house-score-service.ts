import { Injectable } from "@angular/core";
import { HouseDetail } from "./house-detail";

@Injectable({
    providedIn:'root',
})
export class HouseScoreService {
    private houseScore : HouseDetail [] = [
        {id:1, name:'GRYFFINDOR', score: 1000000},
        {id:2, name:'SLYTHERIN', score:10000},
        {id:3,name:'HUFFLEPUFF', score:1000},
        {id:4,name:'RAVENCLAW', score:0}
    ]
    getHouseDetail(): HouseDetail[]{
        return this.houseScore;
    }
}