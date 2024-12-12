import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ScoreComponent } from './score/score.component';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { HouseCardComponent } from './house-card/house-card.component';
import { StudentAddFormComponent } from './student-add-form/student-add-form.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
{ path:'', component: HomeComponent},
{ path:'student', component:StudentListComponent},
{ path: 'score', component: ScoreComponent},
{ path: 'hall-of-fame', component: HallOfFameComponent},
{ path: 'score/:id', component: ScoreComponent},
{ path: 'student/detail/:id', component: ScoreComponent},
{ path: 'student/newStudent', component: StudentAddFormComponent},
{ path: 'student/edit/:id', component: StudentAddFormComponent},
{ path: 'login', component: LoginComponent}
];
