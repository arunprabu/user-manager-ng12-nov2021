import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: User[] = [];
  usersSubscription: Subscription | undefined;

  constructor( private userService: UserService) {  // 1. connect with the service 
    console.log("Inside Constructor");
  }

  ngOnInit(): void { // Lifecycle Hook / Method
    console.log("Inside ngOnInit");
    // will be invoked whenever the comp comes into view. 
    // ideal place for us to send ajax call

    // 2. send the req to the service 
    this.usersSubscription = this.userService.getUsers()
      .subscribe( (res: User[]) => { // 3. get the res from the service
        console.log(res);
        this.userList = res;
      } );
  }

  ngOnDestroy(): void { // lifecycle hook
    console.log("Into Destroy");
    // ideal place for you to unsubscribe, clear the data, clear timeouts, clear intervals
    this.usersSubscription?.unsubscribe();
    if(this.userList && this.userList.length > 0){
      this.userList.length = 0;
    }
  }


}
