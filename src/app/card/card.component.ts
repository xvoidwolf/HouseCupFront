import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentSummary } from '../model/student-summary';
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
  detail!: StudentSummary; 

  @Output() //delego tutto alla componente esteriore che la chiama, gli dico che quell'evento è successo e gli dico per quale studente passandogli l'id
  requestDelete = new EventEmitter<number>(); 
  onClickDelete() {
    this.requestDelete.emit(this.detail.id);
  }
  @Output()
  requestUpdate = new EventEmitter<number>();
  onClickUpdate() {
    this.requestUpdate.emit(this.detail.id);
  }
}
