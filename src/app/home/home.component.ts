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

  constructor(private ser: LoginService, private tracker: TrackerService) {
    this.tracker.dataName.subscribe(name => 
      {
        this.userName = name;
        this.ser.getUser(this.userName).subscribe(e =>this.user = e);
        console.log(this.user);
      });
    
  }

  ngOnInit(): void {
  }



}
