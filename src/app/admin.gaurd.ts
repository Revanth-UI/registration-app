import { Injectable } from "@angular/core";
import { CanActivateChild, CanLoad, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { UserManagementService } from "./service/user-management.service";


@Injectable()
export class AdminGuardService implements CanActivateChild, CanLoad{

    constructor(private router : Router,
        private userService: UserManagementService){ }

    canActivateChild(){
        debugger;
        return true;
    }
    canLoad(){
        return true;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.userService.isAuthenticated){
            return true;
        }else{
            this.router.navigate(['']);
            return false;
        }
        
    }
    
}