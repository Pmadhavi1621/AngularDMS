import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentComponent,
    AddDoctorComponent,
    AddPatientComponent,
    AppointmentListComponent,
    DoctorListComponent,
    PatientListComponent,
    DoctorComponent,
    HeaderComponent,
    LoginComponent,
    PatientComponent,
    SideNavComponent,
    UpdateAppointmentComponent,
    UpdateDoctorComponent,
    UpdatePatientComponent,
    WelcomeComponent,
    CreateUserComponent,
    AddFeedbackComponent,
    FeedbackListComponent,
    UpdateFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
