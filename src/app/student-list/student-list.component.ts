import { Component, Injectable, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StudentSummary } from '../model/student-summary';
import { StudentService } from '../model/student-service';
import { CardComponent } from '../card/card.component';
import { HouseScoreService } from '../model/house-score-service';
import { HouseRankingDto } from '../model/house-ranking-dto';


@Component({
  selector: 'app-student-list',
  imports: [RouterModule,CardComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  studentDetail!: StudentSummary[];
  houseDetail!: HouseRankingDto;
  constructor(private studentService: StudentService, private router:Router){}
  ngOnInit(): void {
    this.studentService.getStudentDetail().subscribe(sl => {
      console.log(sl);
      this.studentDetail = sl;
    }
  ); //subscribe del servizio
    //il modo in cui gestisco il risultato dell'observable^, riceve i risultati quando arriveranno
    //.subscribe prende una lambda
  }
  performDelete(id: number) {
    this.studentService.deleteStudent(id).subscribe({
      next: () => this.studentDetail = this.studentDetail.filter(s => s.id != id), //sostituisco array già esistente, se lo modificassi e basta angular non se ne accorgerebbe
      error: err => console.log(err)
    });
  }
  performUpdate(id: number) {
    //vogliamo riutilizzare la form della addStudent, navighiamo sulla form della add passandogli un id che prima non passavamo, se passata con id edit, altrimenti create
    this.router.navigate(["/student/edit", id]);
  }

}
