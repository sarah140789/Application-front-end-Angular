import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageInfoCollapseComponent } from './affichage-info-collapse.component';

describe('AffichageInfoCollapseComponent', () => {
  let component: AffichageInfoCollapseComponent;
  let fixture: ComponentFixture<AffichageInfoCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageInfoCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageInfoCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
