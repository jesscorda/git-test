import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Login} from '../classes';
import {AuthService,FacebookLoginProvider,GoogleLoginProvider} from 'angular-6-social-login';
import { HostListener } from '@angular/core';
import { StorageService} from '../storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [StorageService]
})
export class LoginComponent implements OnInit {

  social:boolean=false;
  c:boolean=false;
  b:boolean=false;
  d:boolean=false;
  show: boolean=false;
  message:string;
  isVerified:boolean;
  login:Login;
  localStorage:Storage;
   loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private user:StorageService , private router:Router, private socialAuthService: AuthService ,private localStorageService: LocalStorageService, private fb:FormBuilder) {
    this.createForm();
    localStorage.setItem('SocialSignIn',JSON.stringify(this.social))  
   }
   
   public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);    
        this.user.SocialLogIn(userData.email,userData.token)
        .subscribe((result) => {
          if(localStorage.getItem('token') != null && localStorage.getItem('email')!= null && result.success!=false){ 
            this.social=true; 
            localStorage.setItem('SocialSignIn',JSON.stringify(this.social))    
            this.router.navigate(['/Profile']);
          }else{
            this.d=true;
            this.router.navigate(['/Login']);
          }
        })
        
      }
    );
  }

  ngOnInit() {
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
   
  }
  
  onSubmit(){
    
    var a =this.loginForm.value;   
   
/*     this.localStorageService.set('emaill',a.email);
    this.localStorageService.set('passwordl',a.password);
    console.log(this.localStorageService.get('passwordl')); */
  }
  password() {
    this.show = !this.show;
}
  validate(){
    var a =this.loginForm.value;
    var flagButton:boolean
    if(this.loginForm.get('email').invalid||this.loginForm.get('password').invalid){
      flagButton=true;
    }
    else{
      this.social=false; 
      localStorage.setItem('SocialSignIn',JSON.stringify(this.social))
      flagButton=false;
   var a =this.loginForm.value;     
   this.user.checkUser(a.email,a.password,JSON.parse(localStorage.getItem('SocialSignIn')))
   .subscribe((result) => {
     
    console.log((result.success));
      if(result.success == false ){
        if(result.isVerified==true){
          this.social=false; 
       console.log("Should come here if false");
       this.b=true;
       this.router.navigate(['/Login']);
        return;
      }      
      else if(result.isVerified==false){
        this.social=false; 
        this.b=false;
        this.c=true;
        console.log("Should come here if otp not verified");
        this.router.navigate(['/Login']);
      }else{
        this.social=false; 
      console.log("Should come here if false");
       this.b=true;
       this.c=false;
       this.router.navigate(['/Login']);
        return;
      }
    }
      else{
        console.log("Should come here if true");
        this.social=false; 
      this.router.navigate(['/Profile']);
      } 
    },
    (errors) => {
      console.log(errors)
      this.b=true;
    });
  }      
    
  }
createForm(){
 
  this.loginForm=this.fb.group({
    email:['',([Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")])],
    password:['', [Validators.required]]
  });
}
  
}
