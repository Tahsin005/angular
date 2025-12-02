import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data');

  userName:string = "ferdous";

  onItemChange(item:string) {
    this.userName = item
  }

  users = [
    {
      id: 1,
      name: 'tahsin',
    },
    {
      id: 2,
      name: 'ferdous',
    },
    {
      id: 3,
      name: 'rean',
    },
    {
      id: 4,
      name: 'aziz',
    },
  ]

  handleUsers(users:string[]) {
    console.log(users);
  }
}
