import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeViewOneComponent } from './service-type-view-one.component';

describe('ServiceTypeViewOneComponent', () => {
  let component: ServiceTypeViewOneComponent;
  let fixture: ComponentFixture<ServiceTypeViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTypeViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
