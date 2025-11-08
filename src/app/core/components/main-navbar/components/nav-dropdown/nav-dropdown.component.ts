import {Component, Input} from "@angular/core";
import {NavOption} from "../../../../models/nav-option.model";
import {RouterLink} from "@angular/router";
import {ActiveWindowService} from "../../../../services/active-window.service";

@Component({
    selector: "app-nav-dropdown",
    imports: [
        RouterLink
    ],
    templateUrl: "./nav-dropdown.component.html",
    styleUrl: "./nav-dropdown.component.scss"
})
export class NavDropdownComponent {
    @Input() options: NavOption[] = []

    constructor(private activeWindowService: ActiveWindowService) {
    }


    addActiveWindow(activeWindow: string) {
        this.activeWindowService.addWindow(activeWindow);
    }

    // changeTopBar(topBar: string){
    //   this.topBarService.addTopBar(topBar);
    //
    // }
}
