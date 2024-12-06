import { Component, Input } from '@angular/core';
import { HouseDetail } from '../model/house-detail';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-card',
  imports: [RouterModule],
  templateUrl: './house-card.component.html',
  styleUrl: './house-card.component.css'
})
export class HouseCardComponent {
 @Input()
    detail!: HouseDetail; 
  
}
