import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugustaHolidaysComponent } from './augusta-holidays.component';

describe('AugustaHolidaysComponent', () => {
  let component: AugustaHolidaysComponent;
  let fixture: ComponentFixture<AugustaHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugustaHolidaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AugustaHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
