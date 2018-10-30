import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService} from '../storage.service';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-reg-success',
  templateUrl: './reg-success.component.html',
  styleUrls: ['./reg-success.component.css'],
  providers:[StorageService]
})
export class RegSuccessComponent implements OnInit {
show:boolean=false;
b:boolean=false;
regSuccess = new FormGroup({
  otp: new FormControl('')
});
  constructor(private fb:FormBuilder, private user:StorageService, private router:Router) { }

  ngOnInit() {
  }
  password() {
    this.show = !this.show;
}

createForm(){
  this.regSuccess=this.fb.group({
    otp:[,([Validators.required])]   
})
}
validate(){
  var flagButton:boolean;

  if(this.regSuccess.get('otp').invalid){
    flagButton=true;    
  }
  else{
    flagButton=false;
    this.user.verifyOTP(this.regSuccess.value.otp)
    .subscribe((result) => {
        console.log(result.success);
        if(typeof (result.success)== "boolean" && result.success == false){
         console.log("Should come here if false");
         this.b=true;
         return;
        }
        else{
          console.log("Should come here if true");
          alert('Your response has been verified. You can proceed to login')
          this.router.navigate(['/Login']); 
            }
      },
      (errors) => {
        this.b=true;
      }
     );
    
  }
}

}
