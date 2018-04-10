import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import * as _ from 'lodash';
import { store } from '../event-bus-experiments/app-data';
import { Observer } from 'rxjs';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit, Observer<Lesson[]> {
 
  lessons:Lesson[] = [];
  
  ngOnInit() {
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]){
    console.log("Lessons List component received data ..")
    this.lessons = data;
  }

  error(){
    console.log("error")
  }

  complete(){
    console.log("complated")
  }
  
  toggleLessonViewed(lesson:Lesson){
   console.log("toggling lesson ....");
   store.toggleLessonViewed(lesson);
 }

 delete(deleted:Lesson){
    store.deleteLesson(deleted);
 }

}
