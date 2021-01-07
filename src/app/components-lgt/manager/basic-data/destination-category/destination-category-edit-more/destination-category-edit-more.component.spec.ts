import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCategoryEditMoreComponent } from './destination-category-edit-more.component';

describe('DestinationCategoryEditMoreComponent', () => {
  let component: DestinationCategoryEditMoreComponent;
  let fixture: ComponentFixture<DestinationCategoryEditMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationCategoryEditMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCategoryEditMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
