import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { WishlistService } from 'src/app/services/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  item: any = {};

  @Input() addedToWishlist: boolean;

  constructor(
    private messengerService: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private router: Router
  ) { }

  ngOnInit() {
  }
fetchData(){
    let data:any = this.productItem;
  this.router.navigate(['productdetails'],{
    queryParams:{data:JSON.stringify(data)}
  });
  }
  handlerAddToCart() {
    this.cartService.addProductToCart(this.productItem, this.item.qty);
    this.messengerService.sendMsgAddProductToCart();
  }

  // handleAddToWishlist() {
  //   this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
  //     this.addedToWishlist = true;
  //   })
  // }

  // handleRemoveFromWishlist() {
  //   this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
  //     this.addedToWishlist = false;
  //   })
  // }
}
