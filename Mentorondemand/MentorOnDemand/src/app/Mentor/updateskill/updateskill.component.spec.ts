import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateskillComponent } from './updateskill.component';

describe('UpdateskillComponent', () => {
  let component: UpdateskillComponent;
  let fixture: ComponentFixture<UpdateskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
