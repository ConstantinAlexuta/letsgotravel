import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCategoryDashboadFooterComponent } from './destination-category-dashboad-footer.component';

describe('DestinationCategoryDashboadFooterComponent', () => {
  let component: DestinationCategoryDashboadFooterComponent;
  let fixture: ComponentFixture<DestinationCategoryDashboadFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationCategoryDashboadFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCategoryDashboadFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
