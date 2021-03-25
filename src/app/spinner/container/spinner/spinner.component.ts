import { Component, OnInit } from '@angular/core';
import {SpinnerService} from '../../services/spinner.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  /**
   * load$ : Observable<boolean> : Enclenche le spinner ou le désactive
   */
  public load$: Observable<boolean> | undefined;

  /**
   * Name : constructor
   * @param spinnerService : SpinnerService : Permet l'utilisation du spinner via un service délégation
   */
  constructor(private spinnerService: SpinnerService) {}

  /**
   * Name ngOnInit : initilaise le service du spinner
   */
  ngOnInit(): void {
    this.load$ = this.spinnerService.status;
  }

}
