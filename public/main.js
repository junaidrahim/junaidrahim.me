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

module.exports = "<div>\n  <h1 style=\"font-size: 70px; font-weight: 900; font-family: 'Prompt', sans-serif; position: relative; z-index: 10\">Title</h1>\n</div>\n\n<app-blog></app-blog>\n<app-resume></app-resume>\n<app-contact></app-contact>"

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
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
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
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"]
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

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: \"NunitoSans-Bold\";\n    src: url('NunitoSans-Bold.ttf');\n}\n\n@font-face {\n    font-family: \"NunitoSans-Black\";\n    src: url('NunitoSans-Black.ttf');\n}\n\n@font-face {\n    font-family: \"NunitoSans-Light\";\n    src: url('NunitoSans-Light.ttf');\n}\n\n@font-face {\n    font-family: \"Caveat\";\n    src: url('Caveat-Regular.ttf');\n}\n\n.blog_container {\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n.blog_container .system_container {\n\tbackground: white;\n\theight: 450px;\n}\n\n.blog_container .system_container h1 {\n\tmargin: 0px;\n\ttext-align: center;\n\tpadding: 30px;\n\tpadding-bottom: 10px;\n\tfont-size: 70px;\n\tfont-family: \"NunitoSans-Bold\", sans-serif;\n\tz-index: 2;\n}\n\n.blog_container .system_container h3.quote {\n\tposition: relative;\n\ttext-align: center;\n\tfont-size: 35px;\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n\tfont-family: \"NunitoSans-Light\", sans-serif;\n\tz-index: 2;\n}\n\n/*############# BLOG #################*/\n\n.blog_container .blog_link_container {\n\tposition: relative;\n\tbackground: #e1f5fe;\t\n\theight: 500px;\n}\n\n.blog_container .blog_link_container h1 {\n\tposition: relative;\n\tmargin-top: 30px;\n\tmargin-left: 80px;\n\tmargin-bottom: 0px;\n\tmargin-right: 40px;\n\tpadding: 0px;\n\tfont-size: 70px;\n\tfont-family: \"NunitoSans-Bold\", sans-serif;\n\tz-index: 2;\n}\n\n.blog_container .blog_link_container p.quote {\n\tposition: relative;\n\tmargin-top: 5px;\n\tmargin-left: 80px;\n\tmargin-bottom: 0px;\n\tmargin-right: 40px;\n\tpadding: 0px;\n\tfont-size: 35px;\n\tfont-family: \"Caveat\", cursive;\n\tz-index: 2;\n}\n\n.blog_container .blog_link_container p.blog_intro {\n\tposition: relative;\n\tmargin-top: 5px;\n\tmargin-left: 80px;\n\tmargin-right: 20px;\n\tmargin-bottom: 50px;\n\tpadding: 0px;\n\tfont-size: 45px;\n\tfont-family: \"Caveat\", cursive;\n\tz-index: 2;\n}\n\n.blog_container .blog_link_container .blog_link_container__bg {\n\tposition: absolute;\n \ttop: 0px;\n  \tbottom: 0;\n \tright: 0px;\n  \tleft: 0px;\n  \twidth: 100%;\n  \theight: auto;\n  \tbackground-color: #b3e5fc;\n  \t-webkit-transform: skewY(-15deg);\n  \t        transform: skewY(-15deg);\n  \t-webkit-transform-origin: top left;\n  \t        transform-origin: top left;\n  \tz-index: 1;\n}\n\n.blog_container .blog_link_container a {\n\tposition: relative;\n\tborder-radius: 8px;\n\tfont-family: \"NunitoSans-Bold\", sans-serif;\n\tbackground-color: #ff1744;\n\tborder: none;\n\tcolor: #FFFFFF;\n\tmargin: 30px;\n\tmargin-left: 80px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tfont-size: 20px;\n\tpadding: 20px;\n\twidth: 200px;\n\ttransition: 0.6s;\n\tz-index: 2;\n}\n\n.blog_container .blog_link_container a:hover {\n\tbackground-color: #d50000; \n}\n\n/*   MOBILE    */\n\n@media screen and (max-width: 800px) {\n\t.blog_container .blog_link_container {\t\n\t\theight: 650px;\n\t}\n\n\t.blog_container .system_container {\n\t\theight: 520px;\n\t}\n}\n\n@media screen and (max-width: 600px) {\n\n\t.blog_container .blog_link_container {\t\n\t\theight: 750px;\n\t}\n\n\t.blog_container .blog_link_container h1 {\n\t\tmargin-left: 50px;\n\t\tfont-family: \"NunitoSans-Black\", sans-serif;\n\t\tfont-size: 60px;\n\t}\n\n\t.blog_container .blog_link_container p.quote {\n\t\tmargin-top: 20px;\n\t\tmargin-left: 50px;\n\t\tfont-size: 35px;\n\t}\n\n\t.blog_container .blog_link_container p.blog_intro {\n\t\tmargin-top: 20px;\n\t\tmargin-left: 50px;\n\t\tfont-size: 35px;\n\t}\n\n\t.blog_container .blog_link_container .blog_link_container__bg {\n\t\t-webkit-transform: skewY(-20deg);\n\t\t        transform: skewY(-20deg);\n\t}\n\n\t.blog_container .blog_link_container a {\n\t\ttext-align: center;\n\t\tmargin-left: 50px;\n\t}\n\n\t.blog_container .system_container {\n\t\theight: 570px;\n\t}\n\n\t.blog_container .system_container h1 {\n\t\tfont-size: 55px;\n\t\tfont-family: \"NunitoSans-Black\", sans-serif;\n\t}\n\t.blog_container .system_container h3.quote {\n\t\tfont-size: 30px;\n\t\tpadding-left: 15px;\n\t\tpadding-right: 15px;\n\t}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0NBQTZDO0NBQ2hEOztBQUVEO0lBQ0ksZ0NBQWdDO0lBQ2hDLGlDQUE4QztDQUNqRDs7QUFFRDtJQUNJLGdDQUFnQztJQUNoQyxpQ0FBOEM7Q0FDakQ7O0FBR0Q7SUFDSSxzQkFBc0I7SUFDdEIsK0JBQTRDO0NBQy9DOztBQUVEO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2Q7O0FBRUQ7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLDJDQUEyQztDQUMzQyxXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLDRDQUE0QztDQUM1QyxXQUFXO0NBQ1g7O0FBR0Qsd0NBQXdDOztBQUV4QztDQUNDLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLDJDQUEyQztDQUMzQyxXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsK0JBQStCO0NBQy9CLFdBQVc7Q0FDWDs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQiwrQkFBK0I7Q0FDL0IsV0FBVztDQUNYOztBQUVEO0NBQ0MsbUJBQW1CO0VBQ2xCLFNBQVM7R0FDUixVQUFVO0VBQ1gsV0FBVztHQUNWLFVBQVU7R0FDVixZQUFZO0dBQ1osYUFBYTtHQUNiLDBCQUEwQjtHQUMxQixpQ0FBeUI7V0FBekIseUJBQXlCO0dBQ3pCLG1DQUEyQjtXQUEzQiwyQkFBMkI7R0FDM0IsV0FBVztDQUNiOztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQiwyQ0FBMkM7Q0FDM0MsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixlQUFlO0NBQ2YsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1g7O0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUI7O0FBSUQsaUJBQWlCOztBQUVqQjtDQUNDO0VBQ0MsY0FBYztFQUNkOztDQUVEO0VBQ0MsY0FBYztFQUNkO0NBQ0Q7O0FBRUQ7O0NBRUM7RUFDQyxjQUFjO0VBQ2Q7O0NBRUQ7RUFDQyxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGdCQUFnQjtFQUNoQjs7Q0FFRDtFQUNDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCOztDQUVEO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEI7O0NBRUQ7RUFDQyxpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCOztDQUVEO0VBQ0MsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQjs7Q0FFRDtFQUNDLGNBQWM7RUFDZDs7Q0FFRDtFQUNDLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUM7Q0FDRDtFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCOztDQUVEIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUJvbGRcIjtcbiAgICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9OdW5pdG9TYW5zLUJvbGQudHRmXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUJsYWNrXCI7XG4gICAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvTnVuaXRvU2Fucy1CbGFjay50dGZcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1NhbnMtTGlnaHRcIjtcbiAgICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9OdW5pdG9TYW5zLUxpZ2h0LnR0ZlwiKTtcbn1cblxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJDYXZlYXRcIjtcbiAgICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9DYXZlYXQtUmVndWxhci50dGZcIik7XG59XG5cbi5ibG9nX2NvbnRhaW5lciB7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHg7XG59XG5cbi5ibG9nX2NvbnRhaW5lciAuc3lzdGVtX2NvbnRhaW5lciB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRoZWlnaHQ6IDQ1MHB4O1xufVxuXG4uYmxvZ19jb250YWluZXIgLnN5c3RlbV9jb250YWluZXIgaDEge1xuXHRtYXJnaW46IDBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nOiAzMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0Zm9udC1zaXplOiA3MHB4O1xuXHRmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUJvbGRcIiwgc2Fucy1zZXJpZjtcblx0ei1pbmRleDogMjtcbn1cblxuLmJsb2dfY29udGFpbmVyIC5zeXN0ZW1fY29udGFpbmVyIGgzLnF1b3RlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMzVweDtcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHRmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUxpZ2h0XCIsIHNhbnMtc2VyaWY7XG5cdHotaW5kZXg6IDI7XG59XG5cblxuLyojIyMjIyMjIyMjIyMjIEJMT0cgIyMjIyMjIyMjIyMjIyMjIyMqL1xuXG4uYmxvZ19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJhY2tncm91bmQ6ICNlMWY1ZmU7XHRcblx0aGVpZ2h0OiA1MDBweDtcbn1cblxuLmJsb2dfY29udGFpbmVyIC5ibG9nX2xpbmtfY29udGFpbmVyIGgxIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRtYXJnaW4tbGVmdDogODBweDtcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XG5cdHBhZGRpbmc6IDBweDtcblx0Zm9udC1zaXplOiA3MHB4O1xuXHRmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUJvbGRcIiwgc2Fucy1zZXJpZjtcblx0ei1pbmRleDogMjtcbn1cblxuLmJsb2dfY29udGFpbmVyIC5ibG9nX2xpbmtfY29udGFpbmVyIHAucXVvdGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG1hcmdpbi10b3A6IDVweDtcblx0bWFyZ2luLWxlZnQ6IDgwcHg7XG5cdG1hcmdpbi1ib3R0b206IDBweDtcblx0bWFyZ2luLXJpZ2h0OiA0MHB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdGZvbnQtc2l6ZTogMzVweDtcblx0Zm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XG5cdHotaW5kZXg6IDI7XG59XG5cbi5ibG9nX2NvbnRhaW5lciAuYmxvZ19saW5rX2NvbnRhaW5lciBwLmJsb2dfaW50cm8ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG1hcmdpbi10b3A6IDVweDtcblx0bWFyZ2luLWxlZnQ6IDgwcHg7XG5cdG1hcmdpbi1yaWdodDogMjBweDtcblx0bWFyZ2luLWJvdHRvbTogNTBweDtcblx0cGFkZGluZzogMHB4O1xuXHRmb250LXNpemU6IDQ1cHg7XG5cdGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiLCBjdXJzaXZlO1xuXHR6LWluZGV4OiAyO1xufVxuXG4uYmxvZ19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXJfX2JnIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuIFx0dG9wOiAwcHg7XG4gIFx0Ym90dG9tOiAwO1xuIFx0cmlnaHQ6IDBweDtcbiAgXHRsZWZ0OiAwcHg7XG4gIFx0d2lkdGg6IDEwMCU7XG4gIFx0aGVpZ2h0OiBhdXRvO1xuICBcdGJhY2tncm91bmQtY29sb3I6ICNiM2U1ZmM7XG4gIFx0dHJhbnNmb3JtOiBza2V3WSgtMTVkZWcpO1xuICBcdHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICBcdHotaW5kZXg6IDE7XG59XG5cbi5ibG9nX2NvbnRhaW5lciAuYmxvZ19saW5rX2NvbnRhaW5lciBhIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGZvbnQtZmFtaWx5OiBcIk51bml0b1NhbnMtQm9sZFwiLCBzYW5zLXNlcmlmO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0O1xuXHRib3JkZXI6IG5vbmU7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRtYXJnaW46IDMwcHg7XG5cdG1hcmdpbi1sZWZ0OiA4MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRwYWRkaW5nOiAyMHB4O1xuXHR3aWR0aDogMjAwcHg7XG5cdHRyYW5zaXRpb246IDAuNnM7XG5cdHotaW5kZXg6IDI7XG59XG5cbi5ibG9nX2NvbnRhaW5lciAuYmxvZ19saW5rX2NvbnRhaW5lciBhOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2Q1MDAwMDsgXG59XG5cblxuXG4vKiAgIE1PQklMRSAgICAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuXHQuYmxvZ19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXIge1x0XG5cdFx0aGVpZ2h0OiA2NTBweDtcblx0fVxuXG5cdC5ibG9nX2NvbnRhaW5lciAuc3lzdGVtX2NvbnRhaW5lciB7XG5cdFx0aGVpZ2h0OiA1MjBweDtcblx0fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG5cdC5ibG9nX2NvbnRhaW5lciAuYmxvZ19saW5rX2NvbnRhaW5lciB7XHRcblx0XHRoZWlnaHQ6IDc1MHB4O1xuXHR9XG5cblx0LmJsb2dfY29udGFpbmVyIC5ibG9nX2xpbmtfY29udGFpbmVyIGgxIHtcblx0XHRtYXJnaW4tbGVmdDogNTBweDtcblx0XHRmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUJsYWNrXCIsIHNhbnMtc2VyaWY7XG5cdFx0Zm9udC1zaXplOiA2MHB4O1xuXHR9XG5cblx0LmJsb2dfY29udGFpbmVyIC5ibG9nX2xpbmtfY29udGFpbmVyIHAucXVvdGUge1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0bWFyZ2luLWxlZnQ6IDUwcHg7XG5cdFx0Zm9udC1zaXplOiAzNXB4O1xuXHR9XG5cblx0LmJsb2dfY29udGFpbmVyIC5ibG9nX2xpbmtfY29udGFpbmVyIHAuYmxvZ19pbnRybyB7XG5cdFx0bWFyZ2luLXRvcDogMjBweDtcblx0XHRtYXJnaW4tbGVmdDogNTBweDtcblx0XHRmb250LXNpemU6IDM1cHg7XG5cdH1cblxuXHQuYmxvZ19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXJfX2JnIHtcblx0XHR0cmFuc2Zvcm06IHNrZXdZKC0yMGRlZyk7XG5cdH1cblxuXHQuYmxvZ19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXIgYSB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbi1sZWZ0OiA1MHB4O1xuXHR9XG5cblx0LmJsb2dfY29udGFpbmVyIC5zeXN0ZW1fY29udGFpbmVyIHtcblx0XHRoZWlnaHQ6IDU3MHB4O1xuXHR9XG5cblx0LmJsb2dfY29udGFpbmVyIC5zeXN0ZW1fY29udGFpbmVyIGgxIHtcblx0XHRmb250LXNpemU6IDU1cHg7XG5cdFx0Zm9udC1mYW1pbHk6IFwiTnVuaXRvU2Fucy1CbGFja1wiLCBzYW5zLXNlcmlmO1xuXHR9XG5cdC5ibG9nX2NvbnRhaW5lciAuc3lzdGVtX2NvbnRhaW5lciBoMy5xdW90ZSB7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdHBhZGRpbmctbGVmdDogMTVweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuXHR9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog_container\">\n\n\t<div class=\"system_container\">\n\t\t<h1>My System</h1>\n\t\t<h3 class=\"quote\">\"Chase Passion, not Paychecks\"</h3>\n\t\t<h3 class=\"quote\">\"Only I can change my life\"</h3>\n\t\t<h3 class=\"quote\">\"With the new day comes new strength and new thoughts.\"</h3>\n\t</div>\n\n\t<div class=\"blog_link_container\">\n\t\t<div class=\"blog_link_container__bg\"></div>\n\t\t<h1>My Blog</h1>\n\n\t\t<p class=\"quote\">\"There is no greater agony than bearing an untold story inside you.\"<br>  ― Maya Angelou</p>\n\t\t<br>\n\t\t<p class=\"blog_intro\">I mostly write about Tech, Programming, Open Source and other stuff that excites me. <br> Come have a look on how I see this world :-)</p>\n\n\t\t<a href=\"#\">Visit My Blog</a>\n\t\t<br><br>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
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

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: \"NunitoSans-Bold\";\n    src: url('NunitoSans-Bold.ttf');\n}\n\n@font-face {\n\tfont-family: \"NunitoSans-Light\";\n\tsrc: url('NunitoSans-Light.ttf');\n}\n\n.contact_container {\n\twidth: 100%;\n\tbackground-color: #212121;\n\tmargin: 0px;\n\tpadding: 0px;\n\tpadding-top: 30px;\n}\n\n.contact_container h1 {\n\tfont-family: \"NunitoSans-Bold\", sans-serif;\n\tfont-size: 60px;\n\tcolor: white;\n\tmargin: 0px;\n\tpadding: 10px;\n\tpadding-left: 40px;\n\tpadding-bottom: 0px;\n}\n\n.contact_container h3 {\n\tcolor: white;\n\tmargin: 0px;\n\tpadding: 10px;\n\tpadding-left: 45px;\n\tfont-size: 30px;\n\tfont-family: \"NunitoSans-Light\", sans-serif;\n}\n\n.contact_container .icon_container .icon {\n\twidth: 96px;\n\theight: 96px;\n\tmargin: 20px;\n}\n\n.contact_container .copyright {\n\tcolor: white;\n\tfont-family: \"NunitoSans-Light\", sans-serif;\n\ttext-align: center;\n\tmargin: 0px;\n}\n\n/*####  MOBILE   #####*/\n\n@media screen and (max-width: 600px) {\n\t.contact_container h1 {\n\t\tfont-size: 40px;\n\t\ttext-align: center;\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t\tpadding-top: 0px;\n\t\tpadding-bottom: 10px;\n\t}\n\n\t.contact_container h3 {\n\t\tfont-size: 20px;\n\t\ttext-align: center;\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t\tpadding-top: 0px;\n\t\tpadding-bottom: 10px;\n\t}\n\n\t.contact_container .icon_container .icon{\n\t\twidth: 60px;\n\t\theight: 60px;\n\t\tmargin: 10px;\n\t}\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0NBQTZDO0NBQ2hEOztBQUVEO0NBQ0MsZ0NBQWdDO0NBQ2hDLGlDQUE4QztDQUM5Qzs7QUFFRDtDQUNDLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEI7O0FBRUQ7Q0FDQywyQ0FBMkM7Q0FDM0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixZQUFZO0NBQ1osY0FBYztDQUNkLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEI7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLDRDQUE0QztDQUM1Qzs7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTtDQUNiOztBQUVEO0NBQ0MsYUFBYTtDQUNiLDRDQUE0QztDQUM1QyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaOztBQUVELHdCQUF3Qjs7QUFFeEI7Q0FDQztFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCOztDQUVEO0VBQ0MsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckI7O0NBRUQ7RUFDQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUJvbGRcIjtcbiAgICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9OdW5pdG9TYW5zLUJvbGQudHRmXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiTnVuaXRvU2Fucy1MaWdodFwiO1xuXHRzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9OdW5pdG9TYW5zLUxpZ2h0LnR0ZlwiKTtcbn1cblxuLmNvbnRhY3RfY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAwcHg7XG5cdHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uY29udGFjdF9jb250YWluZXIgaDEge1xuXHRmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUJvbGRcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiA2MHB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdG1hcmdpbjogMHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5jb250YWN0X2NvbnRhaW5lciBoMyB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0bWFyZ2luOiAwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHBhZGRpbmctbGVmdDogNDVweDtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUxpZ2h0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWN0X2NvbnRhaW5lciAuaWNvbl9jb250YWluZXIgLmljb24ge1xuXHR3aWR0aDogOTZweDtcblx0aGVpZ2h0OiA5NnB4O1xuXHRtYXJnaW46IDIwcHg7XG59XG5cbi5jb250YWN0X2NvbnRhaW5lciAuY29weXJpZ2h0IHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUxpZ2h0XCIsIHNhbnMtc2VyaWY7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luOiAwcHg7XG59XG5cbi8qIyMjIyAgTU9CSUxFICAgIyMjIyMqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXHQuY29udGFjdF9jb250YWluZXIgaDEge1xuXHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZy1sZWZ0OiAwcHg7XG5cdFx0cGFkZGluZy1yaWdodDogMHB4O1xuXHRcdHBhZGRpbmctdG9wOiAwcHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdH1cblxuXHQuY29udGFjdF9jb250YWluZXIgaDMge1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZy1sZWZ0OiAwcHg7XG5cdFx0cGFkZGluZy1yaWdodDogMHB4O1xuXHRcdHBhZGRpbmctdG9wOiAwcHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdH1cblxuXHQuY29udGFjdF9jb250YWluZXIgLmljb25fY29udGFpbmVyIC5pY29ue1xuXHRcdHdpZHRoOiA2MHB4O1xuXHRcdGhlaWdodDogNjBweDtcblx0XHRtYXJnaW46IDEwcHg7XG5cdH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"contact_container\">\n  <h1>Contact Me</h1>\n  <h3>Let's get in touch.</h3>\n  <div class=\"icon_container\" style=\"text-align: center;\">\n  \t<a title=\"github.com/junaidrahim\" href=\"https://www.github.com/junaidrahim\" target=\"_blank\"><img class=\"icon\" src=\"../../assets/icons/github_icon.png\"></a>\n\n  \t<a title=\"junaidrahim5a@gmail.com\" href=\"mailto:junaidrahim5a@gmail.com\" target=\"_blank\"><img class=\"icon\" src=\"../../assets/icons/gmail_icon.png\"></a>\n\n  \t<a title=\"instagram.com/junaidrahim31\" href=\"https://www.instagram.com/junaidrahim31\" target=\"_blank\"><img class=\"icon\" src=\"../../assets/icons/instagram_icon.png\"></a>\n\n  \t<a title=\"\" href=\"\" target=\"_blank\"><img class=\"icon\" style=\"margin-left: 5px;\" src=\"../../assets/icons/linkedin_icon.png\"></a>\n\n  \t<br>\n  </div>\n\n\n\n  <p class=\"copyright\">&#xa9; Junaid H Rahim. All Rights Reserved</p><br>\n</div>"

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

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: \"NunitoSans-Bold\";\n    src: url('NunitoSans-Bold.ttf');\n}\n\n.resume_container {\n\tmargin: 0px;\n\tpadding: 50px;\n\ttext-align: center;\n\tbackground-color: #e1f5fe;\n}\n\n.resume_container a {\n\ttext-decoration: none;\n}\n\n.button {\n  border-radius: 8px;\n  font-family: \"NunitoSans-Bold\", sans-serif;\n  background-color: #0288d1;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 30px;\n  padding: 20px;\n  width: 200px;\n  transition: all 0.5s;\n  margin: 5px;\n}\n\n.button span {\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n\n.button span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.button:hover span {\n  padding-right: 25px;\n}\n\n.button:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n/* MOBILE*/\n\n@media screen and (max-width: 600px) {\n\n\t.button {\n\t\tfont-size: 21px;\n\t}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLGdDQUE2QztDQUNoRDs7QUFFRDtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0MsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLE9BQU87RUFDUCxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsV0FBVztFQUNYLFNBQVM7Q0FDVjs7QUFHRCxXQUFXOztBQUVYOztDQUVDO0VBQ0MsZ0JBQWdCO0VBQ2hCOztDQUVEIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvU2Fucy1Cb2xkXCI7XG4gICAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvTnVuaXRvU2Fucy1Cb2xkLnR0ZlwiKTtcbn1cblxuLnJlc3VtZV9jb250YWluZXIge1xuXHRtYXJnaW46IDBweDtcblx0cGFkZGluZzogNTBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmNWZlO1xufVxuXG4ucmVzdW1lX2NvbnRhaW5lciBhIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9TYW5zLUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyODhkMTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYnV0dG9uIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogJ1xcMDBiYic7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xufVxuXG5cbi8qIE1PQklMRSovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cblx0LmJ1dHRvbiB7XG5cdFx0Zm9udC1zaXplOiAyMXB4O1xuXHR9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resume_container\">\n\t<a href=\"\" target=\"_blank\" class=\"button\"><span>Download my Resume</span></a>\n</div>"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
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

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
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