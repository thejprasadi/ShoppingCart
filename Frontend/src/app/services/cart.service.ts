import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from '../models/cart-item';
//import { cartUrl } from '../config/api';
import { Product } from '../models/product';
import { OrderItem } from '../models/order-item';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  locatCartItems: CartItem[] = [];
  cartTotal = 0;
  tax = 0.01;
  taxAmount = 0;
  finalTotal =0;
  cart:string;
  constructor(private http:HttpClient) {}



  getCartItems() {
    this.getLocalCart();
    return this.locatCartItems;
  }

  addProductToCart(product: Product, qty: number) {
    this.getLocalCart();
    this.createCart(product, qty);
  }

  updateCartItemQty(cartItem: CartItem) {
    this.getLocalCart();
    this.updateCart(cartItem);
  }

  createCart(product: Product, qty: number) {
    let productExist = false;

    for (let i in this.locatCartItems) {
      if (this.locatCartItems[i].productId === product.id) {
        this.locatCartItems[i].qty = this.locatCartItems[i].qty + qty;
        productExist = true;
        break;
      }
    }

    if (!productExist) {
      this.locatCartItems.push(new CartItem(product, qty));
    }
    this.setLocalCart();
  }

  updateCart(cartItem: CartItem) {
    for (let i in this.locatCartItems) {
      if (this.locatCartItems[i].productId === cartItem.productId) {
        this.locatCartItems[i].qty = cartItem.qty;
        break;
      }
    }

    this.setLocalCart();
  }

  checkProductIsExist() {}

  getLocalCart() {
    let cart = localStorage.getItem('cart');
    if (cart) {
      this.locatCartItems = JSON.parse(cart);
    }
  }

  setLocalCart() {
    localStorage.setItem('cart', JSON.stringify(this.locatCartItems));
  }

  removeCartItem(cartItem: CartItem) {
    this.getLocalCart();

    if (this.locatCartItems) {
      this.locatCartItems = this.locatCartItems.filter(
        ({ productId }) => productId !== cartItem.productId
      );

      this.setLocalCart();
    }
  }

  calculateCartTotal(cartItems: CartItem[]) {
    this.cartTotal = 0;
    cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.unitPrice;
    });
    return this.cartTotal;
  }
  calculateCartFinalTotal(){
    this.taxAmount =this.tax * this.cartTotal;
    this.finalTotal = this.cartTotal + this.taxAmount;
    return this.finalTotal;
  }
  checkout(body){

//     var body={
//     "cartItems": "abc",
//     "total": 10000,
//     "userEmail": "aa@g",
//     "Address_Line1": "abc",
//     "Address_Line2": "abc",
//     "State": "abc",
//     "PostalCode": "abc"
//  };
    console.log("success");
     console.log(body);
     localStorage.removeItem('cart');
     this.emptyCart();
    return this.http.post<any>('http://localhost:56815/api/order/Order', body );

  }
  emptyCart(){
    this.locatCartItems =[];
  }
  }

