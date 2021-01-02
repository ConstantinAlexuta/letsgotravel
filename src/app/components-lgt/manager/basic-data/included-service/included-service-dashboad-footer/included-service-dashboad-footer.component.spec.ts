import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludedServiceDashboadFooterComponent } from './included-service-dashboad-footer.component';

describe('IncludedServiceDashboadFooterComponent', () => {
  let component: IncludedServiceDashboadFooterComponent;
  let fixture: ComponentFixture<IncludedServiceDashboadFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludedServiceDashboadFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludedServiceDashboadFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
