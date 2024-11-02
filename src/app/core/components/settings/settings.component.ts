import { Component } from '@angular/core';
import {StandardTopBarComponent} from "../top-bars/standard-top-bar/standard-top-bar.component";
import { RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    StandardTopBarComponent,
    RouterOutlet,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
settingComponent = 'general'


  setComponent(componentName: string){
  this.settingComponent = componentName;
  }

}
