import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadGenerateComponent } from './lead-generate.component';

describe('LeadGenerateComponent', () => {
  let component: LeadGenerateComponent;
  let fixture: ComponentFixture<LeadGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadGenerateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
