import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPersonnelComponent } from './information-personnel.component';

describe('InformationPersonnelComponent', () => {
  let component: InformationPersonnelComponent;
  let fixture: ComponentFixture<InformationPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
