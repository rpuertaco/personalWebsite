import { Routes} from '@angular/router';
import {LayoutComponent} from "./core/layout/layout.component";
import {ActiveWindowService} from "./core/services/active-window.service";


export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        outlet: 'about',
        loadComponent: ()=>  import('./core/components/about/about.component').then((c)=>c.AboutComponent )
      },
      {
        path: '',
        outlet: 'settings',
        loadComponent: ()=> import('./core/components/settings/settings.component').then((c)=>c.SettingsComponent )
      }
    ]
  }

];
