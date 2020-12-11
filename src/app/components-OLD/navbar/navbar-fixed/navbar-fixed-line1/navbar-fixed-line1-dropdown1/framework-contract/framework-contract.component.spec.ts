import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkContractComponent } from './framework-contract.component';

describe('FrameworkContractComponent', () => {
  let component: FrameworkContractComponent;
  let fixture: ComponentFixture<FrameworkContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
