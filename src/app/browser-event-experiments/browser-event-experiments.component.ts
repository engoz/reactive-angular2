import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {


 hoverSection : HTMLElement;
 buttonSection : HTMLElement;

  constructor() { }

  ngOnInit() {

    this.hoverSection = document.getElementById('hover');
    /*
    //anonymous listener
    this.hoverSection.addEventListener('mousemove', ev => {
      console.log(ev);
    });
    */
    //evetn'ı bu şekilde tanımlarsak unsubscripe yapabiliriz.
    this.hoverSection.addEventListener('mousemove',onMouseMove);
    this.hoverSection.addEventListener('click',onClick);
    this.buttonSection = document.getElementById('unsubsribeButton');
   // this.buttonSection.addEventListener('mousemove', onMouseMove);
  }


  unsubscribe(){
    console.log('Called unsubscribe()');
    this.hoverSection.removeEventListener('mousemove',onMouseMove);
  }

}

function onClick(ev:MouseEvent){
  console.log(ev);
}

function onMouseMove(ev : MouseEvent){
  console.log(ev);
}