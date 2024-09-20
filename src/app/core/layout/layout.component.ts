import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DAYS} from "../../../assets/data/contant";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  selectedBackground: string = 'code';
  localDate = this.generateDate(new Date());



  generateDate(date: Date) : any {
    return DAYS[date.getDay()] + ' ' + date.getDate() + '.' + (date.getMonth() + 1) + '. ' + date.getHours() + ':' + date.getMinutes();
  }
}
