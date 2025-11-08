import {ComponentFixture, TestBed} from "@angular/core/testing";

import {SettingsComponent} from "./settings.component";
import {ActiveWindowService} from "../../services/active-window.service";

describe("SettingsComponent", () => {
    let component: SettingsComponent;
    let fixture: ComponentFixture<SettingsComponent>;
    let windowServiceSpy: jasmine.SpyObj<ActiveWindowService>;

    beforeEach(async () => {
        const spy = jasmine.createSpyObj("ActiveWindowService", ["addWindow", "removeWindow"]);
        await TestBed.configureTestingModule({
            imports: [SettingsComponent],
            providers: [
                {provide: ActiveWindowService, useValue: spy},
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SettingsComponent);
        component = fixture.componentInstance;
        windowServiceSpy = TestBed.inject(ActiveWindowService) as jasmine.SpyObj<ActiveWindowService>;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should match componentName", () => {
        component.setComponent("general")
        expect(component.settingComponent).toEqual("general");
    })

    it("should removeWindow call activeWindowService.removeWindow with the value \"settings\"", () => {
        component.closeWindow();
        expect(windowServiceSpy.removeWindow).toHaveBeenCalledWith("settings");
    });
});
