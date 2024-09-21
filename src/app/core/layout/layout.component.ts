import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DAYS} from "../../shared/constants/contant";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  selectedBackground: string = 'code';
  localDate = null;

ngOnInit() {
 setInterval(() => {
this.localDate = this.generateDate(new Date())
 }, 1000)
}

  generateDate(date: Date) : any {
    return DAYS[date.getDay() - 1] + ' ' + date.getDate() + '. ' + (date.getMonth() + 1) + '. ' + date.getHours() + ':' + date.getMinutes();
  }
}
