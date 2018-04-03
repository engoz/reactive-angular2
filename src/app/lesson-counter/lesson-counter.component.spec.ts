import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCounterComponent } from './lesson-counter.component';

describe('LessonCounterComponent', () => {
  let component: LessonCounterComponent;
  let fixture: ComponentFixture<LessonCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
