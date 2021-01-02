import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeViewAllComponent } from './service-type-view-all.component';

describe('ServiceTypeViewAllComponent', () => {
  let component: ServiceTypeViewAllComponent;
  let fixture: ComponentFixture<ServiceTypeViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTypeViewAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
