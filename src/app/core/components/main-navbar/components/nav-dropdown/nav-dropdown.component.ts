import {Component, Input} from '@angular/core';
import {NavOption} from "../../../../../shared/models/nav-option.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-dropdown',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-dropdown.component.html',
  styleUrl: './nav-dropdown.component.scss'
})
export class NavDropdownComponent {
@Input() options: NavOption[] = []

}