import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  // inline template,
  template: `
    <footer>
      <hr>
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
