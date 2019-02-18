import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  template: `
    Message: {{ message }} <app-child></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) child;

  constructor() { }

  message:string;

  ngOnInit() {

    this.message = this.child.message
    
  }
}