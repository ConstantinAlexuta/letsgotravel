import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeEditOneComponent } from './service-type-edit-one.component';

describe('ServiceTypeEditOneComponent', () => {
  let component: ServiceTypeEditOneComponent;
  let fixture: ComponentFixture<ServiceTypeEditOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTypeEditOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeEditOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
