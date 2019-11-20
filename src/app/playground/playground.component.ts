import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @Output() register = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  clickHandler() {
    console.log('Click handled in playground component');

    //  raise the custom event
    this.register.emit({
      on: new Date(),
      message: 'Register event raised'
    });
  }
}
