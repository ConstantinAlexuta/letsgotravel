import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOffersEditMoreComponent } from './manager-offers-edit-more.component';

describe('ManagerOffersEditMoreComponent', () => {
  let component: ManagerOffersEditMoreComponent;
  let fixture: ComponentFixture<ManagerOffersEditMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOffersEditMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerOffersEditMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
