import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor() {
    console.log('Product Service')
  }

  getProductData() {
    return [
      {
        name: 'mobile',
        brand: 'samsung',
      },
      {
        name: 'laptop',
        brand: 'dell',
      },
      {
        name: 'tv',
        brand: 'sony',
      },
    ]
  }
}
