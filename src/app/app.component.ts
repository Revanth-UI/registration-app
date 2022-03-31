import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication/authentication.service';
import { UserManagementService } from './service/user-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'registration-page';
  
  constructor(public userService: UserManagementService,
    private router: Router){

  }

  logout(){
    this.userService.isAuthenticated=false;
    this.router.navigate(['']);
  }
}
