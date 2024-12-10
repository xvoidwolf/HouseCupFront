import { Component, Input } from '@angular/core';
import { HouseDto } from '../model/house-dto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-card',
  imports: [RouterModule],
  templateUrl: './house-card.component.html',
  styleUrl: './house-card.component.css'
})
export class HouseCardComponent {
 @Input()
    detail!: HouseDto; 
  
}
