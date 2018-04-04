import { Component, OnInit } from '@angular/core';
import { testLessons } from '../shared/model/test-lessons';
import { Lesson } from '../shared/model/lesson';
import { store } from './app-data';


@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  
  constructor() { 
  }

  ngOnInit() {
    console.log("Top level compoonent broadcasted all lessons ... ");
    store.initializeLessonList(testLessons.slice(0));

    setTimeout(()=>{
      const newLesson = {
          id:Math.random(),
          description:'New lesson arriving from the backend'
      };
      store.addLesson(newLesson);
      //TODO
    },10000);

  }

  addNewLesson(lessonText:string){
    const newLesson = {
      id:Math.random(),
      description:lessonText
    };
   store.addLesson(newLesson);
  }

}
