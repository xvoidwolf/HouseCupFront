import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDetail } from '../model/student-detail';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input()
detail!: StudentDetail; 
}
