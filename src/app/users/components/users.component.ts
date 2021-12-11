import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  userList: any[] = [];

  constructor( private userService: UserService) {  // 1. connect with the service 
    console.log("Inside Constructor");
  }

  ngOnInit(): void { // Lifecycle Hook / Method
    console.log("Inside ngOnInit");
    // will be invoked wheneve the comp comes into view. 
    // ideal place for us to send ajax call

    // 2. send the req to the service 
    this.userService.getUsers()
      .subscribe( (res: any[]) => { // 3. get the res from the service
        console.log(res);
        this.userList = res;
      } );
  }

}
