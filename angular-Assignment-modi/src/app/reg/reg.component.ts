import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService} from '../storage.service';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  providers:[StorageService]
})
export class RegComponent implements OnInit {
  show:boolean=false;
  b:boolean=false;
  passwordReset = new FormGroup({
    password: new FormControl(''),
    confirmPass:new FormControl('')
  });
  constructor(private fb:FormBuilder, private user:StorageService, private router:Router) { }

  ngOnInit() {
  }
  password() {
    this.show = !this.show;
}

createForm(){
  this.passwordReset=this.fb.group({
    password:[,([Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")])] ,
    confirmPass:[,([Validators.required])]
})
}
onSubmit(){}
validate(){
  var flagButton:boolean;

  if(this.passwordReset.get('password').invalid || this.passwordReset.get('confirmPass').invalid ){
    flagButton=true;    
  }
  else if(this.passwordReset.value.password != this.passwordReset.value.confirmPass){
    this.b=true;
    flagButton=true;  
  }
  else{
    this.b=false;
    flagButton=false;
    this.user.verifyPass(this.passwordReset.value.password)
    .subscribe((result) => {
        console.log(result.success);
           
          console.log("Should come here if true");
          alert('Your password has been reset. You can proceed to login')
          this.router.navigate(['/Login']); 
            
      },
      (errors) => {
        console.log(errors);
      }
     );
    
  }
}
}
