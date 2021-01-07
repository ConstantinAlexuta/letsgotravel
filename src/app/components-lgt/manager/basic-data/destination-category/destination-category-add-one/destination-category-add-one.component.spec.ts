import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCategoryAddOneComponent } from './destination-category-add-one.component';

describe('DestinationCategoryAddOneComponent', () => {
  let component: DestinationCategoryAddOneComponent;
  let fixture: ComponentFixture<DestinationCategoryAddOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationCategoryAddOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCategoryAddOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
