import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-binding-demo';
  numberOfClicks = 0;

  registerEventHandlerInParent(args) {
    console.log('AppComponent handler for register is called', args);
  }
}
