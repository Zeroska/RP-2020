import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSelectedIndexComponent } from './help-selected-index.component';

describe('HelpSelectedIndexComponent', () => {
  let component: HelpSelectedIndexComponent;
  let fixture: ComponentFixture<HelpSelectedIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpSelectedIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpSelectedIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
