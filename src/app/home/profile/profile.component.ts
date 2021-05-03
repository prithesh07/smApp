import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { TrackerService } from 'src/app/Service/tracker.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  value2:any;
  userId:any;
  feedPost1:any;
  feedPost2:any;
  curName:any;
  curId:any;
  user:any;
  bio:any;
  img:any;
  follower: any;
  followerCount: any;
  following:any;
  followingCount:any;
  post:any;
  postCount:any;
  value1:any;
  a1=0;

  constructor(private ser:LoginService,private tracker:TrackerService) { 
   
    this.tracker.dataName.subscribe(e=>{
      this.userId=e;
      this.ser.getPosts(this.userId).subscribe(e=>{
        this.feedPost1=e;      
        this.ser.getUser(this.userId).subscribe(e=>{
          this.user=e;
          this.curName=this.user.name;
          this.curId=this.user.userName;
          this.bio=this.user.bio;
          this.img=this.user.profilePic;
        })
        this.ser.getFollower(this.userId).subscribe(e =>
          {
            this.follower=e;
            this.followerCount=this.follower.length;                                    
            
          })
        this.ser.getFollowing(this.userId).subscribe(e=>
          {
            this.following=e;
            this.followingCount=this.following.length;      
          }) 
        this.ser.getPosts(this.userId).subscribe(e=>
          {
            this.post=e;
            this.postCount=this.post.length;
          })   
      })
      
    })
  }

  ngOnInit(): void {
  }

  fun(data:any,image:any,data2:any){
    
    var modal = document.getElementById("myModal");
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    (<HTMLImageElement>modalImg).src = image;
    this.value1=data;
    this.value2=data2;
        
  }

  fun2(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

  }
  con(val){
    var a= parseInt(val);
    a=a+this.a1;
    return a;
 }


}
