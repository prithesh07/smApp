import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { Md5 } from 'ts-md5'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  constructor(private ser: LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    console.log(data.userName);
    let passHash = this.hash(data.pwd);
    this.ser.getUser(data.userName).subscribe(e => {
          this.user = e;
          if (this.user.pwd == passHash) {            
            console.log(e);
            alert("Login Successful")
          }
          else {
            alert("Wrong Credentials")
          }
        }, () => alert("User ID Not Found"))
      }

  hash(data: any) {
    const md5 = new Md5();
    let passHash = md5.appendStr(data).end();
    return passHash;
  }
}
