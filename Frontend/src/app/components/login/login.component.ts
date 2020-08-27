import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel={
    Email:'',
    Password:''
  }
    constructor(private service:UserService,private router: Router,private toastr:ToastrService) { }
    userDetails;
    ngOnInit() {
      //avoid to go to the user/login page when user has already login
      // if(localStorage.getItem('message') !=null){
      //   this.router.navigateByUrl('checkout');
      //   // var token = (localStorage.getItem('message'));
      //   // var decoded = jwt_decode(token);
      //   // console.log(decoded);
      // }
    }
    onSubmit(form:NgForm){
      this.service.login(form.value).subscribe(

      (res:any)=>{
        if(res.status==1){
          localStorage.setItem('message',res.message);
          this.router.navigateByUrl('checkout');
         this.toastr.success('Login successful !');
          this.service.loginStatus.next(true);
          localStorage.setItem('loginStatus', '1');
          }
        else {
          this.toastr.error('Login failed');
         // this.router.navigateByUrl('/login');
        }
      },
      err=>{
        console.log(err);
      }

      );

    }

}
