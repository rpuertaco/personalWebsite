import {Routes} from "@angular/router";

const defaultSettingsChildren = [
    {
        path: "",
        outlet: "general",
        loadComponent: () => import("./core/components/settings/components/general/general.component").then((c) => c.GeneralComponent)
    },
    {
        path: "",
        outlet: "appearance",
        loadComponent: () => import("./core/components/settings/components/appareance/appareance.component").then((c) => c.AppareanceComponent)
    },
    {
        path: "",
        outlet: "wallpaper-menu",
        loadComponent: () => import("./core/components/settings/components/wallpaper-menu/wallpaper-menu.component").then((c) => c.WallpaperMenuComponent)
    },
    {
        path: "",
        outlet: "profile",
        loadComponent: () => import("./core/components/settings/components/profile/profile.component").then((c) => c.ProfileComponent)
    }
]
export const routes: Routes = [{
    path: "",
    loadComponent: () => import("./core/layout/layout.component").then(m => m.LayoutComponent),
    children: [
        {
            path: "",
            outlet: "about",
            loadComponent: () => import("./core/components/about/about.component").then((c) => c.AboutComponent)
        },
        {
            path: "",
            outlet: "settings",
            loadComponent: () => import("./core/components/settings/settings.component").then((c) => c.SettingsComponent),
            children: defaultSettingsChildren
        },
        {
            path: "settings/profile",
            loadComponent: () => import("./core/components/settings/settings.component").then((c) => c.SettingsComponent),
            data: {
                native: true,
                component: "profile"
            },
            children: defaultSettingsChildren

        },
        {
            path: "profile",
            redirectTo: "settings/profile"
        },
    ]
}

];
