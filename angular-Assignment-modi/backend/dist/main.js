(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _reg_success_reg_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reg-success/reg-success.component */ "./src/app/reg-success/reg-success.component.ts");
/* harmony import */ var _reg_reg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reg/reg.component */ "./src/app/reg/reg.component.ts");






var routes = [
    { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'ForgotPassword', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"] },
    { path: 'Registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationComponent"] },
    { path: 'Profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'RegSuccess', component: _reg_success_reg_success_component__WEBPACK_IMPORTED_MODULE_4__["RegSuccessComponent"] },
    { path: 'Reg', component: _reg_reg_component__WEBPACK_IMPORTED_MODULE_5__["RegComponent"] },
    { path: '', redirectTo: '/Login', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-custom{\n    background-color: rgb(170, 90, 90);\n    border: 1px solid rgb(138, 74, 74) ;\n    margin-right: 30px;\n    display: inline-block;\n    width: 200px;\n}\n.background{\n    background-image:url(\"data:image/jpeg;base64,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\");\n\tbackground-repeat:no-repeat;\n\tbackground-size:cover;\n\tfont-family:Arial,sans-serif;\n\toverflow: auto;\n\theight: 100%;\n\twidth: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet class=\"background\"></router-outlet>\n\n\n\n<!-- <button routerLink=\"Profile\" class=\"btn btn-lg btn-custom\">\n    Create Profile\n  </button>\n  <button routerLink=\"Login\" class=\"btn btn-lg btn-custom\">\n    Login \n  </button>\n  <button routerLink=\"ForgotPassword\" class=\"btn btn-lg btn-custom\">\n    Forgot Password\n  </button>\n  <button routerLink=\"Registration\" class=\"btn btn-lg btn-custom\">\n    Registration\n  </button> -->\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-Assignment';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-file-uploader */ "./node_modules/angular-file-uploader/fesm5/angular-file-uploader.js");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-captcha */ "./node_modules/ngx-captcha/fesm5/ngx-captcha.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _reg_success_reg_success_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./reg-success/reg-success.component */ "./src/app/reg-success/reg-success.component.ts");
/* harmony import */ var _reg_reg_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reg/reg.component */ "./src/app/reg/reg.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["FacebookLoginProvider"]("306507333236263")
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"]("899519477398-r98fb0r91guvo1qo71im2r63e4fv8cpu.apps.googleusercontent.com")
        },
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileSelectDirective"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _reg_success_reg_success_component__WEBPACK_IMPORTED_MODULE_20__["RegSuccessComponent"],
                _reg_reg_component__WEBPACK_IMPORTED_MODULE_21__["RegComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                angular_file_uploader__WEBPACK_IMPORTED_MODULE_10__["AngularFileUploaderModule"],
                ngx_captcha__WEBPACK_IMPORTED_MODULE_11__["NgxCaptchaModule"].forRoot({
                    reCaptcha2SiteKey: '6LdzNXAUAAAAANrrr4s8qF4Ljq8_LS2t4Ujza2Ke'
                }),
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["SocialLoginModule"],
                angular_2_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageModule"].withConfig({
                    prefix: 'first-app',
                    storageType: 'localStorage'
                })
            ],
            providers: [{
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }, _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\n\tfont-family:Arial,sans-serif;\n}\np{\n\ttext-align:center;\n}\n#big{\n\tfont-size:200%;\n\tcolor:red;\n\tmargin-bottom:10px;\n\ttext-align:center;\n}\ninput[type=\"email\"]{\n\tborder:none;\n\tmargin-left:3%;\n\tmargin-right:10%;\n\twidth:100%;\n\tborder-bottom: none;\n\tfont-size:16px;\n\tpadding-bottom:3px;\n\tpadding-top:15px;\n}\nimg{\n\tdisplay: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.btn-submit{\n\tdisplay:block;\n\tbackground-color:rgba(21, 139, 239, 0.79);\n\tborder:none;\n\twidth:95%;\n\tpadding-top:2%;\n\tpadding-bottom:2%;\n\tbox-shadow: 2px 2px #888888;\n\tmargin-left:3%;\n\tmargin-right:10%;\n\tmargin-top:4%;\n\tcolor:white;\n\tfont-family:Arial;\n\tfont-size:16px;\n\n}\n.red-box{\n    border: 2px solid red;\n    height: 33px;\n    width: 0px;\n    position: absolute;\n    background-color: red;\n    top: 15px;\n    left:-2px;\n    padding-left: 3px;\n    padding-right: 3px;\n}\n.col-resize{\n\tmargin: 0 auto;\n}\n.full-width{\n\twidth:100%;\n}"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\" style=\"height: 100%;\">\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n\t\n\t\n\t<title>Forgot Password</title>\n</head>\n<body>\n\t\n\t<div class=\"container-fluid\" style=\"margin-top: 24px;\">\n\t\n\t<div class=\"col-md-4\"></div>\n\t<div class=\"col-md-4 col-resize\" style=\"background-color: white; padding-top: 15px; padding-bottom: 15px;\">\n\t<div class=\"red-box\"></div>\n\t\n\t\t<p id=\"big\">Forgot Password?</p>\n\t\t<img src=\"../../assets/img/lock.png\" width=\"15%\"/>\n\t\t<p style=\"font-size:15px;\">You can reset your password here.</p>\n\t\t<form action=\"\" method=\"POST\" novalidate [formGroup]=\"fpForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t<p>\n\t\t\t\t<span style=\"color:red\" *ngIf=\"b\">Your e-mail is not registered with us </span>\n\t\t\t\t<mat-form-field class=\"full-width\" >\n\t\t\t\t<input matInput formControlName=\"email\" type=\"email\"  placeholder=\"E-Mail\" required class=\"email\"/>\n\t\t\t\t<mat-error *ngIf=\"fpForm.get('email').hasError('required') && fpForm.get('email').pristine\">Email is required</mat-error>\n\t\t\t\t<mat-error *ngIf=\"fpForm.get('email').hasError('pattern')&& (fpForm.get('email').dirty || fpForm.get('email').touched)\">Please enter a valid e-mail address </mat-error>\n\t\t\t</mat-form-field>\t\n\t\t\t</p>\n\t\t\t<button class=\"btn-submit\" type=\"submit\" value=\"Submit\" [disabled]=\"flagButton\" (click)=\"validate()\">Submit</button><br>\n\t\t</form>\n\t</div>\n<div class=\"col-md-4\"></div>\n</div>\n</body>\n</html> \n\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(user, router, localStorageService, fb) {
        this.user = user;
        this.router = router;
        this.localStorageService = localStorageService;
        this.fb = fb;
        this.b = false;
        this.fpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        this.createForm();
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var a = this.fpForm.value;
        this.localStorageService.set('emailfp', a.email);
        console.log(this.localStorageService.get('emailfp'));
    };
    ForgotPasswordComponent.prototype.validate = function () {
        var _this = this;
        var flagButton;
        if (this.fpForm.get('email').invalid) {
            flagButton = true;
        }
        else {
            flagButton = false;
            var a = this.fpForm.value;
            this.user.checkUserEmail(a.email)
                .subscribe(function (result) {
                console.log(typeof (result.success));
                if (typeof (result.success) == "boolean" && result.success == false) {
                    console.log("Should come here if false");
                    _this.b = true;
                    var message = "User Credentials don't match ";
                    _this.router.navigate(['/ForgotPassword']);
                    return;
                }
                else {
                    _this.b = false;
                    _this.localStorageService.set('emailfp', a.email);
                    console.log("Should come here if true");
                    _this.user.fpEmail(_this.fpForm.value.email);
                    alert('Password reset link has been sent to your registered email');
                    _this.router.navigate(['/ForgotPassword']);
                }
            }, function (errors) {
                console.log(errors);
            });
        }
    };
    ForgotPasswordComponent.prototype.createForm = function () {
        this.fpForm = this.fb.group({
            email: ['', ([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,4}")])],
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs nav-fill\">\n    <li class=\"nav-item active\"><a  class=\"nav-link\" routerLink=\"Login\">Login</a> </li>\n    <li class=\"nav-item \" ><a  class=\"nav-link\"  routerLink=\"Profile\">Profile</a> </li>\n    <li class=\"nav-item \" ><a  class=\"nav-link\"  routerLink=\"Registration\">Registration</a> </li>\n    <li class=\"nav-item \" ><a  class=\"nav-link\"  routerLink=\"ForgotPassword\">Forgot Password</a> </li>\n</ul>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\t\n\tfont-family:sans-serif;\n\tfont-family:Arial;\n\n}\ninput[type=\"submit\"]{\n\tbackground-color:#17af17;\n\tdisplay:block;\n\twidth:97%;\n\tborder:none;\n\tfont-family:Arial;\n\tmargin-top:3%;\n\tborder-radius:2px;\n\tpadding:2%;\n\tfont-size:16px;\n\tbox-shadow:3px 3px #888888;\n\tmargin-bottom: 22px;\n\t}\n#fb{\n\tbackground:#00a1ff;\n\tdisplay:inline-block;\n\tpadding-top:2.5%;\n\tpadding-bottom:2.5%;\n\twidth:100%;\n\tborder-radius:7px;\n\tcolor: white;\n\tborder:2px solid #00a1ff;\n\tfont-size:16px;\n}\n#google{\n\tbackground:red;\n\tdisplay:inline-block;\n\tpadding-top:2.5%;\n\tpadding-bottom:2.5%;\n\twidth:100%;\t\n\tborder-radius:7px;\n\tcolor: white;\n\tborder:2px solid red;\n\tfont-size:16px;\n}\na.one:visited{\n\tcolor:red;\n\tpadding-top: 5px;\n}\ninput { \n\tpadding: 1%;    \n\tborder-top:none;\n\tborder-left:none;\n\tborder-right:none;\n\tborder-bottom:none;\n\twidth: 100%;\n\tfont-size:110%;\n\t\n}\na{\n\ttext-decoration:none;\n}\n#big{\n\tfont-size:200%;\n\tmargin-bottom: 5%;\n}\n#space{\n\tpadding-top:0px;\n\tpadding-bottom:0px;\n\tfont-size:15px;\n}\n.white{\n\tcolor:white;\n}\n.red-box{\n     border: 2px solid red;\n    height: 38px;\n    width: 6px;\n    position: absolute;\n    background-color: red;\n    top: 15px;\n    left: -1px;\n}\n/*  .email{\n\tpadding-top: 6%;\n    font-size: 16px;\n}\n.password{\n\tpadding-top:3%;\n\tfont-size:16px;\n\t}  */\n#sp{\n\tline-height:23px;\n\tmargin-top: 17px;\n\n}\np{\n\tfont-size:16px;\n}\n.spacing{\npadding-right:12px;\n}\n.col-resize{\n\tmargin: 0 auto;\n}\n.full-width{\n\twidth:100%;\n}\n\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\" style=\"height: 100%;\">\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n\t<title>Login</title>\n\t\n\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\n\t\n</head>\n<body>\n\t\n\t<div class=\"container-fluid\" style=\"margin-top: 24px;\">\n\t\n\t<div class=\"col-sm-4\"></div>\n\t<div class=\"col-sm-4 col-resize\" style=\"background-color: white; padding-top: 15px; padding-bottom: 15px;\">\n\t<div class=\"red-box\"></div>\n\t\n\t\t\n\t\t<p id=\"big\">Login Form</p>\n\t\t<p id=\"space\">Enter Your Login Details</p>\n\n\t\t<form novalidate [formGroup]=\"loginForm\" action=\"\" method=\"POST\" (ngSubmit)=\"onSubmit()\">\n\t\t<p><span style=\"color:red\" *ngIf=\"d\">Your credentials are not registered with us</span>\n\t\t\t<mat-form-field class=\"full-width\" >\n\t\t\t<span style=\"color:red\" *ngIf=\"c\">You have not verified your account. Please verify it</span>\n\t\t\t<span style=\"color:red\" *ngIf=\"b\">The email credentials that you've entered doesn't match any account. Sign up for an account</span>\t\t\n\t\t\t<input matInput formControlName=\"email\" type=\"email\"  placeholder=\"E-Mail\" required class=\"email\"/>\n\t\t\t<mat-error *ngIf=\"loginForm.get('email').hasError('required') && loginForm.get('email').pristine\">Email is required</mat-error>\n\t\t\t<mat-error *ngIf=\"loginForm.get('email').hasError('pattern')&& (loginForm.get('email').dirty || loginForm.get('email').touched)\">Please enter a valid e-mail address </mat-error>\n\n\t\t</mat-form-field>\t\n\t\t</p>\n\t\t<p>\n\t\t\t<mat-form-field class=\"full-width\" >\n\t\t\t\t<input matInput formControlName=\"password\" [type]=\"show ? 'text' : 'password'\"  placeholder=\"Password\" required class=\"password\">\n\t\t\t\t<span style=\"text-align:right\"><i style=\"float:right\" class=\"fa fa-fw fa-eye\" (click)=\"password()\"></i></span>\n\t\t\t\t<mat-error *ngIf=\"loginForm.get('password').hasError('required') && loginForm.get('password').pristine\">Password is required</mat-error>\n\n\t\t</mat-form-field>\n\t\t</p>\n\t\t\t\n\t\t\t<input  type=\"submit\" value=\"SIGN IN\"  [disabled]=\"flagButton\" (click)=\"validate()\">\n\t\t</form>\n\t\t<a  routerLink=\"/ForgotPassword\"  class=\"one\" >Forgot Password?</a><br>\n\t\t<p id=\"sp\">Don't have an account?<a routerLink =\"/Registration\" >Register here</a></p>\n\t\t<p style=\"line-height:24px;\">Sign in using</p>\n\t\t\n\t\t<div class=\"col-sm-6\" style=\"display:inline-block\">\n\t\t<button id='fb' (click)=\"socialSignIn('facebook')\"  id=\"fb\" ><i class=\"fab fa-facebook-f spacing\"></i>Facebook</button>\n\t</div><div class=\"col-sm-6\" style=\"display:inline-block\">\n\t\t<button id=\"google\" (click)=\"socialSignIn('google')\"><i class=\"fab fa-google spacing\"></i>Google</button>\n\t\t</div>\n\t\t\n</div>\n\t\n\t\n\t<div class=\"col-sm-4\"></div>\n</div>\n</body>\n</html>\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(user, router, socialAuthService, localStorageService, fb) {
        this.user = user;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.localStorageService = localStorageService;
        this.fb = fb;
        this.social = false;
        this.c = false;
        this.b = false;
        this.d = false;
        this.show = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        this.createForm();
        localStorage.setItem('SocialSignIn', JSON.stringify(this.social));
    }
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            _this.user.SocialLogIn(userData.email, userData.token)
                .subscribe(function (result) {
                if (localStorage.getItem('token') != null && localStorage.getItem('email') != null && result.success != false) {
                    _this.social = true;
                    localStorage.setItem('SocialSignIn', JSON.stringify(_this.social));
                    _this.router.navigate(['/Profile']);
                }
                else {
                    _this.d = true;
                    _this.router.navigate(['/Login']);
                }
            });
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onPopState = function (event) {
    };
    LoginComponent.prototype.onSubmit = function () {
        var a = this.loginForm.value;
        /*     this.localStorageService.set('emaill',a.email);
            this.localStorageService.set('passwordl',a.password);
            console.log(this.localStorageService.get('passwordl')); */
    };
    LoginComponent.prototype.password = function () {
        this.show = !this.show;
    };
    LoginComponent.prototype.validate = function () {
        var _this = this;
        var a = this.loginForm.value;
        var flagButton;
        if (this.loginForm.get('email').invalid || this.loginForm.get('password').invalid) {
            flagButton = true;
        }
        else {
            this.social = false;
            localStorage.setItem('SocialSignIn', JSON.stringify(this.social));
            flagButton = false;
            var a = this.loginForm.value;
            this.user.checkUser(a.email, a.password, JSON.parse(localStorage.getItem('SocialSignIn')))
                .subscribe(function (result) {
                console.log((result.success));
                if (result.success == false) {
                    if (result.isVerified == true) {
                        _this.social = false;
                        console.log("Should come here if false");
                        _this.b = true;
                        _this.router.navigate(['/Login']);
                        return;
                    }
                    else if (result.isVerified == false) {
                        _this.social = false;
                        _this.b = false;
                        _this.c = true;
                        console.log("Should come here if otp not verified");
                        _this.router.navigate(['/Login']);
                    }
                    else {
                        _this.social = false;
                        console.log("Should come here if false");
                        _this.b = true;
                        _this.c = false;
                        _this.router.navigate(['/Login']);
                        return;
                    }
                }
                else {
                    console.log("Should come here if true");
                    _this.social = false;
                    _this.router.navigate(['/Profile']);
                }
            }, function (errors) {
                console.log(errors);
                _this.b = true;
            });
        }
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', ([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")])],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:popstate', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LoginComponent.prototype, "onPopState", null);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\tfont-family:helvetica,sans-serif;\n\t\n}\n.whitespace{\n\tpadding:16%;\n\tbackground-color:white;\n}\n.form-border{\n\tborder-top:none;\n\tborder-left:none;\n\tborder-right:none;\n\tborder-bottom:none;\n\t\n\tborder-radius:0px;\n\tfont-size:15px;\n\tfont-family:Helvetica;\n\tcolor:dimgray;\n\t\n\t\n}\n.form-border-file{\n\tborder:none;\n\topacity:0;\n\tmargin-top: -45px;\n    margin-left: 66px;\n\tfont-size: 21px;\n\twidth: 35%;\n\tposition: absolute;\n}\n.image-center{\nwidth: 85px;\n\nborder-radius: 50%;\n\n}\n.label-center{\n\ttext-align:center;\n\tdisplay:block;\n\tmargin-top:8%;\n\tfont-size:95%;\n\tcolor:dimgray;\n\t\n}\n#email{\n\tmargin-top:2%;\n}\n.form-shrink{\n\tmargin-bottom:0px;\n\t}\n.img-resize{\n\twidth:90%;\n\tpadding-top:2%;\n\tpadding-bottom:12%;\n\theight:90%;\n}\n.sbtn{\nmargin-top: 5%;\n    margin-left: 27%;\n    width: 70%;\n    border-radius: 0px;\n    font-size: 18px;\n}\n.bbtn{\n\twidth: 100%;\n\tbackground-color:white;\n\tcolor: dimgray;\n}\n.caret-right{\n\tmargin-left: 49%;\n}\n.list{\n\twidth:100%;\n\t}\n.radio-custom{\n\tdisplay:none;\n}\ninput[type=\"radio\"]:checked + label{ \n    color: #fd7e14;\n}\ninput[type=\"radio\"]:not(:checked) + label{ \n    color: dimgray;\n}\n.back{\n\tborder: 2px solid white;\n    margin: auto;\n    width: 55%;\n\tbackground-color:white;\n\tmargin-top:3%;\n\tpadding: 2%;\n}\n.label-name{\n\t\n\tmargin-top: 12%;\n}\n.camera{\n\t\n\twidth:20px;\n\t\n\t\n}\n.center{\n\ttext-align:center;\n\tmargin-top:18%;\n\tmin-height: 86px;\n\tmax-height: 86px;\n}\n.btn-wrapper {\n   border: 2px solid white;\n    padding:2%;\n    position: absolute;\n    display: inline-block;\n    border-radius: 100px;\n    background-color: #fff;\n\tleft:45.5%;\n\t-webkit-transform: translate(0,-24px);\n\t        transform: translate(0,-24px);\n\tpadding-right: 27px;\n}\n.red-box{\n     border: 2px solid red;\n    height: 38px;\n    width: 10px;\n    position: absolute;\n    background-color: red;\n\ttop:-40px;\n\tleft:1px;\n    \n}\n.bio{\n\tcolor:gray;\n\tborder-top: none;\n\tborder-left: none;\n\tborder-right: none;\n\tborder-bottom:none; \n\t\n}\n.col-resize{\n\tmargin: 0 auto;\n}\n.full-width{\n\twidth:100%;\n}\n.btn-wrapper-upload{\n\tposition: relative;\n\toverflow: hidden;\n\tdisplay: inline-block;\n\n\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\t<html lang=\"en\" style=\"height: 100%;\">\n\t\t<head>\n\t\t<title>Create Profile</title>\n\t\t\n\t\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n\t\t<meta charset=\"utf-8\">\n\t</head>\n\t\t\n\t\t<link rel = \"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css\">\n\t\n\t\t<body>\n\t\t<div class=\"col-md-3\"></div>\t\n\t\t\n\t\t<div class=\"col-md-6 container-fluid\" style=\"background-color: white; padding-top: 15px; padding-bottom: 15px; \">\n\t\t\t\t\n\t\t\t\n\t\t\t<form novalidate [formGroup]=\"profileForm\" action=\"\" method=\"POST\"  (ngSubmit)='onSubmit()'>\n\t\t\t<h4 class=\"text-right\" style=\"font-size:22px;\"><b>Create Your Profile</b></h4>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"red-box\"></div>\n\n\t\t\t\t\t\t<p><mat-form-field class=\"full-width\" >\n\t\t\t\t\t\t\t<input matInput formControlName=\"fname\" type=\"text\" placeholder=\"First Name\" class=\"form-control form-border\" required>\n\t\t\t\t\t\t\t<mat-error *ngIf=\"IsSubmitted && profileForm.get('fname').hasError('required') && (profileForm.get('fname').pristine || profileForm.get('fname').touched)\">Please enter your first name</mat-error>\n\t\t\t\t\t\t\t<mat-error *ngIf=\"profileForm.get('fname').hasError('pattern')&& (profileForm.get('fname').dirty || profileForm.get('fname').touched)\">*Characters only</mat-error>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t</p>\t\n\t\t\t\t\t\t<p><mat-form-field class=\"full-width\" >\n\t\t\t\t\t\t\t<input  matInput formControlName=\"lname\" type=\"text\" placeholder=\"Last Name\" class=\"form-control form-border\" required>\n\t\t\t\t\t\t\t<mat-error *ngIf=\"IsSubmitted && profileForm.get('lname').hasError('required') && (profileForm.get('lname').pristine || profileForm.get('lname').touched)\">Please enter your last name</mat-error>\n\t\t\t\t\t\t\t<mat-error *ngIf=\"profileForm.get('lname').hasError('pattern')&& (profileForm.get('lname').dirty || profileForm.get('lname').touched)\">*Characters only</mat-error>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t</p>\t\t\n\t\t\t\t\t\t\t\t<p><mat-form-field class=\"full-width\" >\n\t\t\t\t\t\t\t<input matInput formControlName=\"phone\" type=\"tel\" placeholder=\"Phone\" class=\"form-control form-border\" required>\n\t\t\t\t\t\t\t<mat-error *ngIf=\"IsSubmitted && (profileForm.get('phone').hasError('required')&& (profileForm.get('phone').pristine || profileForm.get('phone').touched) )\">Please enter your phone</mat-error>\n\t\t\t\t\t\t\t<mat-error *ngIf=\"profileForm.get('phone').hasError('pattern')&&(profileForm.get('phone').dirty || profileForm.get('phone').touched)\">Please enter a valid phone number with 10 digits</mat-error>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t</p>\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div style=\"display:inline-block; width:50%;\">\n\t\t\t\t\t<input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"male\" id=\"gm\" class=\"radio-custom\" required><label for=\"gm\"><i class=\"fa fa-male\" > Male</i></label>\n\t\t\t\t</div><div style=\"display:inline-block; width:50%;\">\n\t\t\t\t\t<input type=\"radio\" name=\"gender\" formControlName=\"gender\"  value=\"female\"  id=\"gf\" class=\"radio-custom\" required><label for=\"gf\"><i class=\"fa fa-female\" style=\"display:inline-flex;\" > Female</i></label>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<mat-error *ngIf=\"(IsSubmitted && profileForm.get('gender').hasError('required'))\">Please select an option</mat-error>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"center\" > \n\t\t\t\t\t<img [src]=\"imgUrl\" class=\"image-center\"></div>\n\t\t\t\t\t<i class=\"fa fa-camera camera btn-wrapper \"> </i>\n\t\t\t\t\t<input type=\"file\" class=\"form-control form-border-file\" accept=\"image/*\" id=\"file\" (change)='onFileChange($event);' name=\"file\" >\n\t\t\t\t\n\t\t\t\t\t<div class=\"form-group form-shrink\" [formGroup]=\"profileForm\">\t\t\t\t\t\t\n\t\t\t\t\t\t<div><label for=\"file\" class=\"label-center\">Upload Avatar</label></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p><mat-form-field class=\"full-width\">\n\t\t\t\t\t\t\t<input matInput formControlName=\"email\"  type=\"email\" placeholder=\"Email\" class=\"form-control form-border\" id=\"email\" required>\n\t\t\t\t\t\t\t<mat-error *ngIf=\"IsSubmitted &&( profileForm.get('email').hasError('required') && (profileForm.get('email').pristine || profileForm.get('email').touched)) \">Please enter your email</mat-error>\n\t\t\t\t\t\t\t<mat-error *ngIf=\"profileForm.get('email').hasError('pattern')&& (profileForm.get('email').dirty || profileForm.get('email').touched)\">Please enter a valid email address</mat-error>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"dropdown\" [formGroup]=\"profileForm\">\n\t\t\t\t\t<!-- <button class=\"btn btn-default dropdown-toggle form-border bbtn\" type=\"button\" data-toggle=\"dropdown\" value=\"city\"  >City, State, Country<span class=\"caret caret-right\"></span></button> -->\n\t\t\t\t\t\n\t\t\t\t\t\t<mat-form-field class=\"full-width\" style=\"margin-top:19px;\">\n\t\t\t\t\t\t<mat-select placeholder=\"City, State, Country\" name=\"cityname\" formControlName=\"city\" required>\n\t\t\t\t\t\t  <mat-option [value]=\"country\" *ngFor=\"let country of countries\">{{country}}</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t<mat-error *ngIf=\"IsSubmitted && profileForm.get('city').hasError('required')\">This field is required</mat-error>\n\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t<p><mat-form-field class=\"full-width\" >\n\t\t\t\t\t\t\t<textarea matInput formControlName=\"bio\"  class=\"form-control bio\"  rows=\"3\" cols=\"72\" placeholder=\"Bio\" style=\"margin-top:25px;\" >\n\t\t\t\t\t\t\t</textarea>\n\t\t\t\t\t\t\t</mat-form-field></p>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\n\t\t\t\t<div class=\"col-sm-6\" [formGroup]=\"profileForm\"> \n\t\t\t\t\t<div style=\"transform:scale(0.77);-webkit-transform:scale(0.77);transform-origin:0 0;-webkit-transform-origin:0 0;\">\n\t\t\t\t\t\t<ngx-recaptcha2 class=\"cap\" [size]=\"size\" [hl]=\"lang\" [theme]=\"light\" [type]=\"type\" (expire)=\"handleExpire()\"   formControlName=\"recaptcha\">\n\t\t\t\t\t\t  </ngx-recaptcha2></div>\n\t\t\t\t\t\t  <mat-error *ngIf=\"IsSubmitted && profileForm.get('recaptcha').pristine\">*Required</mat-error>\n\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"col-sm-6\" >\n\t\t\t\t\t<input type=\"submit\" class=\"btn btn-success btn-lg sbtn\"  [disabled]=\"flagButton\" (click)=\"validate()\" value=\"Submit\">\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</form>\n\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t\n\t</body>\n\t</html>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var URL = 'http://localhost:4000/Profile';

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http, user, location, router, localStorageService, fb) {
        this.http = http;
        this.user = user;
        this.location = location;
        this.router = router;
        this.localStorageService = localStorageService;
        this.fb = fb;
        this.flagGender = false;
        this.flagCity = false;
        this.IsSubmitted = false;
        this.social = JSON.parse(localStorage.getItem('SocialSignIn'));
        this.imgUrl = "../../assets/img/user.png";
        this.countries = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli',
            'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep',
            'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan',
            'Sikkim', 'Tamil Nadu', 'Telengana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.createForm();
    }
    // public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    ProfileComponent.prototype.ngOnInit = function () {
        /*  this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
         this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
              console.log('ImageUpload:uploaded:', item, status, response);
              alert('File uploaded successfully');
          }; */
    };
    ProfileComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.filesToUpload = file;
        var reader = new FileReader();
        if (event.target.files && event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (event) {
                _this.imgUrl = event.target.result;
            };
        }
    };
    ProfileComponent.prototype.upload = function () {
        var formData = new FormData();
        formData.append("file", this.filesToUpload, this.filesToUpload.name);
        if ((JSON.parse(localStorage.getItem('email')))) {
            formData.append("email", (JSON.parse(localStorage.getItem('email'))));
            formData.append("SocialSignIn", (JSON.parse(localStorage.getItem('SocialSignIn'))));
        }
        this.http.post('http://localhost:4000/upload', formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({})
        }).subscribe();
    };
    ProfileComponent.prototype.createForm = function () {
        var f = (JSON.parse(localStorage.getItem('FirstName')));
        var l = (JSON.parse(localStorage.getItem('LastName')));
        var p = (JSON.parse(localStorage.getItem('phone')));
        var c = (JSON.parse(localStorage.getItem('city')));
        var g = (JSON.parse(localStorage.getItem('gender')));
        var e = (JSON.parse(localStorage.getItem('email')));
        var b = (JSON.parse(localStorage.getItem('bio')));
        if ((JSON.parse(localStorage.getItem('image')) == "") || JSON.parse(localStorage.getItem('image')) == null) {
            this.imgUrl = '../../assets/img/user.png';
            console.log((this.imgUrl));
        }
        else {
            this.imgUrl = 'http://localhost:4000/' + (JSON.parse(localStorage.getItem('image')));
            console.log((this.imgUrl));
        }
        this.profileForm = this.fb.group({
            fname: [f, ([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])],
            lname: [l, ([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])],
            phone: [p, ([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]{10}$")])],
            email: [e, ([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")])],
            bio: [b],
            recaptcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: [g, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: [c, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ProfileComponent.prototype.onSubmit = function () {
        var a = this.profileForm.value;
    };
    ProfileComponent.prototype.validate = function () {
        var _this = this;
        this.IsSubmitted = true;
        var flagButton;
        if (this.profileForm.get('fname').invalid || this.profileForm.get('lname').invalid || this.profileForm.get('phone').invalid || this.profileForm.get('city').invalid || this.profileForm.get('email').invalid || this.profileForm.get('gender').invalid || this.profileForm.get('recaptcha').invalid) {
            flagButton = true;
        }
        else {
            var a = this.profileForm.value;
            flagButton = false;
            if (localStorage.getItem('token') != null && localStorage.getItem('email') != null) {
                if (this.social == false) {
                    this.user.addProfile(a.fname, a.lname, a.phone, a.city, a.email, a.bio, a.gender, '')
                        .subscribe(function (result) {
                        _this.upload();
                        console.log(result);
                    });
                }
                else {
                    this.user.addSocialProfile(a.fname, a.lname, a.phone, a.city, a.email, a.bio, a.gender, '')
                        .subscribe(function (result) {
                        _this.upload();
                        console.log(result);
                    });
                }
                alert('You have created profile');
            }
            else {
                alert("Please log in to save your changes");
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProfileComponent.prototype, "fileInput", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/reg-success/reg-success.component.css":
/*!*******************************************************!*\
  !*** ./src/app/reg-success/reg-success.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width{\n\twidth:30%;\n}"

/***/ }),

/***/ "./src/app/reg-success/reg-success.component.html":
/*!********************************************************!*\
  !*** ./src/app/reg-success/reg-success.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\n\n<div class=\"jumbotron\">\n  <h1>You have registered successfully</h1>\n  <h3>Please enter the OTP sent to your email here</h3>\n  <form [formGroup]=\"regSuccess\" novalidate>\n  <p>\n    <mat-error *ngIf=\"b\">Entered OTP is incorrect</mat-error>\n    <mat-form-field class=\"full-width\" >\n  <input matInput [type]=\"show ? 'text' : 'password'\"  placeholder=\"OTP\" required class=\"password\" formControlName=\"otp\">\n  <span style=\"text-align:right\"><i style=\"float:right\" class=\"fa fa-fw fa-eye\" (click)=\"password()\"></i></span>\n  <mat-error *ngIf=\"regSuccess.get('otp').hasError('required') && regSuccess.get('otp').pristine\">Please enter your otp</mat-error>\n</mat-form-field>\n</p>\n  <input type=\"submit\" class=\"btn btn-success btn-lg sbtn\" (click)=\"validate()\">\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/reg-success/reg-success.component.ts":
/*!******************************************************!*\
  !*** ./src/app/reg-success/reg-success.component.ts ***!
  \******************************************************/
/*! exports provided: RegSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegSuccessComponent", function() { return RegSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegSuccessComponent = /** @class */ (function () {
    function RegSuccessComponent(fb, user, router) {
        this.fb = fb;
        this.user = user;
        this.router = router;
        this.show = false;
        this.b = false;
        this.regSuccess = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    RegSuccessComponent.prototype.ngOnInit = function () {
    };
    RegSuccessComponent.prototype.password = function () {
        this.show = !this.show;
    };
    RegSuccessComponent.prototype.createForm = function () {
        this.regSuccess = this.fb.group({
            otp: [, ([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    };
    RegSuccessComponent.prototype.validate = function () {
        var _this = this;
        var flagButton;
        if (this.regSuccess.get('otp').invalid) {
            flagButton = true;
        }
        else {
            flagButton = false;
            this.user.verifyOTP(this.regSuccess.value.otp)
                .subscribe(function (result) {
                console.log(result.success);
                if (typeof (result.success) == "boolean" && result.success == false) {
                    console.log("Should come here if false");
                    _this.b = true;
                    return;
                }
                else {
                    console.log("Should come here if true");
                    alert('Your response has been verified. You can proceed to login');
                    _this.router.navigate(['/Login']);
                }
            }, function (errors) {
                _this.b = true;
            });
        }
    };
    RegSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reg-success',
            template: __webpack_require__(/*! ./reg-success.component.html */ "./src/app/reg-success/reg-success.component.html"),
            styles: [__webpack_require__(/*! ./reg-success.component.css */ "./src/app/reg-success/reg-success.component.css")],
            providers: [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegSuccessComponent);
    return RegSuccessComponent;
}());



/***/ }),

/***/ "./src/app/reg/reg.component.css":
/*!***************************************!*\
  !*** ./src/app/reg/reg.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reg/reg.component.html":
/*!****************************************!*\
  !*** ./src/app/reg/reg.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\n\n<div class=\"jumbotron\">\n    <h1>Please reset your password here</h1>\n    <h3>Please enter the password you want to access your account with</h3>\n    <form [formGroup]=\"passwordReset\" novalidate (ngSubmit)=onSubmit()>\n    <p>\n    <mat-error *ngIf=\"b\">Entered passwords don't match</mat-error>\n     <mat-form-field class=\"full-width\" >\n    <input matInput [type]=\"show ? 'text' : 'password'\"  placeholder=\"Password\" required class=\"password\" formControlName=\"password\">\n    <span style=\"text-align:right\"><i style=\"float:right\" class=\"fa fa-fw fa-eye\" (click)=\"password()\"></i></span>\n    <mat-error *ngIf=\"passwordReset.get('password').hasError('required') && passwordReset.get('password').pristine\">Please enter your Password</mat-error>\n    <mat-error *ngIf=\"passwordReset.get('password').hasError('pattern')&& (passwordReset.get('password').dirty || passwordReset.get('password').touched)\">Password must be atleast of 8 characters with one uppercase, one lowercase letter, one special character and one digit, without spaces</mat-error>\n\n  </mat-form-field>\n  </p>\n  <p>\n      <mat-form-field class=\"full-width\" >\n     <input matInput [type]=\"show ? 'text' : 'password'\"  placeholder=\"Confirm Password\" required class=\"password\" formControlName=\"confirmPass\">\n     <span style=\"text-align:right\"><i style=\"float:right\" class=\"fa fa-fw fa-eye\" (click)=\"password()\"></i></span>\n     <mat-error *ngIf=\"passwordReset.get('confirmPass').hasError('required') && passwordReset.get('confirmPass').pristine\">Please confirm your password</mat-error>\n   </mat-form-field>\n   </p>\n    <input type=\"submit\" class=\"btn btn-success btn-lg sbtn\" [disabled]=flagButton (click)=\"validate()\">\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/reg/reg.component.ts":
/*!**************************************!*\
  !*** ./src/app/reg/reg.component.ts ***!
  \**************************************/
/*! exports provided: RegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegComponent", function() { return RegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegComponent = /** @class */ (function () {
    function RegComponent(fb, user, router) {
        this.fb = fb;
        this.user = user;
        this.router = router;
        this.show = false;
        this.b = false;
        this.passwordReset = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            confirmPass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    RegComponent.prototype.ngOnInit = function () {
    };
    RegComponent.prototype.password = function () {
        this.show = !this.show;
    };
    RegComponent.prototype.createForm = function () {
        this.passwordReset = this.fb.group({
            password: [, ([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")])],
            confirmPass: [, ([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    };
    RegComponent.prototype.onSubmit = function () { };
    RegComponent.prototype.validate = function () {
        var _this = this;
        var flagButton;
        if (this.passwordReset.get('password').invalid || this.passwordReset.get('confirmPass').invalid) {
            flagButton = true;
        }
        else if (this.passwordReset.value.password != this.passwordReset.value.confirmPass) {
            this.b = true;
            flagButton = true;
        }
        else {
            this.b = false;
            flagButton = false;
            this.user.verifyPass(this.passwordReset.value.password)
                .subscribe(function (result) {
                console.log(result.success);
                console.log("Should come here if true");
                alert('Your password has been reset. You can proceed to login');
                _this.router.navigate(['/Login']);
            }, function (errors) {
                console.log(errors);
            });
        }
    };
    RegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reg',
            template: __webpack_require__(/*! ./reg.component.html */ "./src/app/reg/reg.component.html"),
            styles: [__webpack_require__(/*! ./reg.component.css */ "./src/app/reg/reg.component.css")],
            providers: [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegComponent);
    return RegComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n\t\n\tfont-family:Arial,sans-serif;\n\t\n}\ninput[type=submit]{\n\tbackground-color:#008000d9;\n\tdisplay:block;\n\twidth:100%;\n\tborder:none;\n\tpadding-top:2%;\n\tpadding-bottom:2%;\n\tbox-shadow:0px 2px gray;\n\tborder-radius:3px;\n}\n#fb{\n\tbackground:#00a1ff;\n\tdisplay:inline-block;\n\t\n\tpadding-top:2.5%;\n\tpadding-bottom:2.5%;\n\twidth:100%;\n\tborder-radius:7px;\n\tcolor: white;\n\tborder:2px solid #00a1ff;\n\tfont-size:16px;\n}\n#google{\n\tbackground:red;\n\tdisplay:inline-block;\n\tpadding-top:2.5%;\n\tpadding-bottom:2.5%;\n\twidth:100%;\n\t\n\tborder-radius:7px;\n\tcolor: white;\n\tborder:2px solid red;\n\tfont-size:16px;\n\n}\n#big{\n\tfont-size:200%;\n\n}\na{\n\ttext-decoration:none;\n}\ninput { \n\t\n\tborder: none;\n\twidth: 95%;\n\t\n\tdisplay:block;\n\tfont-size:15px;\n\tborder-bottom:none;\n\t\n}\n#space{\n\tpadding-top:0px;\n\tpadding-bottom:0px;\n\tfont-size:16px;\n\tmargin-bottom:0px;\n}\n.fab fa-facebook-f{\n\tpadding-right:1%;\n}\n.fab fa-google{\n\tpadding-right:1%;\n}\n.red-box{\n     border: 2px solid red;\n    height: 38px;\n    width: 6px;\n    position: absolute;\n    background-color: red;\n    top: 18px;\n    left: -1px;\n}\n.spacing{\npadding-right:12px;\n}\n.col-resize{\n\tmargin: 0 auto;\n}\n.full-width{\n\twidth:100%;\n}\nhtml{\noverflow: auto;\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\" >\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>Registration form</title>\n\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n\t\n\t\n\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\n</head> \n<body >\n\t\n\t<div class=\"container-fluid\" >\n\t\n\t<div class=\"col-md-3\"></div>\n\t<div class=\"col-md-6 col-resize\" style=\"background-color: white;\">\n\t<div class=\"red-box\"></div>\n\t\t<p id=\"big\">Registration Form</p>\n\t\t<p  id=\"space\">Enter your login details</p>\n\t\t<form action=\"/Registration \" method=\"POST\" novalidate [formGroup]=\"regForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t<p>\n\t\t\t\t<mat-form-field class=\"full-width\" >\t\n\t\t\t<span style=\"color:red\" *ngIf=\"b\">This email exists. Please register with another email. </span>\n\t\t\t<input type=\"text\" matInput formControlName=\"fname\" required placeholder=\"First Name\" style=\"margin-top:0px;\">\n\t\t\t<mat-error *ngIf=\"regForm.get('fname').hasError('required') && regForm.get('fname').pristine\">Please enter your first name</mat-error>\n\t\t\t<mat-error *ngIf=\"regForm.get('fname').hasError('pattern')&& (regForm.get('fname').dirty || regForm.get('fname').touched)\">*Characters only</mat-error>\n\t\t</mat-form-field>\n\t\t<p>\n\t\t\t<mat-form-field class=\"full-width\" >\t\n\t\t<input type=\"text\" matInput formControlName=\"lname\" required placeholder=\"Second Name\" style=\"margin-top:0px;\">\n\t\t<mat-error *ngIf=\"regForm.get('lname').hasError('required') && regForm.get('lname').pristine\">Please enter your second name</mat-error>\n\t\t<mat-error *ngIf=\"regForm.get('lname').hasError('pattern')&& (regForm.get('lname').dirty || regForm.get('lname').touched)\">*Characters only</mat-error>\n\t</mat-form-field>\n\t\t</p>\n\t\t\t<p>\n\t\t\t\t<mat-form-field class=\"full-width\" >\t\n\t\t\t<input type=\"text\" matInput formControlName=\"cname\" name=\"cname\" required  placeholder=\"Company Name\">\n\t\t\t<mat-error *ngIf=\"regForm.get('cname').hasError('required') && regForm.get('cname').pristine\">Please enter the name of your company</mat-error>\n\t\t\t<mat-error *ngIf=\"regForm.get('cname').hasError('pattern')&& (regForm.get('cname').dirty || regForm.get('cname').touched)\">*Characters only </mat-error>\n\t\t</mat-form-field>\t\n\t\t</p>\n\t\t\t<p>\n\t\t\t\t<mat-form-field class=\"full-width\" >\n\t\t\t<input type=\"text\" matInput formControlName=\"country\" name=\"country\"  required placeholder=\"Country\">\n\t\t\t<mat-error *ngIf=\"regForm.get('country').hasError('required') && regForm.get('country').pristine\">Please enter the name of your country</mat-error>\n\t\t\t<mat-error *ngIf=\"regForm.get('country').hasError('pattern')&& (regForm.get('country').dirty || regForm.get('country').touched)\">*Characters only</mat-error>\n\t\t</mat-form-field>\t\n\t\t</p>\n\t\t\t<p>\n\t\t\t\t<mat-form-field class=\"full-width\" >\n\t\t\t<input type=\"email\" matInput formControlName=\"email\" name=\"email\" required  placeholder=\"Email\">\n\t\t\t<mat-error *ngIf=\"regForm.get('email').hasError('required') && regForm.get('email').pristine\">Email is required</mat-error>\n\t\t\t<mat-error *ngIf=\"regForm.get('email').hasError('pattern')&& (regForm.get('email').dirty || regForm.get('email').touched)\">Please enter a valid e-mail address </mat-error>\n\t\t</mat-form-field>\t\n\t\t</p>\n\t\t<p>\n\t\t\t<mat-form-field class=\"full-width\" >\n\t\t\t<input matInput formControlName=\"password\" type=\"password\"  placeholder=\"Password\" required class=\"password\"/>\n\t\t\t<mat-error *ngIf=\"regForm.get('password').hasError('required') && regForm.get('password').pristine\">Password is required</mat-error>\n\t\t\t<mat-error *ngIf=\"regForm.get('password').hasError('pattern')&& (regForm.get('password').dirty || regForm.get('password').touched)\">Password must be atleast of 8 characters with one uppercase, one lowercase letter, one special character and one digit, without spaces</mat-error>\n\n\t\t</mat-form-field>\n\t\t</p>\n\t\t\t<input type=\"submit\" value=\"Submit\" [disabled]=\"flagButton\" (click)=\"validate()\"><br>\n\t\t</form>\n\t\t<p style=\"margin-bottom:1px; margin-top:0px;\">Sign up using</p><br>\n\t\t<div class=\"col-sm-6\" style=\"display:inline-block\">\n\t\t<button type=\"button\" id=\"fb\" (click)=\"socialSignIn('facebook')\" ><i class=\"fab fa-facebook-f spacing\"></i>Facebook</button>\n\t</div><div class=\"col-sm-6\" style=\"display:inline-block\">\n\t\t<button type=\"button\" id=\"google\" (click)=\"socialSignIn('google')\"><i class=\"fab fa-google spacing\"></i>Google</button>\n\t</div></div>\n\t\t<div class=\"col-md-3\"></div>\n\t</div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(user, router, socialAuthService, localStorageService, fb) {
        this.user = user;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.localStorageService = localStorageService;
        this.fb = fb;
        this.b = false;
        this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            cname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.createForm();
    }
    RegistrationComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            _this.user.addSocialSignInUser(userData.name, userData.email, userData.id, userData.token)
                .subscribe();
            _this.router.navigate(['/Login']);
        });
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSubmit = function () {
        /*  var a =this.regForm.value;
         this.localStorageService.set('namer',a.name);
         this.localStorageService.set('companynamer',a.cname);
         this.localStorageService.set('emailr',a.email);
         this.localStorageService.set('countryr',a.country);
         this.localStorageService.set('passwordr',a.password); */
    };
    RegistrationComponent.prototype.validate = function () {
        var _this = this;
        var flagButton;
        if (this.regForm.get('fname').invalid || this.regForm.get('lname').invalid || this.regForm.get('cname').invalid || this.regForm.get('country').invalid || this.regForm.get('email').invalid || this.regForm.get('password').invalid) {
            flagButton = true;
        }
        else {
            flagButton = false;
            var a = this.regForm.value;
            /* this.localStorageService.set('namer',a.name);
            this.localStorageService.set('companynamer',a.cname);
            this.localStorageService.set('emailr',a.email);
            this.localStorageService.set('countryr',a.country);
            this.localStorageService.set('passwordr',a.password); */
            this.user.setOption(a.email);
            this.user.addUser(a.fname, a.lname, a.cname, a.country, a.email, a.password)
                .subscribe(function (result) {
                console.log(typeof (result.success));
                if (typeof (result.success) == 'boolean' && result.success == false) {
                    console.log("Should come here if email exists");
                    _this.b = true;
                }
                else {
                    _this.b = false;
                    console.log("Should come here if email doesnt exist");
                    _this.router.navigate(['/RegSuccess']);
                }
            });
        }
    };
    RegistrationComponent.prototype.createForm = function () {
        this.regForm = this.fb.group({
            email: [, ([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")])],
            password: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?!.* )(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
            fname: [, ([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])],
            lname: [, ([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])],
            cname: [, ([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])],
            country: [, ([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])]
        });
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")],
            providers: [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/storage.service.ts":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageService = /** @class */ (function () {
    function StorageService(http) {
        this.http = http;
    }
    StorageService_1 = StorageService;
    StorageService.prototype.setOption = function (value) {
        StorageService_1.email = value;
        console.log(StorageService_1.email);
        return;
    };
    StorageService.prototype.fpEmail = function (value) {
        StorageService_1.fpemail = value;
        console.log(StorageService_1.fpemail);
        return;
    };
    StorageService.prototype.addUser = function (fname, lname, cname, country, email, password) {
        var user = {
            fname: fname,
            lname: lname,
            cname: cname,
            country: country,
            email: email,
            password: password
        };
        console.log(user);
        return this.http.post('http://localhost:4000/Registration', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).map(function (response) {
            if (response) {
                console.log(response);
                return response;
            }
            else {
                rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response);
            }
        }, function (error) {
            console.log(error);
            throw new Error("Error occured while fetching details");
        });
    };
    StorageService.prototype.verifyOTP = function (otp) {
        var user = {
            otp: otp,
            email: StorageService_1.email
        };
        console.log(user);
        return this.http.post('http://localhost:4000/RegSuccess', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).map(function (response) {
            if (response) {
                console.log(response);
                return response;
            }
            else {
                rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response);
            }
        }, function (error) {
            console.log(error);
            throw new Error("Error occured while fetching details");
        });
    };
    StorageService.prototype.addProfile = function (fname, lname, phone, city, email, bio, gender, file) {
        var user = {
            fname: fname,
            lname: lname,
            phone: phone,
            city: city,
            email: email,
            bio: bio,
            file: file,
            gender: gender,
            token: JSON.parse(localStorage.getItem('token')),
            loginEmail: JSON.parse(localStorage.getItem('email'))
        };
        console.log(user);
        return this.http.post('http://localhost:4000/Profile', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).map(function (response) {
            if (response) {
                console.log(response);
            }
            else {
                rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response);
            }
        }, function (error) {
            console.log(error);
            throw new Error("Error occured while fetching details");
        });
    };
    StorageService.prototype.saveLoggedInUser = function (email, token, fname, lname) {
        if (email != undefined && token != undefined) {
            console.log('here');
            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("FirstName", JSON.stringify(fname));
            localStorage.setItem("LastName", JSON.stringify(lname));
        }
    };
    StorageService.prototype.checkUser = function (email, password, SocialSignIn) {
        var _this = this;
        var user = {
            email: email,
            password: password,
            SocialSignIn: SocialSignIn
        };
        console.log(user);
        return this.http.post('http://localhost:4000/Login', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .map(function (response) {
            if (response) {
                console.log(response.fname);
                _this.saveLoggedInUser(response.email, response.jwttoken, response.fname, response.lname);
                if (response.phone != undefined) {
                    console.log('here');
                    localStorage.setItem("FirstName", JSON.stringify(response.fname));
                    localStorage.setItem("LastName", JSON.stringify(response.lname));
                    localStorage.setItem("phone", JSON.stringify(response.phone));
                    localStorage.setItem("city", JSON.stringify(response.city));
                    localStorage.setItem("email", JSON.stringify(response.email));
                    localStorage.setItem("bio", JSON.stringify(response.bio));
                    localStorage.setItem("gender", JSON.stringify(response.gender));
                    localStorage.setItem("image", JSON.stringify(response.file));
                }
                if (response.phone == undefined) {
                    console.log("came here");
                    localStorage.removeItem("phone");
                    localStorage.removeItem("city");
                    localStorage.removeItem("bio");
                    localStorage.removeItem("gender");
                    localStorage.removeItem('image');
                }
                return response;
            }
            else {
                rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response);
            }
        }, function (error) {
            console.log(error);
            throw new Error("Error occured while fetching details");
        });
    };
    StorageService.prototype.checkUserEmail = function (email) {
        var user = {
            email: email
        };
        console.log(user);
        return this.http.post('http://localhost:4000/ForgotPassword', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .map(function (response) {
            if (response) {
                console.log(response.success);
                //this.saveLoggedInUser(response.body);
                return response;
            }
            else {
                rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response);
            }
        }, function (error) {
            console.log(error);
            throw new Error("Error occured while fetching details");
        });
    };
    StorageService.prototype.verifyPass = function (password) {
        var user = {
            password: password,
            email: JSON.parse(localStorage.getItem('first-app.emailfp'))
        };
        console.log(user);
        return this.http.post('http://localhost:4000/Reg', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .map(function (response) {
            if (response) {
                console.log("This is response of fp");
                return response;
            }
            else {
                rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response);
            }
        }, function (error) {
            console.log(error);
            throw new Error("Error occured while fetching details");
        });
    };
    StorageService.prototype.addSocialSignInUser = function (name, email, id, token) {
        var user = {
            name: name,
            email: email,
            id: id,
            token: token
        };
        console.log(user);
        return this.http.post('http://localhost:4000/SocialSignIn', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .map(function (response) {
            if (response) {
                console.log("This is response of social sign in");
                return response;
            }
            else {
                rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response);
            }
        }, function (error) {
            console.log(error);
            throw new Error("Error occured while fetching details");
        });
    };
    StorageService.prototype.SocialLogIn = function (email, token) {
        var _this = this;
        var user = {
            email: email,
            token: token
        };
        console.log(user);
        return this.http.post('http://localhost:4000/SocialLogIn', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .map(function (response) {
            if (response) {
                console.log("This is response of social log in");
                if (response) {
                    console.log(response);
                    _this.saveLoggedInUser(response.email, response.token, response.fname, response.lname);
                    if (response.phone != undefined) {
                        localStorage.setItem("FirstName", JSON.stringify(response.fname));
                        localStorage.setItem("LastName", JSON.stringify(response.lname));
                        localStorage.setItem("phone", JSON.stringify(response.phone));
                        localStorage.setItem("city", JSON.stringify(response.city));
                        localStorage.setItem("email", JSON.stringify(response.email));
                        localStorage.setItem("bio", JSON.stringify(response.bio));
                        localStorage.setItem("gender", JSON.stringify(response.gender));
                        localStorage.setItem("image", JSON.stringify(response.file));
                    }
                    if (response.phone == undefined) {
                        console.log("came here");
                        localStorage.removeItem("phone");
                        localStorage.removeItem("city");
                        localStorage.removeItem("bio");
                        localStorage.removeItem("gender");
                        localStorage.removeItem('image');
                    }
                }
                return response;
            }
            else {
                rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response);
            }
        }, function (error) {
            console.log(error);
            throw new Error("Error occured while fetching details");
        });
    };
    StorageService.prototype.addSocialProfile = function (fname, lname, phone, city, email, bio, gender, file) {
        var user = {
            fname: fname,
            lname: lname,
            phone: phone,
            city: city,
            email: email,
            bio: bio,
            file: file,
            gender: gender,
            token: JSON.parse(localStorage.getItem('token')),
            loginEmail: JSON.parse(localStorage.getItem('email'))
        };
        console.log(user);
        return this.http.post('http://localhost:4000/SocialProfile', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).map(function (response) {
            if (response) {
                console.log(response);
            }
            else {
                rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(response);
            }
        }, function (error) {
            console.log(error);
            throw new Error("Error occured while fetching details");
        });
    };
    StorageService = StorageService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StorageService);
    return StorageService;
    var StorageService_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/th/Downloads/angular-Assignment-modi/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map