import {Component} from "@angular/core";
import {StandardTopBarComponent} from "../top-bars/standard-top-bar/standard-top-bar.component";
import {RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";
import {ActiveWindowService} from "../../services/active-window.service";

@Component({
    selector: "app-settings",
    standalone: true,
    imports: [
        StandardTopBarComponent,
        RouterOutlet,
        NgClass,
    ],
    templateUrl: "./settings.component.html",
    styleUrl: "./settings.component.scss"
})
export class SettingsComponent {
    settingComponent = "general"

    constructor(private activeWindowService: ActiveWindowService) {
    }

    setComponent(componentName: string) {
        this.settingComponent = componentName;
    }

    closeWindow() {
        this.activeWindowService.removeWindow("settings");
    }

}
