import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskSomethingInfoComponent } from './ask-something-info.component';

describe('AskSomethingInfoComponent', () => {
  let component: AskSomethingInfoComponent;
  let fixture: ComponentFixture<AskSomethingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskSomethingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskSomethingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
