import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountDataService } from '../shared/services/account-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  accountName: any;

  constructor(private accountDataService: AccountDataService) { }

  ngOnInit(): void {
    this.accountDataService.latestAccountName.subscribe( (name: any) => {
      console.log(name);
      this.accountName = name;
    })
  }

}
