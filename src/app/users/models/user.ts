import { Injectable } from "@angular/core";

// ng g i IUser
export interface IUser {
  id: number;
  name: string;
  phone: string;
  email: string;
}

// model
@Injectable({
  providedIn: 'root'
})
// ng g cl user
export class User implements IUser{
  id: number = 0;
  name: string = '';
  phone: string = '';
  email: string = '';

  // util methods for users feature
}
