import {ComponentFixture, TestBed} from "@angular/core/testing";

import {NavDropdownComponent} from "./nav-dropdown.component";
import {ActiveWindowService} from "../../../../services/active-window.service";

describe("NavDropdownComponent", () => {
    let component: NavDropdownComponent;
    let fixture: ComponentFixture<NavDropdownComponent>;
    let windowServiceSpy: jasmine.SpyObj<ActiveWindowService>;

    beforeEach(async () => {
        const spy = jasmine.createSpyObj("ActiveWindowService", ["addWindow"]);
        await TestBed.configureTestingModule({
            imports: [NavDropdownComponent],
            providers: [
                {provide: ActiveWindowService, useValue: spy},
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NavDropdownComponent);
        component = fixture.componentInstance;
        windowServiceSpy = TestBed.inject(ActiveWindowService) as jasmine.SpyObj<ActiveWindowService>;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should addActiveWindow call activeWindowService", () => {
        component.addActiveWindow("settings")
        expect(windowServiceSpy.addWindow).toHaveBeenCalled();
    })
});
