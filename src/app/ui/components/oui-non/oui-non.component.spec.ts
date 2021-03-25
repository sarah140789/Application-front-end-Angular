import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuiNonComponent } from './oui-non.component';

describe('OuiNonComponent', () => {
  let component: OuiNonComponent;
  let fixture: ComponentFixture<OuiNonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuiNonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuiNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
