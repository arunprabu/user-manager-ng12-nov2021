import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // step1: let's have the form tag equivalent 
  addUserForm = new FormGroup(
    { 
      username: new FormControl('', Validators.required), // Step 5: Let's work on validation
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    } // Step 2: Lets have the form input equivalents
  ); // For Step3 Refer HTML

  // For Step 6: goto HTML for validation msg
  


  constructor() { }

  ngOnInit(): void {
  }

}
