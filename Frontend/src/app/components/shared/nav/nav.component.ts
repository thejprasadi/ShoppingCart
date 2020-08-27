import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginStatus$:Observable<boolean>;
  UserName$:Observable<string>;
  username:String= JSON.stringify(this.UserName$);
  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
    this.loginStatus$ = this.service.isLoggedIn;
    this.UserName$ = this.service.currentName;

  }
  onLogout(){
    //remove the token from local storage
    localStorage.removeItem('message');

    this.service.logout();
    this.router.navigateByUrl('');//redirect to the home page when logged out
  }

}
