import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationData } from 'src/app/model/registrationData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = false;

  constructor(private router: Router) { }

  // Logout method starts here

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
  // Ends here
}
