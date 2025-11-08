import {Component, input} from '@angular/core';



@Component({
    selector: 'app-wallpaper',
    imports: [],
    templateUrl: './wallpaper.component.html',
    styleUrl: './wallpaper.component.scss'
})
export class WallpaperComponent {
  readonly wallpaper = input<string>("code");
}
