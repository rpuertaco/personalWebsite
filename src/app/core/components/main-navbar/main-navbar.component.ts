import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.scss'
})
export class MainNavbarComponent {
  @Input() theme: string = 'nav-light'
  @Input() localDate: string =''
}