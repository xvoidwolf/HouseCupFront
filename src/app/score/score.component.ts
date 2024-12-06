import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HouseCardComponent } from '../house-card/house-card.component';
import { HouseScoreService } from '../model/house-score-service';
import { HouseDetail } from '../model/house-detail';

@Component({
  selector: 'app-score',
  imports: [RouterModule,HouseCardComponent],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit {
  houseDetail!: HouseDetail[];
  constructor(private houseScoreService: HouseScoreService){}
  ngOnInit(): void {
    this.houseDetail = this.houseScoreService.getHouseDetail();
  }
  

}
