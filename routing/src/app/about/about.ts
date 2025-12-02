import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  username: string|null = "";

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    // this.username = this.route.snapshot.paramMap.get('name')
    // console.log(this.username)

    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.username = params['name'];
    })
  }
}
