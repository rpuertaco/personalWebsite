import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopBarService {

  topBar$ = signal<string | null>(null);
  topBar = computed(()=> this.topBar$());

  constructor() {
  }


  addTopBar(topBar: string) {
    this.topBar$.set(topBar);
  }

  getTopBar() {
    return this.topBar();
  }
}
