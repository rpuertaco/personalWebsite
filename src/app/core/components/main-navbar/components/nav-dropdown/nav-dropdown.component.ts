import {Component, Input} from '@angular/core';
import {NavOption} from "../../../../models/nav-option.model";
import {RouterLink} from "@angular/router";
import {TopBarService} from "../../../../services/top-bar.service";
import {ActiveWindowService} from "../../../../services/active-window.service";

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

  constructor( private windowService: ActiveWindowService ) {
  }


  addActiveWindow(activeWindow: string){
  this.windowService.addWindow(activeWindow);
  }

  // changeTopBar(topBar: string){
  //   this.topBarService.addTopBar(topBar);
  //
  // }
}
