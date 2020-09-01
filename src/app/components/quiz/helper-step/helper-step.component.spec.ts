import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperStepComponent } from './helper-step.component';

describe('HelperStepComponent', () => {
  let component: HelperStepComponent;
  let fixture: ComponentFixture<HelperStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
