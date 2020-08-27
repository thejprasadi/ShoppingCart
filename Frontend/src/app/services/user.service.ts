import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  private UserName = new BehaviorSubject<string>(localStorage.getItem('firstname'.toString()));


    constructor(private fb:FormBuilder,private http:HttpClient,private router: Router) { }
  readonly BaseURI = 'http://localhost:56815/api';

    formModel = this.fb.group({

      FullName:['',Validators.required],
      Email:['',Validators.email],
      ContatctNo:[''],
      Address_Line1:['',Validators.required],
      Address_Line2:['',Validators.required],
      State:['',Validators.required],
      PostalCode:['',Validators.required],

      Passwords:this.fb.group({
      Password:['',[Validators.required,Validators.minLength(4)]],
      ConfirmPassword:['',Validators.required]
      },{validator:this.comparePasswords})
    });
    comparePasswords(fb:FormGroup){
      let confirmPswrdCtrl = fb.get('ConfirmPassword');
      if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
        if (fb.get('Password').value != confirmPswrdCtrl.value)
          confirmPswrdCtrl.setErrors({ passwordMismatch: true });
        else
          confirmPswrdCtrl.setErrors(null);
    }
  }
  register(){
    var body = {

      FullName:this.formModel.value.FirstName,
      Email:this.formModel.value.Email,
      ContatctNo:this.formModel.value.ContatctNo,
      Address_Line1:this.formModel.value.Address_Line1,
      Address_Line2:this.formModel.value.Address_Line2,
      State:this.formModel.value.State,
      PostalCode:this.formModel.value.PostalCode,
      Password:this.formModel.value.Passwords.Password,

    };

    return this.http.post(this.BaseURI+'/user/Register',body);
  }
  login(formData){

    return this.http.post(this.BaseURI+'/user/Login',formData);
  }
  logout(){
  //use to remove logout button from nav-bar
    this.loginStatus.next(false);
    localStorage.setItem('loginStatus', '0');
    console.log('Logged out successfully');

  }
  get isLoggedIn(){

    return this.loginStatus.asObservable();
  }
  get currentName(){
    return this.UserName.asObservable();
  }
  checkLoginStatus():boolean{
    var loginCookie = localStorage.getItem("loginStatus");

        if(loginCookie == "1")
        {
            if(localStorage.getItem('message') === null || localStorage.getItem('message') === undefined)
            {
              return false;
            }

             // Get and Decode the Token
             const token = localStorage.getItem('message');
             const decoded = jwt_decode(token);
             console.log(decoded);
            // Check if the cookie is valid

            if(decoded.exp === undefined)
            {
              return false;
            }

            // Get Current Date Time
            const date = new Date(0);

             // Convert EXp Time to UTC
            let tokenExpDate = date.setUTCSeconds(decoded.exp);
            console.log("NEW DATE " + new Date().valueOf());
            console.log("Token DATE " + tokenExpDate.valueOf());

            // If Value of Token time greter than

            if(tokenExpDate.valueOf() > new Date().valueOf())
            {
              return true;
            }
            else{
              localStorage.setItem('loginStatus', '0');
              this.router.navigateByUrl('/login');


              return false;
            }



            return false;
        }
        return false;
  }
}
