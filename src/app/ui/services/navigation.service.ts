import { Injectable } from '@angular/core';
import {SelectionRouteService} from './selection-route.service';
import {SelectorStepService} from './selector-step.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private minStep = -1;
  private maxStep = -1;
  private arrayNav = new Array<number>();
  /* Service intelligent (business logic)*/
  /* Va utiliser selection-route et selector-step (delegation) qui sont des services dit dummy*/
  constructor(private selectionRoute: SelectionRouteService, private selectorStep: SelectorStepService ) { }
  route(path: string): void {
    this.selectionRoute.selectionRoute(path);
  }
  public previousStep(): number {
    return this.selectorStep.previousStep();
  }
  currentStep(): number {
    return this.selectorStep.currentStep();
  }
  public nextStep(): number {
    return this.selectorStep.nextStep();
  }
  public isPreviousStepPossible(): boolean {
    const previous = this.selectorStep.previousStep();
    return this.isPossible(previous);
  }
  public isNextStepPossible(): boolean {
    const next = this.selectorStep.nextStep();
    return this.isPossible(next);
  }
  private isPossible(current: number): boolean{
    if (this.minStep <= current && current <= this.maxStep){ return true; }
    else { return false; }
  }
  setCurrentStep(current: number): void {
    this.selectorStep.setcurrentStep(current);
  }
  setSteps(min: number, current: number, max: number): void{
    this.minStep = min;
    this.setCurrentStep(current);
    this.maxStep = max;
  }
}
