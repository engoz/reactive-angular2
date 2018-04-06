import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { Observer, store } from '../event-bus-experiments/app-data';
@Component({
  selector: 'lesson-counter',
  templateUrl: './lesson-counter.component.html',
  styleUrls: ['./lesson-counter.component.css']
})
export class LessonCounterComponent implements OnInit, Observer {

  lessonsCounter = 0;

  constructor() {
   }

  ngOnInit() {
    console.log("lesson counter component is registered as observer ... ")
    //store.lessonList$.subscribe(this);
    store.subscribe(this);
  }

  next(data:Lesson[]) {
    console.log("counter component received data ..");
    this.lessonsCounter = data.length;
  }

}
