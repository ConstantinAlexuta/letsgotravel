import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkContractMenuComponent } from './framework-contract-menu.component';

describe('FrameworkContractMenuComponent', () => {
  let component: FrameworkContractMenuComponent;
  let fixture: ComponentFixture<FrameworkContractMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkContractMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkContractMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
