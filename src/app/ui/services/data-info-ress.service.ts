import { Injectable } from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataInfoRessService {
  private pinfoRess = new BehaviorSubject(Array<string>());
  public infoRess$ = this.pinfoRess.asObservable();
  public unSubscipt = new Subscription();
  constructor() { }
  public addInfo(data: Array<string>): void {
    this.pinfoRess.next([...data]);
    // console.log('Share Data : ', this.pinfoPerso.value);
  }
}
