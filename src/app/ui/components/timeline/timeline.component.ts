import { Component, OnInit } from '@angular/core';
import {Route} from '../../../../shared/enums/route.enum';
import {NavigationService} from '../../services/navigation.service';
import {I18nService} from '../../../../shared/services/i18n.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public etapes: any;
  public etapes1: any;
  public etapes2: any;
  public etapes3: any;
  public etapes4: any;
  
  constructor(private i18nservice: I18nService,private navigation: NavigationService) { }

  ngOnInit(): void {
    this.i18nservice.get().subscribe(response => {
      this.etapes1 = response.timeline.etapes[1];
      this.etapes2 = response.timeline.etapes[2];
      this.etapes3 = response.timeline.etapes[3];
      this.etapes4 = response.timeline.etapes[4];
    });
  }

  persoRoute(): void {
    if (this.navigation.isPreviousStepPossible()) {
      this.navigation.route(Route.personnel);
      this.navigation.setCurrentStep(this.navigation.previousStep());
    }
  }
  conjointRoute(): void {
    if (this.navigation.isNextStepPossible()) {
      this.navigation.route(Route.conjoint);
      this.navigation.setCurrentStep(this.navigation.nextStep());
    }
  }
  ressourceRoute(): void {
    if (this.navigation.isNextStepPossible()) {
      this.navigation.route(Route.ressource);
      this.navigation.setCurrentStep(this.navigation.nextStep());
    }
  }
  resultatRoute(): void {
    if (this.navigation.isNextStepPossible()) {
      this.navigation.route(Route.resultat);
      this.navigation.setCurrentStep(this.navigation.nextStep());
    }
  }

}



