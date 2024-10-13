import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LayoutComponent} from "./core/layout/layout.component";
import {WallpaperComponent} from "./core/components/wallpaper/wallpaper.component";

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        outlet: 'default',
        loadComponent: ()=> import('./core/components/windows/default-window/default-window.component').then((c)=> c.DefaultWindowComponent)
      },
      {
        path: 'about',
        loadComponent: ()=>  import('./core/components/about/about.component').then((c)=>c.AboutComponent )
      }
    ]
  }

];
