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
    styleUrl: "./settings.component.scss",
    host: {
        "(window:resize)": "onWindowResize($event)"
    }
})
export class SettingsComponent implements OnInit {
    settingComponent = "general"
    isNative: Boolean = false;
    isDesktop: boolean = false;
    width: number = window.innerWidth;
    mobileWidth: number = 760;
    private activeWindowService = inject(ActiveWindowService);
    private activatedRoute = inject(ActivatedRoute);
    private router = inject(Router);


    ngOnInit() {
        this.isDesktop = this.width > this.mobileWidth;
        this.activatedRoute.data.subscribe(data => {
            this.isNative = data["native"] ?? false;
            this.settingComponent = data["component"] ?? "general";
        });
    }

// IMPORTANT estamos intentando hacer los elementos funcionar como active windows cuando se seleccionan,
// el truco esta en el router, fijate en como se ejecuta el about.component.ts. El profile se ha conseguido
// pero sin la ventana. YO DEL FUTURO NO ME BORRES ESTO PORFA
    setComponent(componentName: string) {
        if (this.isDesktop) {
            this.settingComponent = componentName;
        } else {
            console.log("Adding window:", componentName);
            this.settingComponent = componentName;
            this.activeWindowService.addWindow(componentName)
        }
    }

    closeWindow() {
        if (this.isNative) {
            this.router.navigate(["/"]).then();
        } else {
            this.activeWindowService.removeWindow("settings");
        }
    }

    onWindowResize(event: { target: { innerWidth: number; }; }) {
        this.width = event.target.innerWidth;
        this.isDesktop = this.width > this.mobileWidth;
    }

}
