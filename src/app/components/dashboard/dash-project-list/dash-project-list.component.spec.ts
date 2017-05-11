import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProjectListComponent } from './dash-project-list.component';

describe('DashProjectListComponent', () => {
  let component: DashProjectListComponent;
  let fixture: ComponentFixture<DashProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
