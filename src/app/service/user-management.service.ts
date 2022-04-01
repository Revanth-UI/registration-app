import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { User } from '../interfaces/user';

@Injectable()
export class UserManagementService {

  constructor(private httpclient : HttpClient) { }

  // Mock api
  apiURL = "https://mocki.io/v1/";

  // Add user mock api
  isAuthenticated = false;
  addUser (userData : any=[]) {
    return this.httpclient.get(this.apiURL + '7f434df6-a4ac-4817-ab7c-dd39a564d01d', userData);
  }
  // Get user mock api
  getUser() {
    return this.httpclient.get(this.apiURL + '611a3036-4420-48a5-b8da-9b461853cdd2');
  }


}
