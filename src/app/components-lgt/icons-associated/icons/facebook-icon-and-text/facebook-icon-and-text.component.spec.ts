import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookIconAndTextComponent } from './facebook-icon-and-text.component';

describe('FacebookIconAndTextComponent', () => {
  let component: FacebookIconAndTextComponent;
  let fixture: ComponentFixture<FacebookIconAndTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookIconAndTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookIconAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
