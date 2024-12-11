import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HouseCardComponent } from '../house-card/house-card.component';
import { HouseScoreService } from '../model/house-score-service';
import { HouseDto } from '../model/house-dto';
import { HouseRankingDto } from '../model/house-ranking-dto';

@Component({
  selector: 'app-score',
  imports: [RouterModule,HouseCardComponent],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit {
  houseDetail!: HouseRankingDto;
  constructor(private houseScoreService: HouseScoreService){}
  ngOnInit(): void {
    this.houseScoreService.getHouseRankings().subscribe(hs => this.houseDetail = hs);
  }
}
