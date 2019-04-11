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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_user_dashboard_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-dashboard/navbar/navbar.component */ "./src/app/components/user-dashboard/navbar/navbar.component.ts");
/* harmony import */ var _components_user_dashboard_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-dashboard/card/card.component */ "./src/app/components/user-dashboard/card/card.component.ts");
/* harmony import */ var _components_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-dashboard/user-dashboard.component */ "./src/app/components/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'dashboard', component: _components_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["UserDashboardComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _components_user_dashboard_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_user_dashboard_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
                _components_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["UserDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.wrapper {\r\n    width: 100%;\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n    height: stretch;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: sans-serif;\r\n    background: rgb(34, 193, 195);\r\n    background: linear-gradient(339deg, rgba(34, 193, 195, .5) 0%, rgba(253, 187, 45, 7) 100%);\r\n}\r\n\r\ndiv.text>h1 {\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    font-weight: 200\r\n}\r\n\r\ndiv.from-controls {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1.2em;\r\n    background-color: #fff;\r\n    border-radius: 7px;\r\n}\r\n\r\n.form-buttons {\r\n    background-color: #3f51b5;\r\n    color: white;\r\n    font-size: 1em;\r\n    letter-spacing: 1.5px\r\n}\r\n\r\ndiv.link {\r\n    text-align: center;\r\n    font-size: 1.1em;\r\n    margin: 10px 0px;\r\n    letter-spacing: .09em\r\n}\r\n\r\ndiv.form-wrap {\r\n    margin: 0px 1.2em;\r\n}\r\n\r\n.icon:hover {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLDhCQUFlO0lBQWYsc0JBQWU7SUFBZixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QiwwRkFBMEY7QUFDOUY7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IHN0cmV0Y2g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzQsIDE5MywgMTk1KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMzlkZWcsIHJnYmEoMzQsIDE5MywgMTk1LCAuNSkgMCUsIHJnYmEoMjUzLCAxODcsIDQ1LCA3KSAxMDAlKTtcclxufVxyXG5cclxuZGl2LnRleHQ+aDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDBcclxufVxyXG5cclxuZGl2LmZyb20tY29udHJvbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxLjJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvbnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4XHJcbn1cclxuXHJcbmRpdi5saW5rIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wOWVtXHJcbn1cclxuXHJcbmRpdi5mb3JtLXdyYXAge1xyXG4gICAgbWFyZ2luOiAwcHggMS4yZW07XHJcbn1cclxuXHJcbi5pY29uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\r\n        <div class='form-wrap'>\r\n            \r\n            <div class='text'>\r\n                <h1>Hey, Login to continue!</h1>\r\n            </div>\r\n    \r\n            <form [formGroup]=\"registrationForm\">\r\n                <div class='from-controls'>\r\n                    <mat-form-field>\r\n                        <input id=\"email\"\r\n                                matInput\r\n                                formControlName=\"email\"\r\n                                [(ngModel)]=\"user.email\"\r\n                                placeholder=\"Enter your email\" />\r\n                    </mat-form-field>\r\n    \r\n                    \r\n                    <mat-form-field>\r\n                        <input id=\"password\"\r\n                                matInput\r\n                                [type]=\"hide ? 'password' : 'text'\"\r\n                                formControlName=\"password\"\r\n                                [(ngModel)]=\"user.password\"\r\n                                placeholder=\"Enter your password\" />\r\n                        <mat-icon class=\"icon\" matSuffix (click)=\"hide = !hide\">\r\n                            {{hide ? 'visibility_off' : 'visibility' }}\r\n                        </mat-icon>\r\n                    </mat-form-field>\r\n    \r\n                    <button class=\"form-buttons\" mat-button type='submit'>Login</button>\r\n                </div>\r\n                <div class='link'>\r\n                    Don't have an account <a routerLink='/register'>Register</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/login.model */ "./src/app/models/login.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.user = new _models_login_model__WEBPACK_IMPORTED_MODULE_2__["LoginModel"]();
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.formBuilder.group({
            email: [this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: [this.user.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]]
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.wrapper{\r\n width:100%;\r\n height: -webkit-fill-available;\r\n height: -moz-available;\r\n height: fill-available;\r\n display: flex;\r\n justify-content: center;\r\n align-items: center;\r\n font-family: sans-serif;\r\nbackground: rgb(34,193,195);\r\nbackground: linear-gradient(339deg, rgba(34,193,195,.5) 0%, rgba(253,187,45,7) 100%);\r\n}\r\n\r\ndiv.text > h1 {\r\n    text-align: center;\r\n    font-size:1.5em;\r\n    font-weight: 200\r\n}\r\n\r\ndiv.from-controls {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1.2em;\r\n    background-color: #fff;\r\n    border-radius: 7px\r\n}\r\n\r\n.form-buttons{\r\n    background-color: #3f51b5;\r\n    color:white;\r\n    font-size:1em;\r\n    letter-spacing: 1.5px\r\n}\r\n\r\ndiv.link {\r\n    text-align: center;\r\n    /* border: 1px solid red; */\r\n    font-size:1.1em;\r\n    margin:10px 0px;\r\n    letter-spacing: .09em\r\n}\r\n\r\ndiv.form-wrap{\r\n    margin:0px 1.2em;\r\n}\r\n\r\n.icon:hover{\r\n    cursor: pointer;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtDQUNWLDhCQUFzQjtDQUF0QixzQkFBc0I7Q0FBdEIsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4QiwyQkFBMkI7QUFDM0Isb0ZBQW9GO0FBQ3BGOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYjtBQUNKOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZUFBZTtJQUNmO0FBQ0o7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0dBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LndyYXBwZXJ7XHJcbiB3aWR0aDoxMDAlO1xyXG4gaGVpZ2h0OiBmaWxsLWF2YWlsYWJsZTtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuYmFja2dyb3VuZDogcmdiKDM0LDE5MywxOTUpO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzM5ZGVnLCByZ2JhKDM0LDE5MywxOTUsLjUpIDAlLCByZ2JhKDI1MywxODcsNDUsNykgMTAwJSk7XHJcbn1cclxuXHJcbmRpdi50ZXh0ID4gaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOjEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMFxyXG59XHJcblxyXG5kaXYuZnJvbS1jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEuMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweFxyXG59XHJcblxyXG4uZm9ybS1idXR0b25ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOjFlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweFxyXG59XHJcbmRpdi5saW5rIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cclxuICAgIGZvbnQtc2l6ZToxLjFlbTtcclxuICAgIG1hcmdpbjoxMHB4IDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMDllbVxyXG59XHJcbmRpdi5mb3JtLXdyYXB7XHJcbiAgICBtYXJnaW46MHB4IDEuMmVtO1xyXG59XHJcbi5pY29uOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICB9Il19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\r\n    <div class='form-wrap'>\r\n        \r\n        <div class='text'>\r\n            <h1>Hello, create an account to continue!</h1>\r\n        </div>\r\n\r\n        <form [formGroup]=\"registrationForm\">\r\n            <div class='from-controls'>\r\n                <mat-form-field class=\"mat-input-field\">\r\n                    <input id=\"name\"\r\n                            matInput \r\n                            formControlName=\"name\"\r\n                            [(ngModel)]=\"user.name\"\r\n                            placeholder=\"Enter your name\" />\r\n                </mat-form-field>\r\n\r\n                \r\n                <mat-form-field>\r\n                    <input id=\"email\"\r\n                            matInput\r\n                            formControlName=\"email\"\r\n                            [(ngModel)]=\"user.email\"\r\n                            placeholder=\"Enter your email\" />\r\n                </mat-form-field>\r\n\r\n                \r\n                <mat-form-field>\r\n                    <input id=\"password\"\r\n                            matInput\r\n                            [type]=\"hide ? 'password' : 'text'\"\r\n                            formControlName=\"password\"\r\n                            [(ngModel)]=\"user.password\"\r\n                            placeholder=\"Enter your password\" />\r\n                    <mat-icon class=\"icon\" matSuffix (click)=\"hide = !hide\">\r\n                        {{hide ? 'visibility_off' : 'visibility' }}\r\n                    </mat-icon>\r\n                </mat-form-field>\r\n\r\n                <button class=\"form-buttons\" mat-button type='submit'>Register</button>\r\n            </div>\r\n            <div class='link'>\r\n                Already have an account <a routerLink='/login'>Login now</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_register_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/register.model */ "./src/app/models/register.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.user = new _models_register_model__WEBPACK_IMPORTED_MODULE_2__["RegisterModel"]();
        this.hide = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.formBuilder.group({
            name: [this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: [this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: [this.user.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]]
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user-dashboard/card/card.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-dashboard/card/card.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1kYXNoYm9hcmQvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user-dashboard/card/card.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user-dashboard/card/card.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title>Shiba Inu</mat-card-title>\r\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n  <mat-card-content>\r\n    <p>\r\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n      bred for hunting.\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button>LIKE</button>\r\n    <button mat-button>SHARE</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/user-dashboard/card/card.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user-dashboard/card/card.component.ts ***!
  \******************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/user-dashboard/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/components/user-dashboard/card/card.component.css")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/user-dashboard/navbar/navbar.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/user-dashboard/navbar/navbar.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\r\n    justify-content: space-between\r\n}\r\n\r\nmat-toolbar > div:last-child {\r\n flex:.2\r\n}\r\n\r\ndiv.links > ul{\r\n    display: flex;\r\n    list-style-type: none;\r\n    justify-content: space-around;\r\n    padding:0;\r\n    margin:0;\r\n\r\n}\r\n\r\ndiv.links li {\r\n    padding: .5rem\r\n}\r\n\r\ndiv.links li:hover {\r\n    background-color: rgba(255,255,255,.2);\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: .3s;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWRhc2hib2FyZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxRQUFROztBQUVaOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItZGFzaGJvYXJkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG59XHJcblxyXG5tYXQtdG9vbGJhciA+IGRpdjpsYXN0LWNoaWxkIHtcclxuIGZsZXg6LjJcclxufVxyXG5cclxuZGl2LmxpbmtzID4gdWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuXHJcbn1cclxuXHJcbmRpdi5saW5rcyBsaSB7XHJcbiAgICBwYWRkaW5nOiAuNXJlbVxyXG59XHJcblxyXG5kaXYubGlua3MgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/user-dashboard/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user-dashboard/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color='primary'>\r\n    <div>\r\n        fOOdies\r\n    </div>\r\n\r\n    <div class='links'>\r\n        <ul>\r\n            <li>Home</li>\r\n            <li>AboutUs</li>\r\n            <li>Services</li>\r\n        </ul>\r\n    </div>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/user-dashboard/navbar/navbar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user-dashboard/navbar/navbar.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/user-dashboard/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/user-dashboard/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/user-dashboard/user-dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/user-dashboard/user-dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n    display: flex;\r\n    background-color: #E9EBEE;\r\n}\r\n\r\n.left-panel {\r\n    flex: 1\r\n}\r\n\r\n.center-panel {\r\n    flex: 1\r\n}\r\n\r\n.right-panel {\r\n    flex: 1\r\n}\r\n\r\n.card {\r\n    margin-bottom: 10px\r\n}\r\n\r\nmat-card-header {\r\n    margin: 0px;\r\n}\r\n\r\nmat-card>p {\r\n    padding: .2em;\r\n    font-size: 1rem;\r\n    background-color: #cfcfcf;\r\n}\r\n\r\nmat-card {\r\n    padding: 0px;\r\n}\r\n\r\ndiv.input-box {\r\n    width: 100%;\r\n    text-align: center\r\n}\r\n\r\ndiv.input-box>input {\r\n    width: 95%;\r\n    padding: 10px 0px;\r\n    font-size: 1.2rem;\r\n    border: none;\r\n    outline: none;\r\n    word-wrap: break-word\r\n}\r\n\r\ndiv.hr-break {\r\n    width: 100%;\r\n}\r\n\r\ndiv.hr-break>hr {\r\n    width: 95%;\r\n    margin: 0px auto;\r\n    border: .4px solid #cfcfcf\r\n}\r\n\r\nmat-card>.mat-card-actions:last-child {\r\n    padding-bottom: 0px;\r\n    margin-bottom: 0px\r\n}\r\n\r\nmat-card-actions>div {\r\n    padding: 0 1rem 0rem 0;\r\n    text-align: right\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUJFRTtcclxufVxyXG5cclxuLmxlZnQtcGFuZWwge1xyXG4gICAgZmxleDogMVxyXG59XHJcblxyXG4uY2VudGVyLXBhbmVsIHtcclxuICAgIGZsZXg6IDFcclxufVxyXG5cclxuLnJpZ2h0LXBhbmVsIHtcclxuICAgIGZsZXg6IDFcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkPnAge1xyXG4gICAgcGFkZGluZzogLjJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmNmY2Y7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuZGl2LmlucHV0LWJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG5kaXYuaW5wdXQtYm94PmlucHV0IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZFxyXG59XHJcblxyXG5kaXYuaHItYnJlYWsge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5oci1icmVhaz5ociB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGJvcmRlcjogLjRweCBzb2xpZCAjY2ZjZmNmXHJcbn1cclxuXHJcbm1hdC1jYXJkPi5tYXQtY2FyZC1hY3Rpb25zOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweFxyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25zPmRpdiB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMHJlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user-dashboard/user-dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/user-dashboard/user-dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\r\n    <navbar></navbar>\r\n\r\n    <div class=\"body\">\r\n        <div class=\"left-panel\">\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n        </div>\r\n\r\n        <div class=\"center-panel\">\r\n            <div class=\"card\">\r\n                <mat-card>\r\n                    <p>Create Post</p>\r\n                    <mat-card-content>\r\n                        <div class=\"input-box\">\r\n                            <input placeholder=\"Whats in your head ?\" />\r\n                        </div>\r\n                    </mat-card-content>\r\n                    <div class=\"hr-break\">\r\n                        <hr />\r\n                    </div>\r\n                    <mat-card-actions>\r\n                        <div><button mat-button>Share</button></div>\r\n                    </mat-card-actions>\r\n                </mat-card>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                <card></card>\r\n            </div>\r\n            <div class=\"card\">\r\n                <card></card>\r\n            </div>\r\n            <div class=\"card\">\r\n                <card></card>\r\n            </div>\r\n            <div class=\"card\">\r\n                <card></card>\r\n            </div>\r\n            <div class=\"card\">\r\n                <card></card>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"right-panel\">\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/user-dashboard/user-dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/user-dashboard/user-dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/components/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/components/user-dashboard/user-dashboard.component.css")]
        })
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/models/login.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/login.model.ts ***!
  \***************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/models/register.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/register.model.ts ***!
  \******************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
var RegisterModel = /** @class */ (function () {
    function RegisterModel() {
    }
    return RegisterModel;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular 6\mysite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map