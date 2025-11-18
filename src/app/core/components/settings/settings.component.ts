import {Component, inject, OnInit} from "@angular/core";
import {StandardTopBarComponent} from "../top-bars/standard-top-bar/standard-top-bar.component";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
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
export class SettingsComponent implements OnInit {
    settingComponent = "general"
    isNative: Boolean = false;
    private activeWindowService = inject(ActiveWindowService);
    private activatedRoute = inject(ActivatedRoute);
    private router = inject(Router);


    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.isNative = data["native"] ?? false;
            this.settingComponent = data["component"] ?? "general";
        });
    }


    setComponent(componentName: string) {
        this.settingComponent = componentName;
    }

    closeWindow() {
        if (this.isNative) {
            this.router.navigate(["/"]).then();
        } else {
            this.activeWindowService.removeWindow("settings");
        }
    }

}
