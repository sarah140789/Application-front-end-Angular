import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Serveur} from '../enums/serveur.enum';
import {ConfInterface} from '../interfaces/conf-interface';

@Injectable({
  providedIn: 'root'
})
export class ConfService{
  /**
   * url : string : Soit l'url de wiremock soit l'url de prod
   */
  public url: string;
  /**
   * Name : constructor
   * @param http: HttpClient: Service http angular pour les appels api
   * Comment : Inject le service HttpClient pour l'appel de l'api conf
   */
  constructor(private http: HttpClient) {
    if (environment.production) {
      this.url = Serveur.distant;
    }else {
      this.url = `${environment.urlApi}${Serveur.local}`;
    }
  }

  /**
   * Name: get
   * Return : Un Observable de type ConfInterface
   * Comment: Permet de faire appel a l'api conf.
   */
  public get(): Observable<ConfInterface>{
    return this.http.get<ConfInterface>(this.url);
  }
}
