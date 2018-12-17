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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<div>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif;\">Title</h1>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif;\">Title</h1>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif;\">Title</h1>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif;\">Title</h1>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif;\">Title</h1>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif;\">Title</h1>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif;\">Title</h1>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif;\">Title</h1>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif;\">Title</h1>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif;\">Title</h1>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif;\">Title</h1>\n\n</div>\n\n<app-contact></app-contact>"

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
        this.title = 'frontend';
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: \"NunitoSans-Black\";\n    src: url('NunitoSans-Bold.ttf');\n}\n\n@font-face {\n\tfont-family: \"NunitoSans-Light\";\n\tsrc: url('NunitoSans-Light.ttf');\n}\n\n.contact_container {\n\twidth: 100%;\n\tbackground-color: #262C41;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n.contact_container h1 {\n\tfont-family: \"NunitoSans-Black\", sans-serif;\n\tfont-size: 60px;\n\tcolor: white;\n\tmargin: 0px;\n\tpadding: 10px;\n\tpadding-left: 40px;\n\tpadding-bottom: 0px;\n}\n\n.contact_container h3 {\n\tcolor: white;\n\tmargin: 0px;\n\tpadding: 10px;\n\tpadding-left: 45px;\n\tfont-size: 30px;\n\tfont-family: \"NunitoSans-Light\", sans-serif;\n}\n\n.contact_container .icon_container .icon {\n\twidth: 96px;\n\theight: 96px;\n\tmargin: 20px;\n}\n\n.contact_container .copyright {\n\tcolor: white;\n\tfont-family: \"NunitoSans-Light\", sans-serif;\n\ttext-align: center;\n\tmargin: 0px;\n}\n\n/*####  MOBILE   #####*/\n\n@media screen and (max-width: 600px) {\n\t.contact_container h1 {\n\t\tfont-size: 40px;\n\t\ttext-align: center;\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t\tpadding-top: 20px;\n\t\tpadding-bottom: 10px;\n\t}\n\n\t.contact_container h3 {\n\t\tfont-size: 20px;\n\t\ttext-align: center;\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t\tpadding-top: 0px;\n\t\tpadding-bottom: 10px;\n\t}\n\n\t.contact_container .icon_container .icon{\n\t\twidth: 70px;\n\t\theight: 70px;\n\t\tmargin: 10px;\n\t}\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0NBQTZDO0NBQ2hEOztBQUVEO0NBQ0MsZ0NBQWdDO0NBQ2hDLGlDQUE4QztDQUM5Qzs7QUFFRDtDQUNDLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsWUFBWTtDQUNaLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLDRDQUE0QztDQUM1QyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLFlBQVk7Q0FDWixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQjs7QUFFRDtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osY0FBYztDQUNkLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsNENBQTRDO0NBQzVDOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsNENBQTRDO0NBQzVDLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1o7O0FBRUQsd0JBQXdCOztBQUV4QjtDQUNDO0VBQ0MsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckI7O0NBRUQ7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQjs7Q0FFRDtFQUNDLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiO0NBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1NhbnMtQmxhY2tcIjtcbiAgICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9OdW5pdG9TYW5zLUJvbGQudHRmXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiTnVuaXRvU2Fucy1MaWdodFwiO1xuXHRzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9OdW5pdG9TYW5zLUxpZ2h0LnR0ZlwiKTtcbn1cblxuLmNvbnRhY3RfY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyNjJDNDE7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHg7XG59XG5cbi5jb250YWN0X2NvbnRhaW5lciBoMSB7XG5cdGZvbnQtZmFtaWx5OiBcIk51bml0b1NhbnMtQmxhY2tcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiA2MHB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5jb250YWN0X2NvbnRhaW5lciBoMyB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0bWFyZ2luOiAwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHBhZGRpbmctbGVmdDogNDVweDtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUxpZ2h0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWN0X2NvbnRhaW5lciAuaWNvbl9jb250YWluZXIgLmljb24ge1xuXHR3aWR0aDogOTZweDtcblx0aGVpZ2h0OiA5NnB4O1xuXHRtYXJnaW46IDIwcHg7XG59XG5cbi5jb250YWN0X2NvbnRhaW5lciAuY29weXJpZ2h0IHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUxpZ2h0XCIsIHNhbnMtc2VyaWY7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luOiAwcHg7XG59XG5cbi8qIyMjIyAgTU9CSUxFICAgIyMjIyMqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXHQuY29udGFjdF9jb250YWluZXIgaDEge1xuXHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZy1sZWZ0OiAwcHg7XG5cdFx0cGFkZGluZy1yaWdodDogMHB4O1xuXHRcdHBhZGRpbmctdG9wOiAyMHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHR9XG5cblx0LmNvbnRhY3RfY29udGFpbmVyIGgzIHtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHBhZGRpbmctbGVmdDogMHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDBweDtcblx0XHRwYWRkaW5nLXRvcDogMHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHR9XG5cblx0LmNvbnRhY3RfY29udGFpbmVyIC5pY29uX2NvbnRhaW5lciAuaWNvbntcblx0XHR3aWR0aDogNzBweDtcblx0XHRoZWlnaHQ6IDcwcHg7XG5cdFx0bWFyZ2luOiAxMHB4O1xuXHR9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact_container\">\n  <h1>Contact Me</h1>\n  <h3>Let's get in touch.</h3>\n  <div class=\"icon_container\" style=\"text-align: center;\">\n  \t<a title=\"github.com/junaidrahim\" href=\"https://www.github.com/junaidrahim\" target=\"_blank\"><img class=\"icon\" src=\"../../assets/icons/github_icon.png\"></a>\n\n  \t<a title=\"junaidrahim5a@gmail.com\" href=\"mailto:junaidrahim5a@gmail.com\" target=\"_blank\"><img class=\"icon\" src=\"../../assets/icons/gmail_icon.png\"></a>\n\n  \t<a title=\"instagram.com/junaidrahim31\" href=\"https://www.instagram.com/junaidrahim31\" target=\"_blank\"><img class=\"icon\" src=\"../../assets/icons/instagram_icon.png\"></a>\n\n  \t<a title=\"\" href=\"\" target=\"_blank\"><img class=\"icon\" style=\"margin-left: 5px;\" src=\"../../assets/icons/linkedin_icon.png\"></a>\n\n  \t<br>\n  </div>\n  <p class=\"copyright\">&#xa9; Junaid H Rahim. All Rights Reserved</p><br>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
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

module.exports = __webpack_require__(/*! /home/junaid/Code/junaidrahim.me/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map