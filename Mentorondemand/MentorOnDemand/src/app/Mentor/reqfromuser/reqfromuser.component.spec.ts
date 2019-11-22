import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqfromuserComponent } from './reqfromuser.component';

describe('ReqfromuserComponent', () => {
  let component: ReqfromuserComponent;
  let fixture: ComponentFixture<ReqfromuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqfromuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqfromuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
