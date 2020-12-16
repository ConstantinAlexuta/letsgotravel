import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOurAccreditationsComponent } from './menu-our-accreditations.component';

describe('MenuOurAccreditationsComponent', () => {
  let component: MenuOurAccreditationsComponent;
  let fixture: ComponentFixture<MenuOurAccreditationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOurAccreditationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOurAccreditationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
