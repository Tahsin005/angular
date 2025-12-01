import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Conditionals } from './conditionals/conditionals';
import { Loops } from './loops/loops';
import { Signalss } from './signalss/signalss';
import { Forloopcontextualvariable } from './forloopcontextualvariable/forloopcontextualvariable';
import { Twowaybinding } from './twowaybinding/twowaybinding';
import { Todolist } from './todolist/todolist';
import { Dynamicstyling } from './dynamicstyling/dynamicstyling';
import { Directives } from './directives/directives';
import { AngRouting } from './ang-routing/ang-routing';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Login, Profile, Conditionals, Loops, Signalss, Forloopcontextualvariable, Twowaybinding, Todolist, Dynamicstyling, Directives, AngRouting],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
  name:string = "tahsin";
  data:string|number = "tahsin";
  value:number = 0;

  handleClick() {
    console.log('You clicked the button!');
    this.otherFunction();
    this.data = 24;
    this.sum(1, 2);
  }

  otherFunction() {
    console.log('other function');
  }

  sum(a:number, b:number) {
    console.log(a + b);
  }

  increment() {
    this.value++;
  }

  decrement() {
    if (this.value === 0) return;
    this.value--;
  }

  reset() {
    this.value = 0;
  }
}
