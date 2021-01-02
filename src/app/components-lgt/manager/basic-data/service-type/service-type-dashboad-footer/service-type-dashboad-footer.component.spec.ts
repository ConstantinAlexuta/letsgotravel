import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeDashboadFooterComponent } from './service-type-dashboad-footer.component';

describe('ServiceTypeDashboadFooterComponent', () => {
  let component: ServiceTypeDashboadFooterComponent;
  let fixture: ComponentFixture<ServiceTypeDashboadFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTypeDashboadFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypeDashboadFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
