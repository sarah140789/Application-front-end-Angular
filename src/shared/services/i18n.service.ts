import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  constructor(private http: HttpClient) { }
  public get(): Observable<any> {
    return this.http.get('assets/i18n/i18n.json').pipe(share());
  }
}
