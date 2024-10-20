import {Component} from '@angular/core';
import {BasicTopBarComponent} from "../top-bars/basic-top-bar/basic-top-bar.component";


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    BasicTopBarComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // native= false;
  constructor() {
  }

  // ngOnInit() {
  //   this.native = !!this.activatedRoute.snapshot.data['native'];
  // }
}
