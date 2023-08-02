import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GOLHeaderComponent } from './gol-header.component';

describe('GOLHeaderComponent', () => {
  let component: GOLHeaderComponent;
  let fixture: ComponentFixture<GOLHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GOLHeaderComponent]
    });
    fixture = TestBed.createComponent(GOLHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
