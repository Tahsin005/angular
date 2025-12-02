import { afterEveryRender, afterNextRender, Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('user') User:any;
  counter = 0;

  constructor() {
    afterEveryRender(() => {
      console.log('afterEveryRender', this.User.counter);
    })
    
    afterNextRender(() => {
      console.log('afterNextRender', this.User.counter);
    })
  }

  updateCounter() {
    this.counter++;
  }
}
