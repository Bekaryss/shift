import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTaskListComponent } from './dash-task-list.component';

describe('DashTaskListComponent', () => {
  let component: DashTaskListComponent;
  let fixture: ComponentFixture<DashTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
