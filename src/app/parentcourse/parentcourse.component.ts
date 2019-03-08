import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AbstractControl,FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
//import { EventEmitter } from 'events';



@Component({
  selector: 'app-parentcourse',
  template: `
  <div class="container">
  <h1>Angular Simple Reactive Form</h1>
  <form [formGroup]="myForm" novalidate (ngSubmit)="sendidTochild()">
<div class="form-group">
      <label for="contry">Countries</label>
      <select class="form-control" id="contry" formControlName="country" (change)="onChange($event.target.value) ">
        <option *ngFor="let contry of courselist" [value]="contry.courseId">{{contry.courseName}}</option>
      </select>
    </div>
    
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div>
<app-childcourse  (messageEvent)="receiveMessage($event)" ></app-childcourse>

courseData: <ul>
                <li *ngFor="let data of courseData">
                  Id:{{data.courseId}}<br/>
                  Name:{{data.courseName}}
                </li>
            </ul>

`,
  styleUrls: ['./parentcourse.component.css']
})

export class ParentcourseComponent implements OnInit {
  ID:any;
  myForm : FormGroup;
  courseFee:any;
  courseData:any = [];
  
  courselist:any=[
    {
        "courseId":1,
        "courseName":"java",
    },
    {
      "courseId":2,
      "courseName":"Angular JS",
  },
  {
    "courseId":3,
    "courseName":"Php",
},
{
  "courseId":4,
  "courseName":"Node JS",
},
    
];
  dropdownId: any;

sendidTochild(){

let dropdownId = this.myForm.value; 
//console.log(this.myForm.value);
this.ID = dropdownId;

}
onChange(value){  
this.dropdownId = value; 
}

receiveMessage($event) {
  this.courseData =[];
  $event.map((x) => {    
    if(x.courseId == this.dropdownId) {
      this.courseData.push({
        courseId:x.courseId,
        courseName:x.courseName
      })
    }
  })  
}


  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
        country:''
    });
}



  }


  


