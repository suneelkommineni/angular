import { Component, OnInit ,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-childcourse',
  template: `<button (click)="sendMessage()">Send Message</button>  
  
  `,
  styleUrls: ['./childcourse.component.css']
})
export class ChildcourseComponent implements OnInit {
  
  courseData: any = [
    {
        "courseId":1,
        "courseName":"java",
        "courseFee":1000,
        "courseDescription":"java is server side language"
    },
    {
      "courseId":2,
      "courseName":"Angular JS",
      "courseFee":1000,
      "courseDescription":"Angular Js is server side language"
  },
  {
    "courseId":3,
    "courseName":"Php",
    "courseFee":1000,
    "courseDescription":"Php is server side language"
},
{
  "courseId":4,
  "courseName":"Node JS",
  "courseFee":1000,
  "courseDescription":"java is server side language",
},    
];
  @Output() messageEvent = new EventEmitter<any>();
  message: any;
  constructor() { }
  sendMessage() {
    this.messageEvent.emit(this.courseData)
  }

  ngOnInit() {

  }

  receiveMessage($event) {
    this.message = $event
  }

}
