import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { ParentdetailsComponent } from './parentdetails/parentdetails.component';


const routes: Routes = [
  { path: '' , redirectTo: 'dashboard', pathMatch:'full'},
  { path: "dashboard", component: DashboardComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "contactus", component: ContactusComponent },

  { path: "contactus/:id", component: ContactusComponent },
  { path: "contactus/:id/:name", component: ContactusComponent },

  // { path: "details", component: StudentdetailsComponent },
  // { path: "registration", component: StudentregistrationComponent },
  { path: "student", 
    children: [
      {path:'', component: StudentComponent},
      { path: "details", 
        children: [
          {path:'', component: StudentdetailsComponent},
          { path: "contactdetails", component: ContactdetailsComponent },
          { path: "parentdetails", component: ParentdetailsComponent }
        ]
       },
      { path: "registration", component: StudentregistrationComponent },
    ]
  },
  // { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
