import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-info-recapitulatif',
  templateUrl: './info-recapitulatif.component.html',
  styleUrls: ['./info-recapitulatif.component.scss']
})
export class InfoRecapitulatifComponent implements OnInit{
  @Input() titre = '';
  @Input() information: any;
  constructor() { }
  ngOnInit(): void {}
}
