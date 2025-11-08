import {Component, output} from '@angular/core';

@Component({
    selector: 'app-standard-top-bar',
    imports: [],
    templateUrl: './standard-top-bar.component.html',
    styleUrl: './standard-top-bar.component.scss'
})
export class StandardTopBarComponent {
  readonly closeMe = output();

  close():void {
    this.closeMe.emit();
  }
}
