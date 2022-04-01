import { fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UserManagementService } from '../service/user-management.service';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


import {  tick } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";
import { AuthenticationService } from '../service/authentication/authentication.service';
import { AppRoutingModule } from '../app-routing.module';

describe('RegistrationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        RegistrationComponent
      ],
      providers:[UserManagementService,AuthenticationService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('Formgroup elements', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const app = fixture.componentInstance;

    const formElement = fixture.debugElement.nativeElement.querySelector('#userForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(4);
  });
  it('Formgroup elements values', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const app = fixture.componentInstance;

    const formElement = fixture.debugElement.nativeElement.querySelector('#userForm');
    const inputElements = formElement.querySelectorAll('input');
    inputElements[0].value='1';
    inputElements[1].value='2';
    inputElements[2].value='3';
    inputElements[3].value='4';
    expect(inputElements[0].value).toEqual('1');
  });
  
});
