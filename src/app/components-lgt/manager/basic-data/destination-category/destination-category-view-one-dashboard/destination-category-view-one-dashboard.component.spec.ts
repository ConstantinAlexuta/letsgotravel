import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCategoryViewOneDashboardComponent } from './destination-category-view-one-dashboard.component';

describe('DestinationCategoryViewOneDashboardComponent', () => {
  let component: DestinationCategoryViewOneDashboardComponent;
  let fixture: ComponentFixture<DestinationCategoryViewOneDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationCategoryViewOneDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCategoryViewOneDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
