import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  isSaved = false;

  // step1: let's have the form tag equivalent 
  addUserForm = new FormGroup(
    { 
      username: new FormControl('', Validators.required), // Step 5: Let's work on validation
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    } // Step 2: Lets have the form input equivalents
  ); // For Step3 Refer HTML

  // For Step 6: goto HTML for validation msg
  
  constructor( private userService: UserService) { // 1. Connect with the Service using Dep Inj

  }

  ngOnInit(): void {
  }

  handleAddUser(): void{ // Step 8: Let's get the form field data
    console.log(this.addUserForm.value); // data to be sent to service

    // 2. Send the above data to the service 
    this.userService.createUser(this.addUserForm.value)
      .subscribe( (res: any) => { // 3. get the resp from the service
        console.log(res);

        if(res && res.id ){
          this.isSaved = true;
        }
      });
    

  }

}
