import {Component, Input} from '@angular/core';



@Component({
    selector: 'app-wallpaper',
    imports: [],
    templateUrl: './wallpaper.component.html',
    styleUrl: './wallpaper.component.scss'
})
export class WallpaperComponent {
  @Input() wallpaper: string = "code"
}
