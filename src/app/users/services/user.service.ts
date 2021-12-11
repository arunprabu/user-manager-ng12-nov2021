import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Observable } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // 1. get the data from comp ts 
  createUser(formData: any) {
    console.log(formData);

    // 2. send the above data to the REST API
    // 2.1. What's the REST API Endpoint? 'https://jsonplaceholder.typicode.com/users'
    // 2.2. What's the HTTP Method? POST 
    // 2.3. What's the REST API Client Tool? HttpClient
    return this.http.post('https://jsonplaceholder.typicode.com/users', formData)
      .pipe(map((res: any) => { // 3. get the res from REST API 
        console.log(res);
        // 4. send the resp back to the comp
        return res;
      }));
  }

  // get all users 
  getUsers(): Observable<User[]> { // 1. get the req from the comp ts 
    console.log("Inside Service");
    // 2. send the req to the REST API 
      // 2.1 What's the REST API URL? https://jsonplaceholder.typicode.com/users
      // 2.2 What's the HTTP Method? GET
      // 2.3 What's the REST Client Tool? HttpClient
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe( map( (res: User[]) => { // 3. get the res from the REST API 
        console.log(res); 
        return res; // 4. send the res to the comp 
      }));

    // TODO: Learn about promise (ES2015) and async / await (ES2017)
    // Refer: https://codecraft.tv/courses/angular/http/http-with-promises/

  }

  // get user details 
  getUserById(userId: any): any {
    console.log(userId);

    // What's the REST API URL? https://jsonplaceholder.typicode.com/users/1 
    // What's the HTTP Method? GET 
    // What's the REST API Client? 
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .pipe( map( (res: any) => { 
        console.log(res); 
        return res; 
      }));
  }
 
  // update user 
  updateUser(formData: any): any {
    console.log(formData);

    return this.http.put(`https://jsonplaceholder.typicode.com/users/${formData.id}`, formData)
      .pipe( map( (res: any) => { 
        console.log(res); 
        return res; 
      }));
  }



}
