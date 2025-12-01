import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signalss',
  imports: [],
  templateUrl: './signalss.html',
  styleUrl: './signalss.css',
})
export class Signalss {
  count = signal(0);

  data = signal<number | string>(10);

  value: WritableSignal<string | number> = signal('Tahsin');

  cnt:Signal<number> = computed(this.count); // computed signal: cannot be updated.  It will only update when the value / signal it is computed from updates.

  updateSignal() {
    this.data.set('Tahsin');
    this.value.set('Tahsin');
    // this.cnt.set(10)
    this.count.set(this.count() + 1);
  }

  constructor() {
    effect(() => {
      console.log('Count: ', this.count());
    });
  }
}
