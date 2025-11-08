import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-standard-top-bar',
    imports: [],
    templateUrl: './standard-top-bar.component.html',
    styleUrl: './standard-top-bar.component.scss'
})
export class StandardTopBarComponent {
  @Output() closeMe = new EventEmitter();

  close():void {
    this.closeMe.emit();
  }
}
