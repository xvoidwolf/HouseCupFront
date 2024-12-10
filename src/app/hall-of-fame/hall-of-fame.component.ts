import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDetail } from '../model/student-detail';
import { StudentService } from '../model/student-service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-hall-of-fame',
  imports: [RouterModule, CardComponent],
  templateUrl: './hall-of-fame.component.html',
  styleUrl: './hall-of-fame.component.css'
})
export class HallOfFameComponent implements OnInit{
  students!:StudentDetail[];
  constructor(private studentService:StudentService){}
  ngOnInit(): void {
    this.studentService.getBestStudentsFromHouse().subscribe({
      next: sts => this.students = sts,
      error: err => console.log(err)
    })
  }
}
