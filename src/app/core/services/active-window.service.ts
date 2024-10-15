import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveWindowService {
  activeWindows$ = signal<string[]>([]);
  activeWindows = computed(() => this.activeWindows$);

  constructor() { }

  addWindow(activeWindow: string) {
    if(this.getActiveWindows().indexOf(activeWindow) === -1) {
      this.activeWindows$.update((values)=> { return [...values, activeWindow] });
    }
  }

  getActiveWindows() {
    return this.activeWindows()();
  }
}
