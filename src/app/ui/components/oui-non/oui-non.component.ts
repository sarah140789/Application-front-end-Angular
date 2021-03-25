import {Component, OnInit, Optional, Self, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';

@Component({
  selector: 'app-oui-non',
  templateUrl: './oui-non.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./oui-non.component.scss']
})
export class OuiNonComponent implements OnInit, ControlValueAccessor {
  public value: any = '';
  public buttonState = {left: false, right: false};
  constructor(@Self() @Optional() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  writeValue(value: any): void {
    this.value = value;
    // console.log('writeValue : ', this.value);
  }

  select(val: any): void {
    this.toogleButton(val.name);
    this.value = val.textContent.trim();
    this.onChange(this.value);
  }
  public onChange(value: any): void{}
  public onTouched(): void {}
  private toogleButton(button: string): void {
    if (button === 'right'){
      this.buttonState.right = true;
      this.buttonState.left = !this.buttonState.right;
    }
    else if (button === 'left') {
      this.buttonState.left = true;
      this.buttonState.right = !this.buttonState.left;
    }
    else {
      this.buttonState.right = false;
      this.buttonState.left = false;
    }
  }
}
