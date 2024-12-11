import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentSummary } from '../model/student-summary';
import { StudentService } from '../model/student-service';
import { CardComponent } from '../card/card.component';
import { HouseDto } from '../model/house-dto';
import { HouseScoreService } from '../model/house-score-service';

@Component({
  selector: 'app-hall-of-fame',
  imports: [RouterModule, CardComponent],
  templateUrl: './hall-of-fame.component.html',
  styleUrl: './hall-of-fame.component.css'
})
export class HallOfFameComponent implements OnInit{
  students: StudentSummary[] = [];
  houses!:HouseDto[];
  houseId!:number;
  classId!:number;
  constructor(private studentService:StudentService, private houseService:HouseScoreService){}
  ngOnInit(): void {
    for(let i = 1; i<=4; i++){
      this.studentService.getBestStudentsFromHouse(i,1).subscribe({
        next: (student) => this.students.push(...student),
        error: err => console.log(err)
      });
    }
  }
}
