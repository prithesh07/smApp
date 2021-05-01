import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  
  public dataName:BehaviorSubject<string> = new BehaviorSubject<string>('Prithesh007');

  constructor() {
    console.log("called")
   }
}
