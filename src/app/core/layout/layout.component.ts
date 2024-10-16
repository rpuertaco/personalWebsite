import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DAYS, WALLPAPERS} from "../../shared/constants/contant";
import {MainNavbarComponent} from "../components/main-navbar/main-navbar.component";
import {WallpaperComponent} from "../wallpaper/wallpaper.component";
import {Wallpaper} from "../../shared/models/wallpaper.model";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MainNavbarComponent,
    WallpaperComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  autoWallpaper: boolean = true;
  timeStamp: Date = new Date();
  localDate: string = this.timeSystem(this.timeStamp);
  wallpaper: string = 'code';
  navText: string = 'white';

  constructor() {
    this.automaticFunctionalities()
  }

  ngOnInit() : void {
    if(this.autoWallpaper){
      this.changeWallpaper(this.timeStamp.getDay())
    }

  setInterval(() => {
    this.automaticFunctionalities()
  }, 1000)
}

  automaticFunctionalities(): void {
    const date = new Date();
    this.localDate = this.timeSystem(date);
  }

  changeWallpaper(wallpaperNumber: number): void{
    const selectedWallpaper: Wallpaper = WALLPAPERS[wallpaperNumber];
    this.wallpaper = selectedWallpaper.selectedWallpaper;
    this.navText = selectedWallpaper.textColor;
  }

  timeSystem(date: Date) : string {
    return DAYS[date.getDay()] + ' ' + date.getDate() + '. ' + (date.getMonth() + 1) + '. ' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() ;
  }
}
