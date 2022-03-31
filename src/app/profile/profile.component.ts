import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserManagementService } from '../service/user-management.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData: User={};
  constructor(
    private userService: UserManagementService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  // Get user details method starts here 

  getUserDetails() {
    this.userService.getUser()
    .subscribe(data => {
      let response: any= data;
      if(data){
        this.userData.EmailId=response.email;
        this.userData.Bio=response.bio;
        this.userData.Name=response.name;
      }
    },
      error => {
        window.alert('Error while getting user details. Please try again!');
      });

  }
// Ends here 

}

