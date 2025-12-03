import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './services/products';
import { Post } from './interfaces/Post';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('apis');

  productList = signal<any[]>([]);
  posts = signal<Post[]>([]);

  constructor(private products: Products) {
  }

  // ngOnInit() {
  //   this.products.getProductList().subscribe((data: any) => {
  //     console.log(data?.products);
  //     this.productList.set(data?.products || []);
  //   });
  // }

  // form group
  addPostForm = new FormGroup({
    id: new FormControl(0, { nonNullable: true }),
    title: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    views: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)] })
  })

  ngOnInit() {
    this.products.getPosts().subscribe((data: Post[]) => {
      console.log(data);
      this.posts.set(data);
      // console.log(this.posts);
    })
  }

  onSubmit() {
    console.log(this.addPostForm.getRawValue());
    this.products.addPost(this.addPostForm.getRawValue()).subscribe((data:Post) => {
      if (data) {
        this.products.getPosts().subscribe((dataa: Post[]) => {
          this.posts.set(dataa);
        })
      }
    });
  }

  deletePostOnSubmit(id: number) {
    this.products.deletePost(id).subscribe((data:Post) => {
      if (data) {
        this.products.getPosts().subscribe((dataa: Post[]) => {
          this.posts.set(dataa);
        })
      }
    })
    console.log(id);
  }

  selectPost(id: number, payload: Post) {
    this.products.getPostById(id).subscribe((data:Post) => {
      console.log(data);
      if (data) {
        this.addPostForm.setValue({
          id: data.id,
          title: data.title,
          views: data.views
        })
      }
    })
  }
}
