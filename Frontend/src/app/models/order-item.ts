import { Guid } from 'guid-typescript';
import { CartItem } from './cart-item';

export class OrderItem {
  id: Guid;
  // productId: number;
  // productName: string;
  // qty: number;
  // unitPrice: number;
  cartItems:string;
  total:number;
  userEmail:string;
  Address_Line1:string;
  Address_Line2:string;
  State:string;
  PostalCode:string;



  constructor(cartItems,total=0,userEmail='',Address_Line1='abc',Address_Line2='def',State='ghi',PostalCode='jkl') {
    this.id = Guid.create();
    // this.productId = cartItem.productId;
    // this.productName = cartItem.productName;
    // this.qty = cartItem.qty;
    // this.unitPrice = cartItem.unitPrice;
    this.cartItems = cartItems;
    this.total = total;
    this.userEmail = userEmail;
    this.Address_Line1 = Address_Line1;
    this.Address_Line2 = Address_Line2;
    this.State = Address_Line2;
    this.PostalCode = PostalCode;
  }

}
