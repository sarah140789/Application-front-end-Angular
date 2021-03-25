import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationConjointDcdComponent } from './information-conjoint-dcd.component';

describe('InformationConjointDcdComponent', () => {
  let component: InformationConjointDcdComponent;
  let fixture: ComponentFixture<InformationConjointDcdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationConjointDcdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationConjointDcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
