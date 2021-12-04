import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  template: `
    <div>
      <p>Age is: {{age}}</p>
    </div>
  `,
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: Make this variable a custom property 
  @Input() age = 20;  // @Input() will make age as custom property

  constructor() { }

  ngOnInit(): void {
  }

}
