import { CourseDetailsComponent } from './../../../service-app/src/app/course-details/course-details.component';
import { CourseComponent } from './../../../service-app/src/app/course/course.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
 
  {path:'home',component:HomeComponent },
  {path:'aboutus',component:AboutusComponent },
  {path:'courses',component:CourseComponent },
  {path:'course-details/:id',component:CourseDetailsComponent },
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
