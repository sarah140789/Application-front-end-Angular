import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRecapitulatifComponent } from './info-recapitulatif.component';

describe('InfoRecapitulatifComponent', () => {
  let component: InfoRecapitulatifComponent;
  let fixture: ComponentFixture<InfoRecapitulatifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRecapitulatifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRecapitulatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
