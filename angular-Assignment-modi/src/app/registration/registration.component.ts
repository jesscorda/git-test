import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { StorageService} from '../storage.service';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Registration} from '../classes';
import {Router} from '@angular/router';
import {AuthService,FacebookLoginProvider,GoogleLoginProvider} from 'angular-6-social-login';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[StorageService]
})
export class RegistrationComponent implements OnInit {
b:boolean=false;
  registration:Registration;
  regForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    cname: new FormControl(''),
    country: new FormControl('')
  });
  constructor(private user:StorageService, private router:Router ,private socialAuthService: AuthService ,private localStorageService: LocalStorageService, private fb:FormBuilder) {
    this.createForm();
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
        this.user.addSocialSignInUser(userData.name,userData.email,userData.id,userData.token )
        .subscribe( )
        this.router.navigate(['/Login']);    
      }
    );
  }
  ngOnInit() {
  }
  onSubmit(){
   /*  var a =this.regForm.value;
    this.localStorageService.set('namer',a.name);
    this.localStorageService.set('companynamer',a.cname);
    this.localStorageService.set('emailr',a.email);
    this.localStorageService.set('countryr',a.country);
    this.localStorageService.set('passwordr',a.password); */
  }
  validate(){
    var flagButton:boolean;

  if(this.regForm.get('fname').invalid||this.regForm.get('lname').invalid ||this.regForm.get('cname').invalid ||this.regForm.get('country').invalid ||this.regForm.get('email').invalid ||this.regForm.get('password').invalid){
    flagButton=true;
  }
  else{
    flagButton=false;
    var a =this.regForm.value;
    /* this.localStorageService.set('namer',a.name);
    this.localStorageService.set('companynamer',a.cname);
    this.localStorageService.set('emailr',a.email);
    this.localStorageService.set('countryr',a.country);
    this.localStorageService.set('passwordr',a.password); */
    this.user.setOption(a.email);
    this.user.addUser(a.fname,a.lname,a.cname,a.country, a.email, a.password )
    .subscribe((result) => {
      console.log(typeof(result.success));
      if(typeof(result.success)=='boolean' && result.success==false){
        console.log("Should come here if email exists");
        this.b=true;
      }
      else{
        this.b=false;
        console.log("Should come here if email doesnt exist");        
        this.router.navigate(['/RegSuccess']);  
      }
    });        
  }
}
  createForm(){
    
    this.regForm=this.fb.group({
      email:[,([Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")])],
      password:[, [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?!.* )(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      fname:[,([Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])],
      lname:[,([Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])],
      cname:[,([Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])],
      country:[,([Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])]
    });
}
}
