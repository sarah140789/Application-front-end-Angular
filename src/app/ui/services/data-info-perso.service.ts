import { Injectable } from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataInfoPersoService {
  private pinfoPerso = new BehaviorSubject(Array<string>());
  public infoPerson$ = this.pinfoPerso.asObservable();
  public unSubscipt = new Subscription();
  constructor() { }
  public addInfo(data: Array<string>): void {
    this.pinfoPerso.next([...data]);
    // console.log('Share Data : ', this.pinfoPerso.value);
  }
}
