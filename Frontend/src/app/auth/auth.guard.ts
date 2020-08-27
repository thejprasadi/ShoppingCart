import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router:Router,private service:UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  any  {
      // if (!this.service.isLoggedIn) {
      //   // redirect to some view explaining what happened
      //   this.router.navigateByUrl('/login');
      //   return false;
      //   } else {
      //     return true;
      //   }
      // if(localStorage.getItem('message') !=null){
      // this.router.navigate(['/checkout']);
      //   return true;
      // }
      // else{
      //   this.router.navigate(['/login']);
      //   return false;
      // }
      // return this.service.isLoggedIn.pipe(
      //   map((loginStatus:boolean)=>
      //   if(!loginStatus)
      //   {
      //     this.router.navigate(['login'],{queryParams: {returnUrl : state.url}});
      //   }


      //   )


      // );
      return this.service.isLoggedIn.pipe(map((loginStatus : boolean) =>
      {
            //const destination: string  = state.url;
            //const productId = route.params.id;


          // To check if user is not logged in
          if( (loginStatus.valueOf()) )
          {
            this.router.navigateByUrl('checkout');

              return true;
          }
          else{
            this.router.navigateByUrl('login');

              return false;
          }



  }));

}
}
