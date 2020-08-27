import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:UserService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.register().subscribe(
      (res:any)=>{

if(res.status==0){
this.service.formModel.reset();
this.toastr.success('New user added !','Registration successful');
this.router.navigateByUrl('login');
}
else {
  this.toastr.error("user already exists!",'Registration failed');
}
      },
      err=>{
        console.log(err);
      }
    );
  }
}
