import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { BoldPipe } from './bold.pipe';
import { ReversestringPipe } from './reversestring.pipe';
import { Limitword2Pipe } from './limitword2.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { StudentComponent } from './student/student.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { ParentdetailsComponent } from './parentdetails/parentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    BoldPipe,
    ReversestringPipe,
    Limitword2Pipe,
    AboutusComponent,
    ContactusComponent,
    DashboardComponent,
    PagenotfoundComponent,
    StudentdetailsComponent,
    StudentregistrationComponent,
    StudentComponent,
    ContactdetailsComponent,
    ParentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
