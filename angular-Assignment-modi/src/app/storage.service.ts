import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor(private http: HttpClient) { }
 static email;  
 static fpemail;
  
  setOption(value) {      
     StorageService.email = value;  
     console.log(StorageService.email);
     return;
   } 
  
   fpEmail(value) {      
    StorageService.fpemail = value;  
    console.log(StorageService.fpemail);
    return;
  } 

  addUser(fname,lname, cname, country, email, password){
    const user= {
      fname:fname,
      lname:lname,
      cname:cname,
      country:country,
      email:email,
      password: password
    };
    console.log( user);
    return this.http.post('http://localhost:4000/Registration', user,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).map((response : any) => {
      if(response){
        console.log(response);
        return response;
      } else {
        Observable.throw(response);
      }
    },(error : any) => {
      console.log(error);
      throw new Error("Error occured while fetching details");
      
    });      
  }
  verifyOTP(otp){
     const user= {
      otp:otp ,
      email:StorageService.email
    };    
    console.log( user);
    return this.http.post('http://localhost:4000/RegSuccess', user,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).map((response : any) => {
      if(response){
        console.log(response);
        return response;
      } else {
        Observable.throw(response);
      }
    },(error : any) => {
      console.log(error);
      throw new Error("Error occured while fetching details");
      
    });    
  
  }
  addProfile(fname,lname, phone, city, email, bio, gender,file){
    const user= {
      fname:fname,
      lname:lname,
      phone:phone,
      city:city,
      email: email,
      bio: bio,
      file:file,
      gender:gender,
      token:JSON.parse(localStorage.getItem('token')),
      loginEmail:JSON.parse(localStorage.getItem('email'))
    };
    console.log( user);
    return this.http.post('http://localhost:4000/Profile', user,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).map((response : any) => {
      if(response){
        console.log(response);

      } else {
        Observable.throw(response);
      }
    },(error : any) => {
      console.log(error);
      throw new Error("Error occured while fetching details");
      
    });      
    
  }
  saveLoggedInUser(email, token, fname, lname ){
 if (email!= undefined && token!= undefined){
 console.log('here')
    localStorage.setItem("email",JSON.stringify(email));
    localStorage.setItem("token",JSON.stringify(token));
    localStorage.setItem("FirstName",JSON.stringify(fname));
    localStorage.setItem("LastName",JSON.stringify(lname));
  }
}
  checkUser(email, password,SocialSignIn){
    const user= {
      email: email,
      password:password,
      SocialSignIn:SocialSignIn
    };
   console.log(user);
    return this.http.post('http://localhost:4000/Login', user,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .map((response : any) => {
      if(response){
        console.log(response.fname);
        this.saveLoggedInUser(response.email, response.jwttoken,response.fname,response.lname);
        if(response.phone != undefined){
          console.log('here')
        localStorage.setItem("FirstName",JSON.stringify(response.fname));
        localStorage.setItem("LastName",JSON.stringify(response.lname));
        localStorage.setItem("phone",JSON.stringify(response.phone));
        localStorage.setItem("city",JSON.stringify(response.city));
        localStorage.setItem("email",JSON.stringify(response.email));
        localStorage.setItem("bio",JSON.stringify(response.bio));
        localStorage.setItem("gender",JSON.stringify(response.gender));
        localStorage.setItem("image",JSON.stringify(response.file));
        }
        if(response.phone==undefined){
          console.log("came here")
     
          localStorage.removeItem("phone")
          localStorage.removeItem("city")
          localStorage.removeItem("bio")
          localStorage.removeItem("gender")
          localStorage.removeItem('image')
        }
        return response;
      } else {
        Observable.throw(response);
      }
    },(error : any) => {
      console.log(error);
      throw new Error("Error occured while fetching details");
      
    });   
  }
 
  checkUserEmail(email){
    const user= {
      email: email
    };
   console.log(user);
    return this.http.post('http://localhost:4000/ForgotPassword', user,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .map((response : any) => {
      if(response){
        console.log(response.success);
        //this.saveLoggedInUser(response.body);
        return response;
      } else {
        Observable.throw(response);
      }
    },(error : any) => {
      console.log(error);
      throw new Error("Error occured while fetching details");      
    });   
  }
  verifyPass(password){
   const user={
    password:password,
    email:JSON.parse(localStorage.getItem('first-app.emailfp'))
    }
    console.log(user);
    return this.http.post('http://localhost:4000/Reg', user,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .map((response : any) => {
      if(response){
        console.log("This is response of fp");
       return response;
      } else {
        Observable.throw(response);
      }
    },(error : any) => {
      console.log(error);
      throw new Error("Error occured while fetching details");      
    });

  }
addSocialSignInUser(name,email,id,token){
  const user={
    name:name,    
    email:email,
    id:id,
    token:token
    }
    console.log(user);
    return this.http.post('http://localhost:4000/SocialSignIn', user,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .map((response : any) => {
      if(response){
        console.log("This is response of social sign in");
       return response;
      } else {
        Observable.throw(response);
      }
    },(error : any) => {
      console.log(error);
      throw new Error("Error occured while fetching details");      
    });
}

SocialLogIn(email,token){
  const user={      
    email:email,    
    token:token
    }
    console.log(user);
    return this.http.post('http://localhost:4000/SocialLogIn', user,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .map((response : any) => {
      if(response){
        console.log("This is response of social log in");
        if(response){
          console.log(response);
          this.saveLoggedInUser(response.email, response.token, response.fname, response.lname);
          if( response.phone != undefined ){
            localStorage.setItem("FirstName",JSON.stringify(response.fname));
            localStorage.setItem("LastName",JSON.stringify(response.lname));
            localStorage.setItem("phone",JSON.stringify(response.phone));
            localStorage.setItem("city",JSON.stringify(response.city));
            localStorage.setItem("email",JSON.stringify(response.email));
            localStorage.setItem("bio",JSON.stringify(response.bio));
            localStorage.setItem("gender",JSON.stringify(response.gender));
            localStorage.setItem("image",JSON.stringify(response.file));
            }
            if(response.phone==undefined ){
              console.log("came here")
              localStorage.removeItem("phone")
              localStorage.removeItem("city")
              localStorage.removeItem("bio")
              localStorage.removeItem("gender")
              localStorage.removeItem('image')
            }
        }
       return response;
      } else {
        Observable.throw(response);
      }
    },(error : any) => {
      console.log(error);
      throw new Error("Error occured while fetching details");      
    });
}
addSocialProfile(fname,lname, phone, city, email, bio, gender,file){
  const user= {
    fname:fname,
    lname:lname,
    phone:phone,
    city:city,
    email: email,
    bio: bio,
    file:file,
    gender:gender,
    token:JSON.parse(localStorage.getItem('token')),
    loginEmail:JSON.parse(localStorage.getItem('email'))
  };
  console.log( user);
  return this.http.post('http://localhost:4000/SocialProfile', user,{
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }).map((response : any) => {
    if(response){
      console.log(response);

    } else {
      Observable.throw(response);
    }
  },(error : any) => {
    console.log(error);
    throw new Error("Error occured while fetching details");
    
  });      
  
}


}
