import {ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick} from "@angular/core/testing";

import {LayoutComponent} from "./layout.component";
import {Wallpaper} from "../models/wallpaper.model";
import {WALLPAPERS} from "../constants/system.constant";

describe("LayoutComponent", () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LayoutComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should call change wallpaper function with date if auto wallpaper is true", () => {
        spyOn(component, "changeWallpaper");
        component.autoWallpaper = true;
        component.ngOnInit()
        const date = component.timeStamp.getDay();
        expect(component.changeWallpaper).toHaveBeenCalledWith(date);
    })

    it("should show current date", () => {
        component.automaticFunctionalities();
        expect(component.localDate).toEqual(component.timeSystem(new Date()));
    });

    it("Should execute automatic functionalities on setInterval after init", fakeAsync(() => {
        spyOn(component, "automaticFunctionalities");

        component.ngOnInit();

        tick(1000);
        expect(component.automaticFunctionalities).toHaveBeenCalledTimes(1);

        tick(1000);
        expect(component.automaticFunctionalities).toHaveBeenCalledTimes(2);

        tick(1000);
        expect(component.automaticFunctionalities).toHaveBeenCalledTimes(3);

        discardPeriodicTasks();
    }));

    it("should changeWallpaper function set the right wallpaper", () => {
        const wallpaperNumber = 1;
        const selectedWallpaper: Wallpaper = WALLPAPERS[wallpaperNumber];
        component.changeWallpaper(wallpaperNumber);
        expect(component.wallpaper).toEqual(selectedWallpaper.selectedWallpaper);
        expect(component.navText).toEqual(selectedWallpaper.textColor);
    });

});
