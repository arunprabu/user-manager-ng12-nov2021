import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  userData: any;
  dupUserData: any;
  
  isUpdated: boolean = false;

  constructor( private userService: UserService, private route: ActivatedRoute) { 
    console.log('Inside constructor');
  }

  ngOnInit(): void { // lifecycle hook
    console.log('Inside ngOnInit');
    // Read URL Params
    const userId = this.route.snapshot.paramMap.get('userId');

    this.userService.getUserById(userId)
      .subscribe( (res: any) => {
        console.log(res); 
        this.userData = res;
      });
  }

  handleEditModalOpen(): void{
    this.dupUserData = { ...this.userData }; // shallow copy 
  }

  handleUpdateUser(){
    console.log(this.dupUserData); // submittable Data

    this.userService.updateUser(this.dupUserData)
      .subscribe( (res: any) => {
        console.log(res);
        if(res && res.id){
          this.isUpdated = true;
          this.userData = res;
        }
      });

  }

}
