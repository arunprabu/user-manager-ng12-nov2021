import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <button type="button" (click)="handleSendDataToParent()">Send Data to Parent Comp</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: Let's have the data to be sent to parent comp 
  profileName = 'John'; // this is the data - soon to be sent to parent comp

  // Step 2: Create an Obj of EventEmitter class
  @Output() profileLoaded = new EventEmitter(); // Step 3: Make it as custom event using @Output()
  // Note: The above custom event has to be emitted thru program; along with it we can send the data

  constructor() { }

  ngOnInit(): void {
  }

  handleSendDataToParent(){
    console.log('Before Emitting Custom Event');
    // Step 4: send the data to the parent comp by emitting the custom event
    this.profileLoaded.emit(this.profileName);
  }

}
