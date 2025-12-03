import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './services/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products:{name:string,brand:string}[]|undefined;
  constructor(private productService:Product) {
    
  }

  loadProductData() {
    this.products = this.productService.getProductData();
    console.log(this.products);
  }
}
