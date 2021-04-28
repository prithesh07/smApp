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
  follower:any;
  followerCount:any;
  following:any;
  followingCount:any;
  curName:any;
  curId:any;
  
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
          });
        
      });  
  }

  ngOnInit(): void {
  }



}
