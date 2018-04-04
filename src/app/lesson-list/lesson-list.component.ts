import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';
import * as _ from 'lodash';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit,Observer {
 
  lessons : Lesson[] = [];

  constructor() {
    console.log("lesson list component is registered as observer ... ")
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE,this);
    globalEventBus.registerObserver(ADD_NEW_LESSON,{
      notify: lessonText => {
        this.lessons.push({
          id:Math.random(),
          description:lessonText
        });
      } 
    });
  }

  ngOnInit() {
   
  }

  notify(data: Lesson[]){
    console.log("Lessons List component received data ..")
    this.lessons = data.slice(0);
  }
  
  toggleLessonViewed(lesson:Lesson){
   console.log("toggling lesson ....");
   lesson.completed = !lesson.completed;
 }

 delete(deleted:Lesson){
    _.remove(this.lessons, lesson => lesson.id === deleted.id);
 }

}
