import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  /**
   * statusPrivate : BehaviorSubject<boolean> : Enclenche le spinner ou l'arrête
   * @private On expose pas son comportement on le délégue à status
   */
  private statusPrivate = new BehaviorSubject<boolean>(false);
  /**
   * status : BehaviorSubject : Communiquera avec les autres composant
   */
  public status = this.statusPrivate.asObservable();
  /**
   * info :  spinner actif ou inactif
   */
  public info = false;

  /**
   * Name : constructor
   * Comment : initialise l'objet SpinnerService
   */
  constructor() {}

  /**
   * Name : display
   * @param value : boolean : à afficher ou non à l'écran
   * Comment : Permet de visualiser ou non le spinner sur la page HTML.
   */
  public display(value: boolean){
    this.info = value;
    this.statusPrivate.next(this.info);
  }

  /**
   * Name : getInfo
   * @return : info : boolean : actif ou inatif dans la page HTML.
   * Comment : Retourne l'etat du spinner.
   */
  public getInfo(): boolean { return this.info; }

  /**
   * Name : timout
   * Comment : Au bout de x milliseconds le spinner s'arrête.
   */
  public timout() {
    this.display(true);
    setTimeout( () => {
      this.display(false);
    }, 800);
  }
}
