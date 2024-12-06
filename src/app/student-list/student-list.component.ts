import { Component, Injectable, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentDetail } from '../model/student-detail';
import { StudentService } from '../model/student-service';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-student-list',
  imports: [RouterModule,CardComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  studentDetail!: StudentDetail[];
  constructor(private studentService: StudentService){}
  ngOnInit(): void {
    this.studentDetail = this.studentService.getStudentDetail();
  }
  

}
