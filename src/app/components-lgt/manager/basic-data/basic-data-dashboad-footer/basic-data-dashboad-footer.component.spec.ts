import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataDashboadFooterComponent } from './basic-data-dashboad-footer.component';

describe('BasicDataDashboadFooterComponent', () => {
  let component: BasicDataDashboadFooterComponent;
  let fixture: ComponentFixture<BasicDataDashboadFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDataDashboadFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDataDashboadFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
