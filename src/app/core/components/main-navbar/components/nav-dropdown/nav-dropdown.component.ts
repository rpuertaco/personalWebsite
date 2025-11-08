import { Component, inject, input } from "@angular/core";
import {NavOption} from "../../../../models/nav-option.model";
import {ActiveWindowService} from "../../../../services/active-window.service";

@Component({
    selector: "app-nav-dropdown",
    imports: [],
    templateUrl: "./nav-dropdown.component.html",
    styleUrl: "./nav-dropdown.component.scss"
})
export class NavDropdownComponent {
    private activeWindowService = inject(ActiveWindowService);

    readonly options = input<NavOption[]>([]);


    addActiveWindow(activeWindow: string) {
        this.activeWindowService.addWindow(activeWindow);
    }

    // changeTopBar(topBar: string){
    //   this.topBarService.addTopBar(topBar);
    //
    // }
}
