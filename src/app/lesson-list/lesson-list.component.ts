import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import * as _ from 'lodash';
import { Observer, store } from '../event-bus-experiments/app-data';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit,Observer {
 
  lessons:Lesson[] = [];

  constructor() {
    console.log("lesson list component is registered as observer ... ");
  }

  ngOnInit() {
    //store.lessonList$.subscribe(this);
    store.subscribe(this);
  }

  next(data: Lesson[]){
    console.log("Lessons List component received data ..")
    this.lessons = data;
  }
  
  toggleLessonViewed(lesson:Lesson){
   console.log("toggling lesson ....");
   store.toggleLessonViewed(lesson);
 }

 delete(deleted:Lesson){
    store.deleteLesson(deleted);
 }

}
