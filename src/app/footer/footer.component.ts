import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  // inline template,
  template: `
    <footer class="text-center">
      <hr>
      <app-menu></app-menu>
      <p class="redText greenText">Copyright 2021 - Arun </p>
    </footer>
  `,
  styles: [
    `
      .greenText{
        color: green;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
