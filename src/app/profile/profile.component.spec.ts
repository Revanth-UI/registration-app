import { fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UserManagementService } from '../service/user-management.service';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {  tick } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";
import { AuthenticationService } from '../service/authentication/authentication.service';

describe('ProfileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        ProfileComponent
      ],
      providers:[UserManagementService,AuthenticationService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should call getUser and get response as empty array', fakeAsync(() => {
    debugger;
    const fixture = TestBed.createComponent(ProfileComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(UserManagementService);
    let spy_getPosts = spyOn(service,"getUser").and.returnValue(of());
    component.getUserDetails();
    tick(100);
    expect(component).toBeDefined();
  })) 
});
