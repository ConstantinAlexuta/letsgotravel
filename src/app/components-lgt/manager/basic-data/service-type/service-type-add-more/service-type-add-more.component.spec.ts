import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeAddMoreComponent } from './service-type-add-more.component';

describe('ServiceTypeAddMoreComponent', () => {
  let component: ServiceTypeAddMoreComponent;
  let fixture: ComponentFixture<ServiceTypeAddMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTypeAddMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeAddMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
