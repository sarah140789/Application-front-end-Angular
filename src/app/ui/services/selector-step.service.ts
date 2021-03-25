import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectorStepService {
  private step = -1;
  constructor() { }
  public previousStep(): number {
    return this.step - 1;
  }
  public currentStep(): number {
    return this.step;
  }
  public nextStep(): number {
    return this.step + 1;
  }
  public setcurrentStep(step: number): void {
    this.step = step;
  }
}
