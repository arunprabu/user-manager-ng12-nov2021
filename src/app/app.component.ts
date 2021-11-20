import { Component } from '@angular/core';

// Tied together by Decorator
@Component({
  selector: 'app-root', // exposing as element selector   -- mandatory 
  templateUrl: './app.component.html', ///html  -- mandatory -- only one template
  styleUrls: ['./app.component.css'] //css -- Optional - can be multiple
})
export class AppComponent {
  // ts 
  title = 'user-manager-ng12-nov2021';
}
