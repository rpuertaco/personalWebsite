import {ComponentFixture, TestBed} from "@angular/core/testing";

import {AboutComponent} from "./about.component";
import {ActiveWindowService} from "../../services/active-window.service";

describe("AboutComponent", () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;
    let windowServiceSpy: jasmine.SpyObj<ActiveWindowService>;

    beforeEach(async () => {
        const spy = jasmine.createSpyObj("ActiveWindowService", ["addWindow", "removeWindow"]);
        await TestBed.configureTestingModule({
            imports: [AboutComponent],
            providers: [
                {provide: ActiveWindowService, useValue: spy},
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        windowServiceSpy = TestBed.inject(ActiveWindowService) as jasmine.SpyObj<ActiveWindowService>;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should year be current year", () => {
        const currentYear = new Date().getFullYear();
        expect(component.year).toBe(currentYear);
    });

    it("should goToSetting() call activeWindowService.addWindow with value \"settings\"", () => {
        component.goToSettings();
        expect(windowServiceSpy.addWindow).toHaveBeenCalledWith("settings");
    });

    it("should removeWindow call activeWindowService.removeWindow with the value \"about\"", () => {
        component.close();
        expect(windowServiceSpy.removeWindow).toHaveBeenCalledWith("about");
    });

});
