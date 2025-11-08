import {Component, output} from '@angular/core';

@Component({
    selector: "app-basic-top-bar",
    standalone: true,
    imports: [],
    templateUrl: "./basic-top-bar.component.html",
    styleUrl: "./basic-top-bar.component.scss"
})
export class BasicTopBarComponent {
  readonly closeMe = output();

    close(): void {
        this.closeMe.emit();
    }
}
