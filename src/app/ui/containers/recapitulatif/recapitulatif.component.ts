import { Component, OnInit} from '@angular/core';
import {RecapTitre} from '../../../../shared/enums/recap-titre.enum';
import {DataInfoPersoService} from '../../services/data-info-perso.service';
import {DataInfoDcdService} from '../../services/data-info-dcd.service';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss']
})
export class RecapitulatifComponent implements OnInit {
  public titre = RecapTitre;
  public infoPerso = Array<string>();
  public infoPersoDcd = Array<string>();
  public infoRessource = Array<string>();
  constructor(private datainfoperson: DataInfoPersoService, private datainfodcd: DataInfoDcdService) { }
  ngOnInit(): void {
    this.datainfoperson.infoPerson$.subscribe(dataInfoPerso => this.infoPerso = dataInfoPerso);
    this.datainfodcd.infoDcd$.subscribe(dataInfoDcd => this.infoPersoDcd = dataInfoDcd);
  }
}
