import { Injectable } from "@angular/core";
import { HouseDetail } from "./house-detail";

@Injectable({
    providedIn:'root',
})
export class HouseScoreService {
    private houseScore : HouseDetail [] = [
        {id:1, name:'GRYFFINDOR', score: 1000000, img:'/assets/images/Gryffindor.png'},
        {id:2, name:'SLYTHERIN', score:10000, img:'/assets/images/Slytherin.png'},
        {id:3,name:'HUFFLEPUFF', score:1000, img:'/assets/images/Hufflepuff.png'},
        {id:4,name:'RAVENCLAW', score:0, img:'/assets/images/Ravenclaw.png'}
    ]
    getHouseDetail(): HouseDetail[]{
        return this.houseScore;
    }
}