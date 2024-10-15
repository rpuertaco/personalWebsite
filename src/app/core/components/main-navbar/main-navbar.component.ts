import {Component, Input} from '@angular/core';
import {NavDropdownComponent} from "./components/nav-dropdown/nav-dropdown.component";
import {LOGO_OPTIONS} from "../../constants/main-navbar.constant";

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [
    NavDropdownComponent
  ],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.scss'
})
export class MainNavbarComponent {
  @Input() textColor: string = 'white'
  @Input() localDate: string =''
  protected readonly LOGO_OPTIONS = LOGO_OPTIONS;
}
