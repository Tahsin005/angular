import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/Post';

@Injectable({
  providedIn: 'root',
})
export class Products {
  constructor(private http:HttpClient) {}

  // getProductList() {
  //   const url = "https://dummyjson.com/products";
  //   return this.http.get(url);
  // }

  getPosts():Observable<Post[]> {
    const url = "http://localhost:3000/posts";
    return this.http.get<Post[]>(url);
  }

  addPost(post: Post):Observable<Post> {
    const url = "http://localhost:3000/posts";
    return this.http.post<Post>(url, post);
  }

  deletePost(id: number):Observable<Post>{
    const url = `http://localhost:3000/posts/${id}`;
    return this.http.delete<Post>(url);
  }

  getPostById(id: number):Observable<Post>{
    const url = `http://localhost:3000/posts/${id}`;
    return this.http.get<Post>(url);
  }
}
