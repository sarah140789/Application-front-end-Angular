import { I18nService } from './../../../../shared/services/i18n.service';
import { Component, OnInit } from '@angular/core';
import { Route } from './../../../../shared/enums/route.enum';
import {NavigationService} from '../../services/navigation.service';



@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {
 
 
public i18n:any;
  constructor(private i18nservice: I18nService, private navigation: NavigationService) { }

  ngOnInit(): void {
    this.i18nservice.get().subscribe(resp => ​​this.i18n = resp  ​​);
  }
  previousRoute(): void {
    if (this.navigation.isPreviousStepPossible()) {
      this.navigation.route(Route.ressource);
      this.navigation.setCurrentStep(this.navigation.previousStep());
    }
  }
  nextRoute(): void {
    if (this.navigation.isNextStepPossible()) {
      this.navigation.route(Route.personnel);
      this.navigation.setCurrentStep(this.navigation.nextStep());
    }
  }
}
