import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HouseDto } from "../model/house-dto";
import { CourseDto } from "../model/courses/course-dto";
import { HouseScoreService } from "../model/house-score-service";
import { CourseService } from "../model/courses/course-service";
import { StudentService } from "../model/student-service";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { StudentDetails } from "../model/student-detail";


@Component({
  selector: 'app-student-add-form',
  imports: [ReactiveFormsModule],
  templateUrl: './student-add-form.component.html',
  styleUrl: './student-add-form.component.css'
})

export class StudentAddFormComponent implements OnInit{
  studentForm!: FormGroup; //rappresenta la form che io creo nel template
  houses: HouseDto[] = [];
  courses: CourseDto[] = [];
  editMode = false; //false vuol dire che la form deve creare un nuovo elemento
  constructor(private houseService: HouseScoreService, private courseService: CourseService, private fb: FormBuilder,
    private studentService:StudentService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      dob: ['', [Validators.required]],
      sex: ['', [Validators.maxLength(1), Validators.minLength(1)]],
      mail: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5)]],
      phone: ['', [Validators.minLength(5), Validators.maxLength(30)]],
      background: ['', [Validators.minLength(5), Validators.maxLength(15)]],
      education: ['', [Validators.minLength(5), Validators.maxLength(15)]],
      pref: [false, [Validators.required]],
      course: [''],
      house: ['']
    });
    this.houseService.getHouses().subscribe({
      next: hs => this.houses = hs,
      error: err => console.log(err)
    });
    this.courseService.getCourses().subscribe({
      next: cs => this.courses = cs,
      error: err => console.log(err)
    });
    //guardiamo se c'era un id nel percorso
    const studentId = this.activatedRoute.snapshot.params['id'];
    //se esiste questo id, voglio fare una edit
    if(studentId) {
      this.editMode = true;
      //andarci a tirar su dal db lo studente con questo id per popolare la form coi suoi dati
      this.studentService.getStudentById(studentId).subscribe({ //devo rirtasformare da oggetti a numeri house e course, contrario di prima
        next: s => {
          const oldValue = {
            ...s,
            house: s.house.id,
            course: s.course.id
          };
          delete oldValue.id; //dev'essere opzionale nella madre
          delete oldValue.totalScore;
          this.studentForm.setValue(oldValue);
        },
        error: err => console.log(err)
      });
    }
  }
  onSubmit() {
    if (this.studentForm.valid) { //ogni elemento della form ha varie proprietà, una delle più importanti è valid, form valida quando tutti i campi sono validati
      //console.log(this.studentForm.value); //dovrebbe contere tutti i dati inseriti nella form
      const student:StudentDetails = {
        ...this.studentForm.value, //problema: corso e house hanno l'id ma io voglio un ogg del loro tipo, SPREAD OPERATOR, og con tutte le proprietà di studentoform.value
        house:{
          id: this.studentForm.value.house  //sovrascrivo le proprietà house e course, prima erano id, ora ogg con id 
        },
        course: {
          id: this.studentForm.value.course
        }
      };
        this.studentService.saveStudent(student).subscribe({
          next: () => this.router.navigate(['/student']),
          error: err => console.log(err)
        }); //ts controlla che quest'oggetto rispetti l'interfaccia studentDetails
    }
  }
}
