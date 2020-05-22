import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePraticeComponent } from './directive-pratice.component';

describe('DirectivePraticeComponent', () => {
  let component: DirectivePraticeComponent;
  let fixture: ComponentFixture<DirectivePraticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivePraticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePraticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
