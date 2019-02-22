import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <button (click)="sendMessage()">Send Message</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  suneel: string = "working ....."
  
  showButtons: any = {
    q1: false,
    q2: false
}

toggleButton(button: string): void {
    this.showButtons[button] = !this.showButtons[button]
}

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {

    this.messageEvent.emit(this.suneel);
  }
}