import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  // inline template,
  template: `
    <footer class="text-center">
      <hr>
      <app-menu></app-menu>
      <p>Copyright 2021 - Arun </p>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
