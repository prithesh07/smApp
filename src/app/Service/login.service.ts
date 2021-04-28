import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url1='http://localhost:58702/api/';

  constructor(private http:HttpClient) { 

  }
  getUser(userID:any){
    return this.http.get(this.url1+'appUsers/'+userID)    
  }

  postUser(user:any){
    return this.http.post(this.url1+'appUsers',user);
  }

  getFollower(userID:any){
    return this.http.get(this.url1+'userFollowers/'+userID)
  }

  getFollowing(userID:any){
    return this.http.get(this.url1+'userFollowersFollowing/'+userID)
  }
    

}
