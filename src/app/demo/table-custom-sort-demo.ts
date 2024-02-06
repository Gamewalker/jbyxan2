import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'table-custom-sort-demo',
  templateUrl: 'table-custom-sort-demo.html',
})
export class TableCustomSortDemo implements OnInit {
  products!: Product[];
  lazy = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }

  customSort(event: SortEvent) {
    console.warn('fired');
  }

  toggleLazy() {
    this.lazy = !this.lazy;
  }
}
