import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeAddOneComponent } from './service-type-add-one.component';

describe('ServiceTypeAddOneComponent', () => {
  let component: ServiceTypeAddOneComponent;
  let fixture: ComponentFixture<ServiceTypeAddOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTypeAddOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeAddOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
