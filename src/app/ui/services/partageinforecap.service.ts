import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartageinforecapService {
public informationsperso: BehaviorSubject<string>;
public informationsconjoint: BehaviorSubject<string>;
public informationsressources: BehaviorSubject<string>;
  constructor() { 
    this.informationsperso= new BehaviorSubject<string>('');
    this.informationsconjoint= new BehaviorSubject<string>('');
    this.informationsressources= new BehaviorSubject<string>('');
  }
public ajoutperso(info: string):void {
  this.informationsperso.next(info) ;
}
public ajoutconjoint(info: string):void {
  this.informationsconjoint.next(info) ;
}
public ajoutressources(info: string):void {
  this.informationsressources.next(info) ;
}
}

