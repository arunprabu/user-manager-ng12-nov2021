import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

// configuring child routes
const usersRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'add', component: AddUserComponent },
  { path: ':userId', component: UserDetailsComponent }, // userId is the URL Param
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes) // registering the child routes
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
