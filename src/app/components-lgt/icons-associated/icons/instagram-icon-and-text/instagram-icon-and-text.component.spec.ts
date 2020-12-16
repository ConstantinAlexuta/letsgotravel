import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramIconAndTextComponent } from './instagram-icon-and-text.component';

describe('InstagramIconAndTextComponent', () => {
  let component: InstagramIconAndTextComponent;
  let fixture: ComponentFixture<InstagramIconAndTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramIconAndTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramIconAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
