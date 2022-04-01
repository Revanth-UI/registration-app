import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegistrationData } from '../model/registrationData';
import { User } from '../interfaces/user';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { UserManagementService } from '../service/user-management.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userForm: any;
  pattern: string = "^([a-zA-Z0-9 .,_-]+)$";
  userData: User = {};
  constructor(private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private userService: UserManagementService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
// Create form method starts here
  createForm() {
    this.userForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.pattern)]],
      EmailId: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      Bio: ['', [Validators.required]]
    });
  }
   // Ends here 

  // On submit method starts here
  onSubmit(registrationForm: NgForm) {
    console.log(registrationForm.value);
    const registrationData = new RegistrationData(registrationForm.value.name, registrationForm.value.email, registrationForm.value.password, registrationForm.value.bio);
  }
// Ends here

// Save new user method starts here

  saveNewUser() {

    if (this.userForm.valid) {
      this.userData.Name = this.userForm.value.Name,
        this.userData.EmailId = this.userForm.value.EmailId,
        this.userData.Password = this.userForm.value.ContactNo;
        this.userData.Bio = this.userForm.value.Bio;
      this.userService.addUser(this.userData)
        .subscribe(data => {
          this.userService.isAuthenticated=true;
          this.router.navigate(['profile']);
        },
          error => {
            window.alert('Error while registering the user. Please try again!');
          });
      this.userForm.reset();

    }
    else {
      window.alert('Please fill out all required fields');
    }


  }
// Ends here

}
