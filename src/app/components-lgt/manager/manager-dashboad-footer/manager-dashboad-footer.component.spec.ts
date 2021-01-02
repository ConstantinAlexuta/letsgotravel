import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashboadFooterComponent } from './manager-dashboad-footer.component';

describe('ManagerDashboadFooterComponent', () => {
  let component: ManagerDashboadFooterComponent;
  let fixture: ComponentFixture<ManagerDashboadFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerDashboadFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDashboadFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
