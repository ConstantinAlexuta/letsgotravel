import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFrameworkContractComponent } from './menu-framework-contract.component';

describe('MenuFrameworkContractComponent', () => {
  let component: MenuFrameworkContractComponent;
  let fixture: ComponentFixture<MenuFrameworkContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFrameworkContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFrameworkContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
