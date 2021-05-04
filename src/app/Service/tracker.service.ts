import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  
  public dataName:BehaviorSubject<string> = new BehaviorSubject<string>('');
  public dataName2:BehaviorSubject<string>= new  BehaviorSubject<string>('');
  public followerCount1:BehaviorSubject<string>= new  BehaviorSubject<string>('');
  public followingCount1:BehaviorSubject<string>= new  BehaviorSubject<string>('');
  public postCount1:BehaviorSubject<string>= new  BehaviorSubject<string>('');

  constructor() {
   }
}
