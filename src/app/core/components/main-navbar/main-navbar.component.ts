import {Component, input} from '@angular/core';
import {NavDropdownComponent} from "./components/nav-dropdown/nav-dropdown.component";
import {LOGO_OPTIONS} from "../../constants/main-navbar.constant";

@Component({
    selector: 'app-main-navbar',
    imports: [
        NavDropdownComponent
    ],
    templateUrl: './main-navbar.component.html',
    styleUrl: './main-navbar.component.scss'
})
export class MainNavbarComponent {
  readonly textColor = input<string>('white');
  readonly localDate = input<string>('');
  protected readonly LOGO_OPTIONS = LOGO_OPTIONS;
}
