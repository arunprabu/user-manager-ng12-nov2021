import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  // Step 1: Have the initial data for any comp to subscribe 
  private accountName = "Peter";

  // Step 2: Create and obj of BehaviourSubject with default value in it
  private myAccount = new BehaviorSubject<any>(this.accountName);

  // Step 3: Create an Observable for the above BehaviourSubject obj 
  // so that any comp can subscribe to it. 
  latestAccountName: Observable<any> = this.myAccount.asObservable()

  constructor() { 
    
  }

  // sending / pushing updates to all subscribers
  updateAcountName(newName: any): void{
    console.log(newName);
    this.myAccount.next(newName); // emitting new name over the observable
  }
}
