import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTourismPatentComponent } from './menu-tourism-patent.component';

describe('MenuTourismPatentComponent', () => {
  let component: MenuTourismPatentComponent;
  let fixture: ComponentFixture<MenuTourismPatentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTourismPatentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTourismPatentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
