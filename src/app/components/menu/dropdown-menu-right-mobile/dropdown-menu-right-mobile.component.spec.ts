import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuRightMobileComponent } from './dropdown-menu-right-mobile.component';

describe('DropdownMenuRightMobileComponent', () => {
  let component: DropdownMenuRightMobileComponent;
  let fixture: ComponentFixture<DropdownMenuRightMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownMenuRightMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMenuRightMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
