import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpcomponentComponent } from './expcomponent.component';

describe('ExpcomponentComponent', () => {
  let component: ExpcomponentComponent;
  let fixture: ComponentFixture<ExpcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
