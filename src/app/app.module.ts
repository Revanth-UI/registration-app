import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';

import { UserManagementService } from './service/user-management.service';
import { AdminGuardService } from './admin.gaurd';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    UserManagementService,
    AdminGuardService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
