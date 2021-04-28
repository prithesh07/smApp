import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='http://localhost:55237/api/appUsers/';

  constructor(private http:HttpClient) { 

  }
  getUser(userID:any){
    return this.http.get(this.url+userID)    
  }

  postUser(user:any){
    return this.http.post(this.url,user);
  }
}
