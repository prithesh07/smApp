import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Md5} from 'ts-md5';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  signForm:FormGroup;

  user:any;
  msg:string="";
  constructor(private ser:LoginService) { }

  ngOnInit(): void {
    this.signForm=new FormGroup({
      name:new FormControl("",[Validators.required]),
      userName:new FormControl("",[Validators.required]),
      dob:new FormControl("",[Validators.required]),
      mailID:new FormControl("",[Validators.required]),
      pwd: new FormControl("",Validators.compose([Validators.required,this.pwValidator])),
      pwdrepeat:new FormControl()
    });
  }

  
  onSubmit(data: any) {
    let passHash = this.hash(data.pwd);
    var today = new Date();
    if(data.pwd!=data.pwdrepeat){
      this.msg="Password do not match!!";
    }
    this.user = { name: data.name, userName: data.userName, pwd:passHash, dob:data.dob, mailID:data.mailID,profilePic:'https://bestprofilepictures.com/wp-content/uploads/2020/07/Awesome-Profile-Picture-For-Facebook.jpg',bio:data.bio,lastUpdate:today}
    this.ser.postUser(this.user).subscribe((e: any) => {console.log("Post started");console.log(this.user)}, (e: any) => console.log(e), () => console.log("Post Successful"))
    alert("Sign Up Successfull!!")
  }

  hash(data: any) {
    const md5 = new Md5();
    let passHash = md5.appendStr(data).end();
    return passHash;
  }

  pwValidator(c:any){       
    if(!c.value){
        return null;
    }
    let pwd=c.value;
    if(pwd.length>=8)
    return null
    else
    return {'pwd':true}
 }
}