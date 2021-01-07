import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCategoryDashboadComponent } from './destination-category-dashboad.component';

describe('DestinationCategoryDashboadComponent', () => {
  let component: DestinationCategoryDashboadComponent;
  let fixture: ComponentFixture<DestinationCategoryDashboadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationCategoryDashboadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCategoryDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
