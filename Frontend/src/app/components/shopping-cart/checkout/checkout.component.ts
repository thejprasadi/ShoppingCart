import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';
import { OrderItem } from 'src/app/models/order-item';
import { Guid } from 'guid-typescript';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() orderItem:OrderItem;
  cart: any = {};
  cartTotal = 0;
  Tax = 0;
  finalTotal = 0;

  cartArray:string;


  constructor(private messengerService: MessengerService,
    private cartService: CartService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartITems();
    let user=localStorage.getItem('message');
    console.log(user);
  }
  handleSubscription() {
    this.messengerService
      .getMsgAddProductToCart()
      .subscribe((product: Product) => {
        this.loadCartITems();
      });

    this.messengerService.getMsgRemoveProductFromCart().subscribe(() => {
      this.loadCartITems();
    });
  }
  loadCartITems() {
    this.cart = this.cartService.getCartItems();
    this.cartTotal = this.cartService.calculateCartTotal(this.cart);
    this.Tax = this.cartService.taxAmount;
    this.finalTotal = this.cartService.calculateCartFinalTotal();

  }

  checkout(){
    var body={
      cartitems:localStorage.getItem('cart'),
      total: this.finalTotal,
      userEmail:'aa@a',
      Address_Line1 : 'abc',
      Address_Line2:'qaz',
      State:'qwe',
      PostalCode:'wsx'
    };

    this.cartService.checkout(body).subscribe(
      (res:any)=>{

if(res.status==1){

this.toastr.success('Order Confirmed !','View your order history');
this.router.navigateByUrl('viewbill');

}
else {
  this.toastr.error("Order can't be placed",'Error occured while placing');
}
      },
      err=>{
        console.log(err);
      }
    );
  }
}
