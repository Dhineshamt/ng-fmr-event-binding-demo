import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnChanges, AfterViewInit {
  @Output() register = new EventEmitter();
  @Input() nClicks: number;

  constructor() {
    console.log('Playground constructor is called');
  }

  ngOnInit() {
    console.log('Playground ngOnInit is called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Playground ngOnChanges is called');
  }

  ngAfterViewInit(): void {
    console.log('Playground ngAfterViewInit is called');
  }

  clickHandler() {
    console.log('Click handled in playground component');

    //  raise the custom event
    this.register.emit({
      on: new Date(),
      message: 'Register event raised'
    });
  }
}
