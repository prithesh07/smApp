import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  
  public dataName:BehaviorSubject<string> = new BehaviorSubject<string>("Guest");

  constructor() { }
}
