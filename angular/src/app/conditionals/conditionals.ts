import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionals',
  imports: [],
  templateUrl: './conditionals.html',
  styleUrl: './conditionals.css',
})
export class Conditionals {
  display:boolean = true;

  toggle() {
    this.display = !this.display;
  }
}
