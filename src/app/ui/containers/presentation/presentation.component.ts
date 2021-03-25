import {Component, OnInit} from '@angular/core';
import {SelectionRouteService} from '../../services/selection-route.service';
import {Route} from '../../../../shared/enums/route.enum';
import {I18nService} from '../../../../shared/services/i18n.service';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  public i18n: any;
  constructor(private i18nservice: I18nService, private navigation: NavigationService) {}
  ngOnInit(): void {
    this.i18nservice.get().subscribe(response => this.i18n = response);
  }
  eventClick(): void {
    if (this.navigation.isNextStepPossible()) {
      this.navigation.route(Route.personnel);
      this.navigation.setCurrentStep(this.navigation.nextStep());
    }
  }
}
