import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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


}
