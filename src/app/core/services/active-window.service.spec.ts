import {TestBed} from "@angular/core/testing";

import {ActiveWindowService} from "./active-window.service";

describe("ActiveWindowService", () => {
    let service: ActiveWindowService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ActiveWindowService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should add only one time and not allow to have multiple", () => {
        service.addWindow("settings");
        expect(service.getActiveWindows()).toContain("settings");

        service.addWindow("settings");
        expect(service.getActiveWindows().filter(window => window === "settings").length).toBe(1);
    });

    it("should remove existing active window when removing window activeWindows$", () => {
        service.addWindow("about");
        expect(service.getActiveWindows()).toContain("about");

        service.removeWindow("about");
        expect(service.getActiveWindows()).not.toContain("about");
    });

});
