import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeEditMoreComponent } from './service-type-edit-more.component';

describe('ServiceTypeEditMoreComponent', () => {
  let component: ServiceTypeEditMoreComponent;
  let fixture: ComponentFixture<ServiceTypeEditMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTypeEditMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeEditMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
