import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCategoryEditOneComponent } from './destination-category-edit-one.component';

describe('DestinationCategoryEditOneComponent', () => {
  let component: DestinationCategoryEditOneComponent;
  let fixture: ComponentFixture<DestinationCategoryEditOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationCategoryEditOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCategoryEditOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
