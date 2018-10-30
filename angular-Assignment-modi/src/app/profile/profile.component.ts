import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Profile} from '../classes';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';
import {Location} from "@angular/common";
import { StorageService} from '../storage.service';
const URL = 'http://localhost:4000/Profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { join } from 'path';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[StorageService]
})
export class ProfileComponent implements OnInit {
  filesToUpload: File;
 flagGender:boolean=false;
flagCity:boolean=false;
IsSubmitted = false;
 localStorage: Storage;
 social=JSON.parse(localStorage.getItem('SocialSignIn'));

 imgUrl = "../../assets/img/user.png";
  countries=['Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Dadra and Nagar Haveli',
  'Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep',
  'Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan',
  'Sikkim','Tamil Nadu','Telengana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'];
  profile:Profile;
  profileForm = new FormGroup({
    email: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(),
    gender: new FormControl('')
  });

  @ViewChild('fileInput') fileInput: ElementRef;


   constructor(private http: HttpClient,private user:StorageService , private location: Location,private router:Router, private localStorageService: LocalStorageService, private fb:FormBuilder) {
    this.createForm();
   }  
  // public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  ngOnInit() {  
   /*  this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     }; */
   } 
  
   onFileChange(event :any) {
   var file:File = event.target.files[0];
    this.filesToUpload=file;
    var reader = new FileReader();
    if (event.target.files && event.target.files[0]) { 
      reader.readAsDataURL(event.target.files[0]);
      
      reader.onload = (event: any) => {
          this.imgUrl = event.target.result;         
                        } 
        }   
        
    }
    
    upload() {
      const formData: any = new FormData();
      formData.append("file",this.filesToUpload,this.filesToUpload.name);  
      if((JSON.parse(localStorage.getItem('email')))){ 
      formData.append("email",(JSON.parse(localStorage.getItem('email'))));
      formData.append("SocialSignIn",(JSON.parse(localStorage.getItem('SocialSignIn'))));
    }  
      this.http.post('http://localhost:4000/upload', formData,{
      headers:new HttpHeaders({      
      })
    }).subscribe()
    }
  createForm(){
    var f=(JSON.parse(localStorage.getItem('FirstName')))
    var l=(JSON.parse(localStorage.getItem('LastName')))
    var p=(JSON.parse(localStorage.getItem('phone')))
    var c=(JSON.parse(localStorage.getItem('city')))
    var g=(JSON.parse(localStorage.getItem('gender')))
    var e=(JSON.parse(localStorage.getItem('email')))
    var b=(JSON.parse(localStorage.getItem('bio')))
    if(( JSON.parse(localStorage.getItem('image'))=="")|| JSON.parse(localStorage.getItem('image'))==null){   
        this.imgUrl='../../assets/img/user.png'
        console.log((this.imgUrl))
    }else{
      this.imgUrl ='http://localhost:4000/'+(JSON.parse(localStorage.getItem('image')))
      console.log((this.imgUrl))
    }   
    this.profileForm=this.fb.group({
      fname:[f,([Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])],
      lname:[l,([Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])],
      phone:[p,([Validators.required,  Validators.pattern("^[0-9]{10}$")])],
      email:[e,([Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")])],
      bio: [b],
      recaptcha: ['',Validators.required],
      gender:[g,Validators.required],
      city:[c,Validators.required]
    });
  }

  onSubmit(){    
    var a =this.profileForm.value;
      }       
    
validate(){
this.IsSubmitted=true;
var flagButton:boolean;
if(this.profileForm.get('fname').invalid ||this.profileForm.get('lname').invalid ||this.profileForm.get('phone').invalid ||this.profileForm.get('city').invalid ||this.profileForm.get('email').invalid||this.profileForm.get('gender').invalid ||this.profileForm.get('recaptcha').invalid){
  flagButton=true;
}
else{

  var a =this.profileForm.value;
  flagButton=false;
  if(localStorage.getItem('token') != null && localStorage.getItem('email')!= null){  
    if(this.social==false)    {
    this.user.addProfile(a.fname,a.lname,a. phone,a.city, a.email,a.bio,a.gender,'')
  .subscribe((result) => {
    this.upload();  
    console.log(result);
  });   
 
}else{

  this.user.addSocialProfile(a.fname,a.lname,a. phone,a.city, a.email,a.bio,a.gender,'')
  .subscribe((result) => {
    this.upload();  
    console.log(result);
  });   
  
}alert('You have created profile');
  }
  
  else{
    alert("Please log in to save your changes");
  }
}
}

	
}
