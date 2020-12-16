import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuDownDesktopComponent } from './dropdown-menu-down-desktop.component';

describe('DropdownMenuDownDesktopComponent', () => {
  let component: DropdownMenuDownDesktopComponent;
  let fixture: ComponentFixture<DropdownMenuDownDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownMenuDownDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMenuDownDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
