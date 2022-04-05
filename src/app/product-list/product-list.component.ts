import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  ViewCart() {
    window.alert('Moved to cart!');
  }
  AddCart() {
    window.alert('Added to cart successfully!');
  }

  buy() {
    window.alert('Purchased successfull!');
  }
  price() {
    window.alert('Select the best price!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
