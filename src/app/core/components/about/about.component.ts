import {Component, VERSION} from '@angular/core';
import {BasicTopBarComponent} from "../top-bars/basic-top-bar/basic-top-bar.component";
import {ActiveWindowService} from "../../services/active-window.service";



@Component({
    selector: "app-about",
    standalone: true,
    imports: [
        BasicTopBarComponent
    ],
    templateUrl: "./about.component.html",
    styleUrl: "./about.component.scss"
})
export class AboutComponent {
    // native= false;
    year = new Date().getFullYear();
    protected readonly VERSION = VERSION;

    // ngOnInit() {
    //   this.native = !!this.activatedRoute.snapshot.data['native'];
    // }

    constructor(private windowService: ActiveWindowService) {
    }

    goToSettings() {
        this.windowService.removeWindow("settings");
        this.windowService.addWindow("settings")
    }

    close(): void {
        this.windowService.removeWindow("about")
    }
}
