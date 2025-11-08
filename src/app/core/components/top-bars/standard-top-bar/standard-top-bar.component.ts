import {Component, output} from '@angular/core';
import {CdkDragHandle} from "@angular/cdk/drag-drop";

@Component({
    selector: "app-standard-top-bar",
    standalone: true,
    imports: [
        CdkDragHandle
    ],
    templateUrl: "./standard-top-bar.component.html",
    styleUrl: "./standard-top-bar.component.scss"
})
export class StandardTopBarComponent {
  readonly closeMe = output();

    close(): void {
        this.closeMe.emit();
    }
}
