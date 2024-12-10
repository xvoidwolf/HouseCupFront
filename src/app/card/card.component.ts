import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentDetail } from '../model/student-detail';
import { ScoreComponent } from '../score/score.component';
import { HouseScoreService } from '../model/house-score-service';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private router:Router){}
@Input()
detail!: StudentDetail; 
}
