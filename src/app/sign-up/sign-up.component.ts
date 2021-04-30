import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  signForm:FormGroup;
  userList:any;
  user:any;
  msg:string="";
  i:any;
  curUser="";
  status1=false;
  status2=false;
  curPass="";
  curConfPass="";
  constructor(private ser:LoginService,private router:Router) {
    
   
  }
  

  ngOnInit(): void {
    this.signForm=new FormGroup({
      name:new FormControl("",Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]*$')])),
      userName:new FormControl("",Validators.compose([Validators.required,this.userNameExists])), 
      dob:new FormControl("",Validators.compose([Validators.required,this.ageValidityB,this.ageValidityA])),
      mailID:new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+')]),
      pwd: new FormControl("",Validators.compose([Validators.required,this.pwValidator])),
      pwdrepeat:new FormControl("",Validators.compose([Validators.required,this.confPassValidator1]))
    });
  }

  myFunction(){
    this.status1=false;
    this.ser.getUsers().subscribe(e=>
      {  
        this.userList=e;

        for (let i = 0; i < this.userList.length; i++) {
          if((this.curUser.toLowerCase())==(this.userList[i].userName.toLowerCase()))
              this.status1=true;  
        }
  });

    
  }
  
  
  onSubmit(data: any) {
    if(!this.status1 && !this.status2)
    {    
      let passHash = this.hash(data.pwd);
      var today = new Date();
      this.user = { name: data.name, userName: data.userName, pwd:passHash, dob:data.dob, mailID:data.mailID,profilePic:'https://bestprofilepictures.com/wp-content/uploads/2020/07/Awesome-Profile-Picture-For-Facebook.jpg',bio:data.bio,lastUpdate:today}
      this.ser.postUser(this.user).subscribe((e: any) => {console.log("Post started");console.log(this.user)}, (e: any) => {console.log(e);alert("Try Again")}, () => {console.log("Post Successful");alert("Sign Up Successful !!... Redirecting to login page");this.router.navigate(['/login']);  })
      
        
    }
    else
    {
      alert("Invalid Input Try Again")
    }

  }

  hash(data: any) {
    const md5 = new Md5();
    let passHash = md5.appendStr(data).end();
    return passHash;
  }

  ageValidityA(c:any){
    if(!c.value){
      return null;
    }
    let pwd=c.value;
    let year=""+pwd[0]+pwd[1]+pwd[2]+pwd[3];
    let curYear=(new Date()).getFullYear();
    if(curYear-parseInt(year)<18)
    return {'statusA':true}    
    return null  
    

  }
  ageValidityB(c:any){
    if(!c.value){
      return null;
    }
    let pwd=c.value;
    let year=""+pwd[0]+pwd[1]+pwd[2]+pwd[3];
    let curYear=(new Date()).getFullYear();
    if(curYear-parseInt(year)>200 || parseInt(year)>curYear)
    return {'statusB':true}
    else
    return null  
  }

   userNameExists(c:any){   
    if(!c.value){
      return null;
    }
    if(status)
    return {'status1':true}

   return null;
  } 

 
  pwValidator(c:any){       
    if(!c.value){
        return null;
    }
    let pwd=c.value;
    if(pwd.length>=8)
    return null
    else
    return {'status':true}
  }
  confPassValidator1(c:any){   
    return null;
} 

  confPassValidator(){
    this.status2=false;
    if(this.curConfPass!=this.curPass)
    this.status2=true;

  }



 
}