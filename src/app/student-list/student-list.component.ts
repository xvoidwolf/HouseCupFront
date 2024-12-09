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
    this.studentService.getStudentDetail().subscribe(sl => {
      console.log(sl);
      this.studentDetail = sl;
    }); //subscribe del servizio
    //il modo in cui gestisco il risultato dell'observable^, riceve i risultati quando arriveranno
    //.subscribe prende una lambda
  }
  

}
