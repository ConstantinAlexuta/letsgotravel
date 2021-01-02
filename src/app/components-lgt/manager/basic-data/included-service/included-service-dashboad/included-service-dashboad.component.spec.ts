import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludedServiceDashboadComponent } from './included-service-dashboad.component';

describe('IncludedServiceDashboadComponent', () => {
  let component: IncludedServiceDashboadComponent;
  let fixture: ComponentFixture<IncludedServiceDashboadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludedServiceDashboadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludedServiceDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
