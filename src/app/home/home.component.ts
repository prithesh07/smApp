import { rendererTypeName } from '@angular/compiler';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { TrackerService } from '../Service/tracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: any;
  user: any
  curName:any;
  curId:any;
  follower:any;
  followerCount:any;
  following:any;
  followingCount:any;
  post:any;
  postCount:any;
  photo:any;
  caption:any;  
  userList:any;
 
  
  constructor(private ser: LoginService, private tracker: TrackerService) {
    this.tracker.dataName.subscribe(name => 
      {
        this.userName = name;
        this.ser.getUser(this.userName).subscribe(e =>
          {
            this.user = e;
            this.curName=this.user.name;
            this.curId=this.user.userName;
            this.ser.getFollower(this.userName).subscribe(e =>
              {
                this.follower=e;
                this.followerCount=this.follower.length;                                    
                
              })
            this.ser.getFollowing(this.userName).subscribe(e=>
              {
                this.following=e;
                this.followingCount=this.following.length;      
              }) 
            this.ser.getPosts(this.userName).subscribe(e=>
              {
                this.post=e;
                this.postCount=this.post.length;
              })   
              this.ser.getUsers().subscribe(e=>
                {
                  this.userList=e;     
                  console.log(this.userList);    
                          
                  
                })

            
          });
        
      });  
  }

  ngOnInit(): void {
  }
  saveCode(data:any){
    alert("hey")
  }
  

  fun(){
    alert("hey")
  }
 


}
