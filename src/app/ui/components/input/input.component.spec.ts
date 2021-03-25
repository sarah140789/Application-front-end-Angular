import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAppComponent } from './input.component';

describe('InputAppComponent', () => {
  let component: InputAppComponent;
  let fixture: ComponentFixture<InputAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
