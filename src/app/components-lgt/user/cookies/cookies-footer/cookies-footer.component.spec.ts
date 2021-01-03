import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesFooterComponent } from './cookies-footer.component';

describe('CookiesFooterComponent', () => {
  let component: CookiesFooterComponent;
  let fixture: ComponentFixture<CookiesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
