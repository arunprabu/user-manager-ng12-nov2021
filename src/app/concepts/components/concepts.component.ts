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

  // Step 3 of CPB: have the data to be passed to the child comp
  myAge = 60;

  dataReceivedFromChildComp = '';

  // directives related
  isLoggedIn = true;

  skillList = ["html", "css", "ts", "ng", "react"];

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

  // Step 6 of CEB: Let's have the handler to receive the data
  handleProfileLoaded(event: any): void{
    console.log('Handling the emitted custom event');
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }

}
