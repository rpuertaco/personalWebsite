import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LayoutComponent} from "./core/layout/layout.component";
import {WallpaperComponent} from "./core/wallpaper/wallpaper.component";

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
      {
      path: '',
      component: HomeComponent
    }]
  },

];
