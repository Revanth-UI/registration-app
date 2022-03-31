import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminGuardService } from './admin.gaurd';
const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate : [AdminGuardService]
  },
  
  { 
    path: '', 
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
