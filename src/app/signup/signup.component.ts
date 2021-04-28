import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import {Md5} from 'ts-md5'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any;
  constructor(private ser:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    let passHash = this.hash(data.pwd);
    var today = new Date();
    if(data.pwd!=data.pwdrepeat){
      alert("confirm password is not mathcing")
    }
    else{
    this.user = { name: data.name, userName: data.userName, pwd:passHash, dob:data.dob, mailID:data.mailID,profilePic:'https://bestprofilepictures.com/wp-content/uploads/2020/07/Awesome-Profile-Picture-For-Facebook.jpg',bio:data.bio,lastUpdate:today}
    this.ser.postUser(this.user).subscribe((e: any) => {console.log("Post started");console.log(this.user)}, (e: any) => console.log(e), () => console.log("Post Successful"))
    }
  }

  hash(data: any) {
    const md5 = new Md5();
    let passHash = md5.appendStr(data).end();
    return passHash;
  }

}
