import {Component, OnInit} from '@angular/core';
import {ConfService} from '../../../../shared/services/conf.service';
import {ConfInterface} from '../../../../shared/interfaces/conf-interface';
import {Route} from '../../../../shared/enums/route.enum';
import {NavigationService} from '../../services/navigation.service';
import {I18nService} from '../../../../shared/services/i18n.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  private conf: ConfInterface | undefined;
  constructor(private confservice: ConfService,
              private i18nservice: I18nService,
              private navigation: NavigationService) { }

  ngOnInit(): void {
    this.confservice.get().subscribe(resp => this.conf = resp);
    this.i18nservice.get().subscribe(resp => {
      const maxStep = resp.timeline.etapes.length - 1;
      this.initStepNavigation(maxStep);
    });
    this.route();
  }
  route(): void {
    this.navigation.route(Route.presentation);
  }
  initStepNavigation(maxStep: number = 0): void {
    this.navigation.setSteps(0, 0, maxStep);
  }

}
