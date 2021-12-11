import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../shared/services/account-data.service';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h3>Any to Any Component Communication</h3>
      <p>My Account: {{accountName}} </p>
      <button class="btn btn-primary" 
      (click)="onUpdateAccount('Alibaba')">Update the Name as Alibaba</button>
      <br>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  accountName: any;

  constructor(private accountDataService: AccountDataService) { }

  ngOnInit(): void {
    this.accountDataService.latestAccountName.subscribe( (name: any) => {
      console.log(name);
      this.accountName = name;
    })
  }

  onUpdateAccount(updateableName: any){
    console.log('should update');
    console.log(updateableName);

    this.accountDataService.updateAcountName(updateableName);
  }

}
