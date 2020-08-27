import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { CheckoutComponent } from './components/shopping-cart/checkout/checkout.component'
import { AuthGuard } from './auth/auth.guard'
import { TestComponent } from './components/test/test.component'
import { ProductDetailsComponent } from './components/shopping-cart/product-list/product-details/product-details.component'
import { ViewBillComponent } from './components/view-bill/view-bill.component'
import { OrderHistoryComponent } from './components/order-history/order-history.component'

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  {path: 'checkout',component:CheckoutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShoppingCartComponent },
  // {path: 'checkout',component:CheckoutComponent,canActivate:[AuthGuard]},
  {path: 'productdetails',component:ProductDetailsComponent},
  { path: 'viewbill', component: ViewBillComponent },
  { path: 'orderhistory', component: OrderHistoryComponent },
  { path: 'test', component: TestComponent },

  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
