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

  removeWindow(activeWindow: string) {
    this.activeWindows$.update((values)=> {
      values.splice(values.indexOf(activeWindow), 1)
      return values
    });
  }

  getActiveWindows() {
    return this.activeWindows()();
  }
}
