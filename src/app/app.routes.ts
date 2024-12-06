import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ScoreComponent } from './score/score.component';


export const routes: Routes = [
{ path:'', component: HomeComponent},
{ path:'student', component:StudentListComponent},
{ path: 'score', component: ScoreComponent}
];
