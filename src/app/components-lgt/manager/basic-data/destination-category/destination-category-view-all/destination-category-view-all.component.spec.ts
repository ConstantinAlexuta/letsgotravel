import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCategoryViewAllComponent } from './destination-category-view-all.component';

describe('DestinationCategoryViewAllComponent', () => {
  let component: DestinationCategoryViewAllComponent;
  let fixture: ComponentFixture<DestinationCategoryViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationCategoryViewAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCategoryViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
