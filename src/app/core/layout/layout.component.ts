import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DAYS} from "../../shared/constants/contant";
import {DropdownMenuComponent} from "../components/dropdown-menu/dropdown-menu.component";
import {MainNavbarComponent} from "../components/main-navbar/main-navbar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    DropdownMenuComponent,
    MainNavbarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  selectedBackground: string = 'code';
  autoTheme : boolean = true
  theme: string = 'nav-light'
  localDate: string = this.timeSystem(new Date());

  constructor() {
    this.automaticFunctionalities()
  }

  ngOnInit() : void {
  setInterval(() => {
    this.automaticFunctionalities()
  }, 1000)
}

  automaticFunctionalities(): void {
    const date = new Date();
    this.localDate = this.timeSystem(date);
    if(this.autoTheme){
      switch (date.getHours() > 19 || date.getMinutes() < 7){
        case true:
          this.theme = 'nav-dark'
          break;
        case false:
          this.theme = 'nav-light'
          break;
      }
    }
  }

  timeSystem(date: Date) : string {
    return DAYS[date.getDay() - 1] + ' ' + date.getDate() + '. ' + (date.getMonth() + 1) + '. ' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() ;
  }
}
