import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() typeButton = 'button';
  @Input() chevronPos = 'right';
  @Input() disabled: boolean | undefined;
  @Output() BtnSubmitted = new EventEmitter();
  constructor() { }
  ngOnInit(): void {}
  BtnClick(): void {
    this.BtnSubmitted.emit();
  }
}
