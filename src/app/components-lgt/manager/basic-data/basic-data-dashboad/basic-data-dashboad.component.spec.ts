import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataDashboadComponent } from './basic-data-dashboad.component';

describe('BasicDataDashboadComponent', () => {
  let component: BasicDataDashboadComponent;
  let fixture: ComponentFixture<BasicDataDashboadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDataDashboadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDataDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
