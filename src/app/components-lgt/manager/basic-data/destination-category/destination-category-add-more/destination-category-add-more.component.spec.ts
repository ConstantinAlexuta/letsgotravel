import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCategoryAddMoreComponent } from './destination-category-add-more.component';

describe('DestinationCategoryAddMoreComponent', () => {
  let component: DestinationCategoryAddMoreComponent;
  let fixture: ComponentFixture<DestinationCategoryAddMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationCategoryAddMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCategoryAddMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
