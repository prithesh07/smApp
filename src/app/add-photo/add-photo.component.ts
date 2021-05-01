import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginService } from '../Service/login.service';
import { TrackerService } from '../Service/tracker.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  addPhoto: FormGroup;
  post:any;
  userName:any;

  constructor(private ser:LoginService,private tracker: TrackerService) {
    this.tracker.dataName.subscribe(name => 
      {
        this.userName = name;
      })

   }

  ngOnInit(): void {
    this.addPhoto=new FormGroup({
      imgUrl:new FormControl("",Validators.required),
      caption:new FormControl("",Validators.compose([Validators.required,this.captionValidity]))     
    });
  }
  onSubmit(data:any){
    var today = new Date();
    this.post = { postId:Math.random()*2000, userName: this.userName, caption:data.caption, contentIMG:data.imgUrl, postTime:today}
    this.ser.addPost(this.post).subscribe(e=>{console.log("post started");console.log(this.post)}, (e: any) => {console.log(e);alert("Try Again")}, () => console.log("Post Successful"));

  }

  captionValidity(c:any){
    if(!c.value){
      return null;
    }
    let pwd=c.value;
    if(pwd.length>49)
    return {status:true}
    return null;

  }

}
