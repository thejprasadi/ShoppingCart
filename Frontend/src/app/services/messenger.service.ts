import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  // sendMsg(product) {
  //   this.subject.next(product) //Triggering an event
  // }

  // getMsg() {
  //   return this.subject.asObservable()
  // }
  sendMsgAddProductToCart() {
    this.subject.next();
  }

  getMsgAddProductToCart() {
    return this.subject.asObservable();
  }

  sendMsgUpdateProductInCart() {
    this.subject.next();
  }

  getMsgUpdateProductInCart() {
    return this.subject.asObservable();
  }

  sendMsgRemoveProductFromCart() {
    this.subject.next();
  }

  getMsgRemoveProductFromCart() {
    return this.subject.asObservable();
  }

  sendMsgAddToWishList() {
    this.subject.next();
  }

  getMsgAddToWishList() {
    return this.subject.asObservable();
  }

  sendMsgUserLogin() {
    this.subject.next();
  }

  getMsgUserLogin() {
    return this.subject.asObservable();
  }

  sendMsgUserLogout() {
    this.subject.next();
  }

  getMsgUserLogout() {
    return this.subject.asObservable();
  }
}
