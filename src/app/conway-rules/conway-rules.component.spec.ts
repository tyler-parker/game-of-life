import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConwayRulesComponent } from './conway-rules.component';

describe('ConwayRulesComponent', () => {
  let component: ConwayRulesComponent;
  let fixture: ComponentFixture<ConwayRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConwayRulesComponent]
    });
    fixture = TestBed.createComponent(ConwayRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
