import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludedServiceViewOneComponent } from './included-service-view-one.component';

describe('IncludedServiceViewOneComponent', () => {
  let component: IncludedServiceViewOneComponent;
  let fixture: ComponentFixture<IncludedServiceViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludedServiceViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludedServiceViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
