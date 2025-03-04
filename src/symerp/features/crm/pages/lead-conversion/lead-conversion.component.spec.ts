import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadConversionComponent } from './lead-conversion.component';

describe('LeadConversionComponent', () => {
  let component: LeadConversionComponent;
  let fixture: ComponentFixture<LeadConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadConversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
