import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-basic-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './basic-top-bar.component.html',
  styleUrl: './basic-top-bar.component.scss'
})
export class BasicTopBarComponent {
  @Output() closeMe = new EventEmitter();

  close():void {
    this.closeMe.emit();
  }
}
