import { Injectable } from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataInfoDcdService {
  private pinfoDcd = new BehaviorSubject(Array<string>());
  public infoDcd$ = this.pinfoDcd.asObservable();
  public unSubscipt = new Subscription();
  constructor() { }
  public addInfo(data: Array<string>): void {
    this.pinfoDcd.next([...data]);
  }
}
