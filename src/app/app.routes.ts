import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LayoutComponent} from "./core/layout/layout.component";
import {CodeComponent} from "./core/backgrounds/code/code.component";

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        outlet: 'code',
        component: CodeComponent,
      },
      {
      path: '',
      component: HomeComponent
    }]
  },

];
