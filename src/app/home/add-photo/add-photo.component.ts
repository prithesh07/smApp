import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Service/login.service';
import { TrackerService } from '../../Service/tracker.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  x1:any;
  x2:any;
  addPhoto: FormGroup;
  post:any;
  userName:any;
  postRes:any;
  img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcR2HQHgEDrCYGxs3633Rxp1vyLz6Lsw5LhQ&usqp=CAU';

  constructor(private ser:LoginService,private tracker: TrackerService,private router:Router) {
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
    let x=Math.random()*2000;
    this.post = { postId:x, userName: this.userName, caption:data.caption, contentIMG:data.imgUrl, postTime:today}
    this.ser.addPost(this.post).subscribe(e=>{
      console.log("post started");
      console.log(this.post);
      this.postRes={postId:x,userName:this.userName,comment:'0'}
      this.ser.addPostResponse(this.postRes).subscribe(e=>{},(error)=>console.log("Post response error"))
     }, (e: any) => {
      console.log(e);alert("Try Again")}, () => {
        
        alert("Successfully Posted");        
        this.reloadComponent() 

      });

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

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
   }

   fun(){
    var img=document.getElementById('x');
    (<HTMLImageElement>img).src =this.img;
    if(this.img=='')
    (<HTMLImageElement>img).src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcR2HQHgEDrCYGxs3633Rxp1vyLz6Lsw5LhQ&usqp=CAU';

   }
   hey(){
     if(this.x1!=null)
     {
      var modal = document.getElementById("myModal");
      var img = document.getElementById("myImg");
      var modalImg = document.getElementById("img01");
      modal.style.display = "block";
      (<HTMLImageElement>modalImg).src = this.x1;

     }
     else{       
       alert('Nothing to preview');
     }
    
   
   }



// Get the <span> element that closes the modal


// When the user clicks on <span> (x), close the modal
function() { 
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

  


}
