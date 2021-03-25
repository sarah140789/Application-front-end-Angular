import { Injectable } from '@angular/core';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SelectionRouteService {
  /**
   * extracParams : object : Permet de ne pas cacher l'url de redirection
   */
  public readonly extrasParams = {queryParams: filter, skipLocationChange: true};
  /**
   * Name : constructor
   * @param router : Router : Permet de changer de page
   * Comment : Initialise la classe SelectionRouteService
   */
  constructor(private router: Router) {}

  /**
   * Name : selectionRoute
   * @param route: string : []
   * Comment: permet de selectionner la route
   */
  public selectionRoute(route?: string): void {
    this.router.navigate([route], this.extrasParams).then();
  }

}
