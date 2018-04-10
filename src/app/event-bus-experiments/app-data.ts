import * as _ from 'lodash';
import { Observable,Observer,BehaviorSubject } from 'rxjs';
import { Lesson } from '../shared/model/lesson';


class DataStore {


    private lessonListSubject = new BehaviorSubject([]);

    public lessonsList$ : Observable<Lesson[]> = this.lessonListSubject.asObservable(); 

    

    initializeLessonList(newList:Lesson[]){
        this.lessonListSubject.next(_.cloneDeep(newList));
    }

    addLesson(newLesson:Lesson){
        const lessons = this.cloneLessons();
        lessons.push(newLesson);
        this.lessonListSubject.next(lessons);
    }

    toggleLessonViewed(toggled:Lesson){
        const lessons = this.cloneLessons();
        const lesson = _.find(lessons, lesson => lesson.id == toggled.id);
        lesson.completed = !lesson.completed;
        this.lessonListSubject.next(lessons);
    }

    deleteLesson(deleted:Lesson){
        const lessons = this.cloneLessons();
        _.remove(lessons, lesson => lesson.id === deleted.id);
        this.lessonListSubject.next(lessons);    
    } 
    
    private cloneLessons(){
        return _.cloneDeep(this.lessonListSubject.getValue());
    }
}

export const store = new DataStore();