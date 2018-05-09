import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxClockComponent } from './lightbox-clock.component';

describe('LightboxClockComponent', () => {
  let component: LightboxClockComponent;
  let fixture: ComponentFixture<LightboxClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightboxClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightboxClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
