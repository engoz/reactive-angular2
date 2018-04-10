import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import {store } from '../event-bus-experiments/app-data';
import { Observer } from 'rxjs';
@Component({
  selector: 'lesson-counter',
  templateUrl: './lesson-counter.component.html',
  styleUrls: ['./lesson-counter.component.css']
})
export class LessonCounterComponent implements Observer<Lesson[]>, OnInit {
  


  lessonsCounter = 0;

  constructor() {
    
   }

  ngOnInit() {
    console.log("lesson counter component is registered as observer ... ")
    store.lessonsList$.subscribe(this);

  }

  next(data:Lesson[]) {
    console.log("counter component received data ..");
    this.lessonsCounter = data.length;
    console.log(this.lessonsCounter);
  }

  error(){
    console.log("error")
  }

  complete(){
    console.log("complated")
  }

}
