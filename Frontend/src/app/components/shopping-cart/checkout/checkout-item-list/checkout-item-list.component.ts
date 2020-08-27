import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-checkout-item-list',
  templateUrl: './checkout-item-list.component.html',
  styleUrls: ['./checkout-item-list.component.css']
})
export class CheckoutItemListComponent implements OnInit {
  cart: any = {};
  cartTotal = 0;
  Tax = 0;
  subTotal = 0;

  constructor(
    private cartService: CartService,
    private messengerService: MessengerService
  ) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartITems();
  }

  handleSubscription() {
    this.messengerService.getMsgRemoveProductFromCart().subscribe(() => {
      this.loadCartITems();
    });
  }

  loadCartITems() {
    this.cart = this.cartService.getCartItems();
    this.cartTotal = this.cartService.calculateCartTotal(this.cart);
  }

  handlerRemoveCartItem(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem);
    this.messengerService.sendMsgRemoveProductFromCart();
  }

  setItemQty(cartItem: CartItem) {
    this.updateItemQry(cartItem);
  }

  updateItemQry(cartItem: CartItem) {
    this.cartService.updateCartItemQty(cartItem);
    this.messengerService.sendMsgUpdateProductInCart();
  }
}
