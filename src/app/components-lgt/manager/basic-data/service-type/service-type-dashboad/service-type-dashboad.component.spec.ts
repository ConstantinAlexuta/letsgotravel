import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeDashboadComponent } from './service-type-dashboad.component';

describe('ServiceTypeDashboadComponent', () => {
  let component: ServiceTypeDashboadComponent;
  let fixture: ComponentFixture<ServiceTypeDashboadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTypeDashboadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
