import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorreqComponent } from './mentorreq.component';

describe('MentorreqComponent', () => {
  let component: MentorreqComponent;
  let fixture: ComponentFixture<MentorreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
