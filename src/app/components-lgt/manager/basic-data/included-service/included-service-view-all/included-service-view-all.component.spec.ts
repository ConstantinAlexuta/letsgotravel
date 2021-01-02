import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludedServiceViewAllComponent } from './included-service-view-all.component';

describe('IncludedServiceViewAllComponent', () => {
  let component: IncludedServiceViewAllComponent;
  let fixture: ComponentFixture<IncludedServiceViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludedServiceViewAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludedServiceViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
