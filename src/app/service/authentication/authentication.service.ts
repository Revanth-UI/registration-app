import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationData } from 'src/app/model/registrationData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new RegistrationData('RevanthBoda', 'johndoe@mail.com', 'Password123', 'Hi, I am Revanth Boda and I am on it on it on it');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(registrationData: RegistrationData): boolean {
    if(this.checkCredentials(registrationData)){
      this.isAuthenticated = true;
      this.router.navigate(['profile']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(registrationData: RegistrationData): boolean {
  return this.checkName(registrationData.getName()) && this.checkEmail(registrationData.getEmail()) && this.checkPassword(registrationData.getPassword()) && this.checkBio(registrationData.getBio());
  }

  private checkName(name: string): boolean {
    return name === this.mockedUser.getName();
  }

  private checkEmail(email: string): boolean {
    return email === this.mockedUser.getEmail();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword();
  }

  private checkBio(bio: string): boolean {
    return bio === this.mockedUser.getBio();
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
