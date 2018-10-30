import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { StorageService} from './storage.service';
import { FileSelectDirective } from 'ng2-file-upload';
import { LocalStorageService } from 'angular-2-local-storage';
import { LocalStorageModule } from 'angular-2-local-storage';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule, MatInputModule} from '@angular/material';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { NgxCaptchaModule } from 'ngx-captcha';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider,FacebookLoginProvider} from "angular-6-social-login";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';

import { AppRoutingModule} from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { RegSuccessComponent } from './reg-success/reg-success.component';
import { RegComponent } from './reg/reg.component';

export function getAuthServiceConfigs(){
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("306507333236263")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("899519477398-r98fb0r91guvo1qo71im2r63e4fv8cpu.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FileSelectDirective,
    ForgotPasswordComponent,
    ProfileComponent,
    HeaderComponent,
    RegSuccessComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
      MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFileUploaderModule,
    NgxCaptchaModule.forRoot({
    reCaptcha2SiteKey: '6LdzNXAUAAAAANrrr4s8qF4Ljq8_LS2t4Ujza2Ke'
    }),
    SocialLoginModule,
   LocalStorageModule.withConfig({
  prefix: 'first-app',
  storageType: 'localStorage'
})   
  ],
  providers: [{
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },StorageService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
