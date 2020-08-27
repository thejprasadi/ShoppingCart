import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OperationResult } from 'src/app/models/operation-result';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  properties: [];
  wishlist: number[] = []
  products$:Observable<any>

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.loadProducts();
   // this.loadWishlist();
  }

  loadProducts() {
    // this.productService.getProducts().subscribe((products) => {
    //   this.productList = products;
    // })
    this.products$=this.productService.getProducts().pipe(map(m=>m['data']));
    this.productService
    .getProducts()
    .subscribe((result: OperationResult) => {
      this.productList= result.data;
    });
  }

  // loadWishlist() {
  //   this.wishlistService.getWishlist().subscribe(productIds => {
  //     this.wishlist = productIds
  //   })
  // }
}
