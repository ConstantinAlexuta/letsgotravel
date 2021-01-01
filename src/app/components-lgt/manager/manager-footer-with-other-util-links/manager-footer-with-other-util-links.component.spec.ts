import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFooterWithOtherUtilLinksComponent } from './manager-footer-with-other-util-links.component';

describe('ManagerFooterWithOtherUtilLinksComponent', () => {
  let component: ManagerFooterWithOtherUtilLinksComponent;
  let fixture: ComponentFixture<ManagerFooterWithOtherUtilLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerFooterWithOtherUtilLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerFooterWithOtherUtilLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
