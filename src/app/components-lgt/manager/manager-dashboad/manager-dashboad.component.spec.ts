import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashboadComponent } from './manager-dashboad.component';

describe('ManagerDashboadComponent', () => {
  let component: ManagerDashboadComponent;
  let fixture: ComponentFixture<ManagerDashboadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerDashboadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
