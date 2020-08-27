import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;

  constructor(
    private cartService: CartService,
    private messengerService: MessengerService
  ) {}

  ngOnInit(): void {}

  setItemQty(cartItem: CartItem) {
    this.updateItemQry(cartItem);
  }

  updateItemQry(cartItem: CartItem) {
    this.cartService.updateCartItemQty(cartItem);
    this.messengerService.sendMsgUpdateProductInCart();
  }

  handlerRemoveCartItem(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem);
    this.messengerService.sendMsgRemoveProductFromCart();
  }
}
