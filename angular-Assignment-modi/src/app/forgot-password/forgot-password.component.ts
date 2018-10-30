import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl
} from '@angular/forms';
import { ForgotPassword} from '../classes';
import { StorageService} from '../storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  forgotPass:ForgotPassword;
  b:boolean=false;
  fpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private user:StorageService,private router:Router, private localStorageService: LocalStorageService,private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  onSubmit(){
    var a =this.fpForm.value;
      this.localStorageService.set('emailfp',a.email);      
      console.log(this.localStorageService.get('emailfp'));
  }
  validate(){
      var flagButton:boolean;

    if(this.fpForm.get('email').invalid){
      flagButton=true;
    }
    else{
      flagButton=false;
      var a =this.fpForm.value;
      this.user.checkUserEmail(a.email)
   .subscribe((result) => {
    console.log(typeof(result.success));
      if(typeof (result.success )== "boolean" && result.success == false){
       console.log("Should come here if false");
       this.b=true;
       var message="User Credentials don't match ";
       this.router.navigate(['/ForgotPassword']);
        return;
      }
      else{
        this.b=false;
        this.localStorageService.set('emailfp',a.email); 
        console.log("Should come here if true");
        this.user.fpEmail(this.fpForm.value.email);
        alert('Password reset link has been sent to your registered email');
        this.router.navigate(['/ForgotPassword']);
      }
    },
    (errors) => {
      console.log(errors);
    }
   );
               
    }
      
    }
    createForm(){
      this.fpForm=this.fb.group({
        email:['',([Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,4}")])],
        
      });
}
}

