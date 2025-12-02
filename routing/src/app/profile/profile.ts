import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  age: number|null = null
  constructor(private route:ActivatedRoute) {}
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.age = data['age'];
    });
  }
}
