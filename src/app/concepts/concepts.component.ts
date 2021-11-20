import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // ideal place to keep data
  // public or private variables 

  // interpolation related
  appName = 'User Management App!'; // public var 

  // property binding
  companyName = 'Hexaware'; 

  // two way binding related
  courseName = "Angular";

  constructor() { }

  ngOnInit(): void {
  }

  // ideal place to define methods
  // event binding related
  handleClickMe(event: any){
    alert("Clicked");

    console.log(event); // event object
    event.target.innerText = "Clicked";
    // TODO: disable the button on click
  }

}
