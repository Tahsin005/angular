import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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
      name: 'aziz',
    },
  ]

  constructor(private router:Router) {}
  goToAbout() {
    this.router.navigate(['about'], {
      queryParams: {
        name: 'Ferdous'
      }
    })
  }
}
