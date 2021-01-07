import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCategoryViewOneComponent } from './destination-category-view-one.component';

describe('DestinationCategoryViewOneComponent', () => {
  let component: DestinationCategoryViewOneComponent;
  let fixture: ComponentFixture<DestinationCategoryViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationCategoryViewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCategoryViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
