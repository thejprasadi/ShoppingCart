import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CheckoutComponent } from './components/shopping-cart/checkout/checkout.component';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './services/user.service';

import { ProductService } from './services/product.service';
import { TestComponent } from './components/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './components/shopping-cart/product-list/product-details/product-details.component';
import { CheckoutItemListComponent } from './components/shopping-cart/checkout/checkout-item-list/checkout-item-list.component';
import { ViewBillComponent } from './components/view-bill/view-bill.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CheckoutComponent,
    TestComponent,
    ProductDetailsComponent,
    CheckoutItemListComponent,
    ViewBillComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({progressBar:true}),
    BrowserAnimationsModule
  ],
  providers: [UserService,ProductService,AuthGuard],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule, CheckoutComponent]
})
export class AppModule { }
