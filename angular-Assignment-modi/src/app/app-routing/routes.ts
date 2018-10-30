import {Routes} from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegSuccessComponent } from '../reg-success/reg-success.component';
import { RegComponent } from '../reg/reg.component';

export const routes:Routes=[
    { path: 'Login', component:LoginComponent},
    { path : 'ForgotPassword', component:ForgotPasswordComponent},
    { path: 'Registration' , component: RegistrationComponent},
    { path: 'Profile' , component:ProfileComponent},
    { path: 'RegSuccess' , component:RegSuccessComponent},
    { path: 'Reg' , component:RegComponent},
    { path: '' , redirectTo:'/Login' , pathMatch :'full'}
];