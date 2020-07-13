import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfDemo1Component } from './rf-demo1.component';

describe('RfDemo1Component', () => {
  let component: RfDemo1Component;
  let fixture: ComponentFixture<RfDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
