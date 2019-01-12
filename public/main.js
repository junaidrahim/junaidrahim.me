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

module.exports = "\n<!-- <app-technologies></app-technologies> -->\n<app-projects></app-projects>\n<app-blog></app-blog>\n<app-resume></app-resume>\n<app-contact></app-contact>"

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
/* harmony import */ var _technologies_technologies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./technologies/technologies.component */ "./src/app/technologies/technologies.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
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
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"],
                _technologies_technologies_component__WEBPACK_IMPORTED_MODULE_7__["TechnologiesComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"]
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

module.exports = ".blog_container {\n    margin: 0rem;\n    padding: 0rem;\n}\n\n.blog_container .system_container {\n    background: white;\n    height: 28rem;\n    width: 100%;\n}\n\n.blog_container .system_container h1 {\n    position: relative;\n    margin: 0rem;\n    text-align: center;\n    padding: 2rem;\n    padding-bottom: 1rem;\n    font-size: 5rem;\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 800;\n    z-index: 2;\n}\n\n.blog_container .system_container h3.quote {\n    position: relative;\n    text-align: center;\n    font-size: 2rem;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 300;\n    z-index: 2;\n}\n\n/*############# BLOG #################*/\n\n.blog_container .blog_link_container {\n    position: relative;\n    background: #f5f5f5;\t\n    height: 34rem;\n    width: 100%;\n}\n\n.blog_container .blog_link_container h1 {\n    position: relative;\n    margin-top: 2rem;\n    margin-left: 5rem;\n    margin-bottom: 0rem;\n    margin-right: 4.5rem;\n    padding: 0rem;\n    font-size: 4.7rem;\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 800;\n    z-index: 2;\n}\n\n.blog_container .blog_link_container p.quote {\n    position: relative;\n    margin-top: 1rem;\n    margin-left: 5rem;\n    margin-bottom: 0px;\n    margin-right: 3rem;\n    padding: 0rem;\n    font-size: 2.3rem;\n    font-family: \"Caveat\", cursive;\n    font-weight: 400;\n    z-index: 2;\n}\n\n.blog_container .blog_link_container p.blog_intro {\n    position: relative;\n    margin-top: 0.6rem;\n    margin-left: 5rem;\n    margin-right: 2rem;\n    margin-bottom: 3rem;\n    padding: 0rem;\n    font-size: 2.6rem;\n    font-family: \"Caveat\", cursive;\n    font-weight: 400;\n    z-index: 2;\n}\n\n.blog_container .blog_link_container .blog_link_container__bg {\n    position: absolute;\n    top: 0rem;\n    bottom: 0rem;\n    right: 0rem;\n    left: 0rem;\n    width: 100%;\n    height: auto;\n    background-color: #b3e5fc;\n    -webkit-transform: skewY(-15deg);\n            transform: skewY(-15deg);\n    -webkit-transform-origin: top left;\n            transform-origin: top left;\n    z-index: 1;\n}\n\n.blog_container .blog_link_container a {\n    position: relative;\n    border-radius: 0.6rem;\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 700;\n    background-color: #ff1744;\n    border: none;\n    color: #FFFFFF;\n    margin: 2rem;\n    margin-left: 5rem;\n    text-align: center;\n    text-decoration: none;\n    font-size: 1.6rem;\n    padding: 1.3rem;\n    width: 10rem;\n    transition: 0.6s;\n    z-index: 2;\n}\n\n.blog_container .blog_link_container a:hover {\n    background-color: #d50000; \n}\n\n/*   MOBILE    */\n\n@media screen and (max-width: 800px) {\n    .blog_container .blog_link_container {\t\n        height: 42rem;\n    }   \n    .blog_container .system_container {\n        height: 520px;\n    }\n}\n\n@media screen and (max-width: 600px) {\n\n    .blog_container .blog_link_container {\t\n        height: 51rem;\n    }\n\n    .blog_container .blog_link_container h1 {\n        margin-left: 2.4rem;\n        font-family: \"Nunito Sans\", sans-serif;\n        font-weight: 900;\n        font-size: 3.3rem;\n        padding-top: 2rem;\n    }\n\n    .blog_container .blog_link_container p.quote {\n        margin-top: 1.5rem;\n        margin-left: 2.4rem;\n        font-size: 2.1rem;\n    }\n\n    .blog_container .blog_link_container p.blog_intro {\n        margin-top: 1.5rem;\n        margin-left: 2.4rem;\n        font-size: 2.1rem;\n    }\n\n    .blog_container .blog_link_container .blog_link_container__bg {\n        -webkit-transform: skewY(-20deg);\n                transform: skewY(-20deg);\n    }\n\n    .blog_container .blog_link_container a {\n        text-align: center;\n        margin-left: 2.4rem;\n    }\n\n    .blog_container .system_container {\n        height: 32rem;\n    }\n\n    .blog_container .system_container h1 {\n        font-size: 3rem;\n        font-family: \"Nunito Sans\", sans-serif;\n        font-weight: 900;\n    }\n\n    .blog_container .system_container h3.quote {\n        font-size: 2rem;\n        padding-left: 1rem;\n        padding-right: 1rem;\n    }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtDQUNmOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsV0FBVztDQUNkOztBQUdELHdDQUF3Qzs7QUFFeEM7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBR0QsaUJBQWlCOztBQUVqQjtJQUNJO1FBQ0ksY0FBYztLQUNqQjtJQUNEO1FBQ0ksY0FBYztLQUNqQjtDQUNKOztBQUdEOztJQUVJO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLG9CQUFvQjtRQUNwQix1Q0FBdUM7UUFDdkMsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixrQkFBa0I7S0FDckI7O0lBRUQ7UUFDSSxtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtLQUNyQjs7SUFFRDtRQUNJLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsa0JBQWtCO0tBQ3JCOztJQUVEO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7S0FDNUI7O0lBRUQ7UUFDSSxtQkFBbUI7UUFDbkIsb0JBQW9CO0tBQ3ZCOztJQUVEO1FBQ0ksY0FBYztLQUNqQjs7SUFFRDtRQUNJLGdCQUFnQjtRQUNoQix1Q0FBdUM7UUFDdkMsaUJBQWlCO0tBQ3BCOztJQUVEO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixvQkFBb0I7S0FDdkI7O0NBRUoiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nX2NvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwcmVtO1xuICAgIHBhZGRpbmc6IDByZW07XG59XG5cbi5ibG9nX2NvbnRhaW5lciAuc3lzdGVtX2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaGVpZ2h0OiAyOHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJsb2dfY29udGFpbmVyIC5zeXN0ZW1fY29udGFpbmVyIGgxIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmJsb2dfY29udGFpbmVyIC5zeXN0ZW1fY29udGFpbmVyIGgzLnF1b3RlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHotaW5kZXg6IDI7XG59XG5cblxuLyojIyMjIyMjIyMjIyMjIEJMT0cgIyMjIyMjIyMjIyMjIyMjIyMqL1xuXG4uYmxvZ19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1x0XG4gICAgaGVpZ2h0OiAzNHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJsb2dfY29udGFpbmVyIC5ibG9nX2xpbmtfY29udGFpbmVyIGgxIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgIG1hcmdpbi1yaWdodDogNC41cmVtO1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgZm9udC1zaXplOiA0LjdyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5ibG9nX2NvbnRhaW5lciAuYmxvZ19saW5rX2NvbnRhaW5lciBwLnF1b3RlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uYmxvZ19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXIgcC5ibG9nX2ludHJvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMC42cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQ2F2ZWF0XCIsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uYmxvZ19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXJfX2JnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcmVtO1xuICAgIGJvdHRvbTogMHJlbTtcbiAgICByaWdodDogMHJlbTtcbiAgICBsZWZ0OiAwcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZjO1xuICAgIHRyYW5zZm9ybTogc2tld1koLTE1ZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uYmxvZ19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXIgYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgcGFkZGluZzogMS4zcmVtO1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5ibG9nX2NvbnRhaW5lciAuYmxvZ19saW5rX2NvbnRhaW5lciBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUwMDAwOyBcbn1cblxuXG4vKiAgIE1PQklMRSAgICAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5ibG9nX2NvbnRhaW5lciAuYmxvZ19saW5rX2NvbnRhaW5lciB7XHRcbiAgICAgICAgaGVpZ2h0OiA0MnJlbTtcbiAgICB9ICAgXG4gICAgLmJsb2dfY29udGFpbmVyIC5zeXN0ZW1fY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiA1MjBweDtcbiAgICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgIC5ibG9nX2NvbnRhaW5lciAuYmxvZ19saW5rX2NvbnRhaW5lciB7XHRcbiAgICAgICAgaGVpZ2h0OiA1MXJlbTtcbiAgICB9XG5cbiAgICAuYmxvZ19jb250YWluZXIgLmJsb2dfbGlua19jb250YWluZXIgaDEge1xuICAgICAgICBtYXJnaW4tbGVmdDogMi40cmVtO1xuICAgICAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDMuM3JlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgLmJsb2dfY29udGFpbmVyIC5ibG9nX2xpbmtfY29udGFpbmVyIHAucXVvdGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjRyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgIH1cblxuICAgIC5ibG9nX2NvbnRhaW5lciAuYmxvZ19saW5rX2NvbnRhaW5lciBwLmJsb2dfaW50cm8ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjRyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgIH1cblxuICAgIC5ibG9nX2NvbnRhaW5lciAuYmxvZ19saW5rX2NvbnRhaW5lciAuYmxvZ19saW5rX2NvbnRhaW5lcl9fYmcge1xuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKC0yMGRlZyk7XG4gICAgfVxuXG4gICAgLmJsb2dfY29udGFpbmVyIC5ibG9nX2xpbmtfY29udGFpbmVyIGEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjRyZW07XG4gICAgfVxuXG4gICAgLmJsb2dfY29udGFpbmVyIC5zeXN0ZW1fY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAzMnJlbTtcbiAgICB9XG5cbiAgICAuYmxvZ19jb250YWluZXIgLnN5c3RlbV9jb250YWluZXIgaDEge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgfVxuXG4gICAgLmJsb2dfY29udGFpbmVyIC5zeXN0ZW1fY29udGFpbmVyIGgzLnF1b3RlIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog_container\">\n    <div class=\"system_container\">\n        <h1>My System</h1>\n        <h3 class=\"quote\">\"Chase Passion, not Paychecks\"</h3>\n        <h3 class=\"quote\">\"Only I can change my life\"</h3>\n        <h3 class=\"quote\">\"With the new day comes new strength and new thoughts.\"</h3>\n    </div>\n\n    <div class=\"blog_link_container\">\n        <div class=\"blog_link_container__bg\"></div>\n        <h1>My Blog</h1>\n\n        <p class=\"quote\">\"There is no greater agony than bearing an untold story inside you.\"<br>  ― Maya Angelou</p>\n        <br>\n        <p class=\"blog_intro\">I mostly write about Tech, Programming, Open Source and other stuff that excites me. <br> Come have a look on how I see this world :-)</p>\n\n        <a href=\"#\">Visit My Blog</a>\n        <br><br>\n    </div>\n</div>\n"

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

module.exports = ".contact_container {\n\twidth: 100%;\n\tbackground-color: #212121;\n\tmargin: 0rem;\n\tpadding: 0rem;\n\tpadding-top: 1rem;\n\theight: auto;\n}\n\n.contact_container h1 {\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tfont-weight: 800;\n\tfont-size: 4rem;\n\tcolor: white;\n\tmargin: 0rem;\n\tpadding: 1rem;\n\tpadding-left: 3rem;\n\tpadding-bottom: 0rem;\n}\n\n.contact_container h3 {\n\tcolor: white;\n\tmargin: 0rem;\n\tpadding-left: 3.3rem;\n\tfont-size: 2rem;\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tfont-weight: 300;\n}\n\n.contact_container .icon_container .icon {\n\twidth: 6rem;\n\theight: 6rem;\n\tmargin: 1rem;\n}\n\n.contact_container .copyright {\n\tcolor: white;\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tfont-weight: 300;\n\ttext-align: center;\n\tmargin: 0rem;\n}\n\n/*####  MOBILE   #####*/\n\n@media screen and (max-width: 600px) {\n\t.contact_container h1 {\n\t\tfont-size: 3rem;\n\t\ttext-align: center;\n\t\tpadding-left: 0rem;\n\t\tpadding-right: 0rem;\n\t\tpadding-top: 0rem;\n\t\tpadding-bottom: 0.6rem;\n\t}\n\n\t.contact_container h3 {\n\t\tfont-size: 1.5rem;\n\t\ttext-align: center;\n\t\tpadding-left: 0rem;\n\t\tpadding-right: 0rem;\n\t\tpadding-top: 0rem;\n\t\tpadding-bottom: 0.6rem;\n\t}\n\n\t.contact_container .icon_container .icon{\n\t\twidth: 4rem;\n\t\theight: 4rem;\n\t\tmargin: 0.7rem;\n\t}\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLHVDQUF1QztDQUN2QyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixhQUFhO0NBQ2IsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckI7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsdUNBQXVDO0NBQ3ZDLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTtDQUNiOztBQUVEO0NBQ0MsYUFBYTtDQUNiLHVDQUF1QztDQUN2QyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjs7QUFFRCx3QkFBd0I7O0FBRXhCO0NBQ0M7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qjs7Q0FFRDtFQUNDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCOztDQUVEO0VBQ0MsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2Y7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3RfY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG5cdG1hcmdpbjogMHJlbTtcblx0cGFkZGluZzogMHJlbTtcblx0cGFkZGluZy10b3A6IDFyZW07XG5cdGhlaWdodDogYXV0bztcbn1cblxuLmNvbnRhY3RfY29udGFpbmVyIGgxIHtcblx0Zm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0Zm9udC1zaXplOiA0cmVtO1xuXHRjb2xvcjogd2hpdGU7XG5cdG1hcmdpbjogMHJlbTtcblx0cGFkZGluZzogMXJlbTtcblx0cGFkZGluZy1sZWZ0OiAzcmVtO1xuXHRwYWRkaW5nLWJvdHRvbTogMHJlbTtcbn1cblxuLmNvbnRhY3RfY29udGFpbmVyIGgzIHtcblx0Y29sb3I6IHdoaXRlO1xuXHRtYXJnaW46IDByZW07XG5cdHBhZGRpbmctbGVmdDogMy4zcmVtO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb250YWN0X2NvbnRhaW5lciAuaWNvbl9jb250YWluZXIgLmljb24ge1xuXHR3aWR0aDogNnJlbTtcblx0aGVpZ2h0OiA2cmVtO1xuXHRtYXJnaW46IDFyZW07XG59XG5cbi5jb250YWN0X2NvbnRhaW5lciAuY29weXJpZ2h0IHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMHJlbTtcbn1cblxuLyojIyMjICBNT0JJTEUgICAjIyMjIyovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdC5jb250YWN0X2NvbnRhaW5lciBoMSB7XG5cdFx0Zm9udC1zaXplOiAzcmVtO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwYWRkaW5nLWxlZnQ6IDByZW07XG5cdFx0cGFkZGluZy1yaWdodDogMHJlbTtcblx0XHRwYWRkaW5nLXRvcDogMHJlbTtcblx0XHRwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xuXHR9XG5cblx0LmNvbnRhY3RfY29udGFpbmVyIGgzIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZy1sZWZ0OiAwcmVtO1xuXHRcdHBhZGRpbmctcmlnaHQ6IDByZW07XG5cdFx0cGFkZGluZy10b3A6IDByZW07XG5cdFx0cGFkZGluZy1ib3R0b206IDAuNnJlbTtcblx0fVxuXG5cdC5jb250YWN0X2NvbnRhaW5lciAuaWNvbl9jb250YWluZXIgLmljb257XG5cdFx0d2lkdGg6IDRyZW07XG5cdFx0aGVpZ2h0OiA0cmVtO1xuXHRcdG1hcmdpbjogMC43cmVtO1xuXHR9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact_container\">\n    <h1>Contact Me</h1>\n    <h3>Let's get in touch.</h3>\n\n    <div class=\"icon_container\" style=\"text-align: center;\">\n        <a title=\"github.com/junaidrahim\" href=\"https://www.github.com/junaidrahim\" target=\"_blank\"><img class=\"icon\" src=\"../../assets/icons/github_icon.png\"></a>\n        <a title=\"junaidrahim5a@gmail.com\" href=\"mailto:junaidrahim5a@gmail.com\" target=\"_blank\"><img class=\"icon\" src=\"../../assets/icons/gmail_icon.png\"></a>\n        <a title=\"instagram.com/junaidrahim31\" href=\"https://www.instagram.com/junaidrahim31\" target=\"_blank\"><img class=\"icon\" src=\"../../assets/icons/instagram_icon.png\"></a>\n        <a title=\"\" href=\"\" target=\"_blank\"><img class=\"icon\" style=\"margin-left: 5px;\" src=\"../../assets/icons/linkedin_icon.png\"></a>\n        <br>\n    </div>\n\n    <p class=\"copyright\">&#xa9; Junaid H Rahim. All Rights Reserved</p><br>\n</div>"

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

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects_container {\n    margin: 0rem;\n    padding: 0rem;\n    height: auto;\n    background: #24C6DC;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #514A9D, #24C6DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.projects_container h1 {\n    margin: 0rem;\n    padding: 0rem;\n    margin-left: 3rem;\n    padding-top: 2rem;\n    color: white;\n    font-size: 4rem;\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 900;\n}\n\n.projects_container h3 {\n    margin: 0rem;\n    padding: 0rem;\n    margin-left: 3rem;\n    margin-right: 1rem;\n    color: white;\n    font-size: 1.5rem;\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 400;\n}\n\n.projects_container .cards_container {\n    padding: 2rem;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: auto;\n    grid-gap: 1rem;\n}\n\n.projects_container .cards_container .card {\n    border-radius: 0.5rem;\n    padding: 1rem;\n    margin-top: 2rem;\n    background-color: white;\n    box-shadow: 0 0 5px rgba(0,0,0,.03), 0 5px 22px -8px rgba(0,0,0,.1);\n}\n\n.projects_container .cards_container .card .title{\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 800;\n    font-size: 2rem;\n    text-align: center;\n    margin: 0rem;\n    margin-top: 0.5rem;\n    padding: 0rem;\n}\n\n.projects_container .cards_container .card .caption {\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 300;\n    font-size: 1.3rem;\n}\n\n.projects_container .cards_container .card .link_container {\n    text-align: center;\n    padding-top: 2.6rem;\n    padding-bottom: 1rem;\n}\n\n.projects_container .cards_container .card a {\n    padding: 0.6rem;\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 700;\n    font-size: 1.5rem;\n    color: white;\n    border-radius: 0.3rem;\n    background-color: #ef5350;\n    text-decoration: none;\n    width: 5rem;\n    transition: 0.5s\n}\n\n.projects_container .cards_container .card a:hover {\n    background-color: #b71c1c;\n}\n\n/* MOBILE */\n\n@media screen and (max-width: 800px) {\n\n    .projects_container .cards_container {\n        grid-template-columns: repeat(2, 1fr);\n    }   \n\n}\n\n@media screen and (max-width: 600px) {\n    .projects_container .cards_container {\n        grid-template-columns: repeat(1, 1fr);\n        margin: 0.7rem;\n    }   \n\n    .projects_container h1 {\n        margin-left: 0rem;\n        text-align: center;\n        font-family: \"Nunito Sans\", sans-serif;\n        font-weight: 900;\n        font-size: 3.5rem;\n    }\n\n    .projects_container h3 {\n        margin: 0.7rem;\n        text-align: center;\n    }\n\n    .projects_container .cards_container .card .title {\n        font-size: 2.5rem;\n    }\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLG9CQUFvQixFQUFFLCtCQUErQixFQUNhLGdDQUFnQztJQUNsRyx3REFBd0QsQ0FBQyxzRUFBc0U7Q0FDbEk7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsc0NBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLG9FQUFvRTtDQUN2RTs7QUFFRDtJQUNJLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSx1Q0FBdUM7SUFDdkMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjs7QUFJRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3hCOztBQUdEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25COztBQUdEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUdELFlBQVk7O0FBRVo7O0lBRUk7UUFDSSxzQ0FBc0M7S0FDekM7O0NBRUo7O0FBR0Q7SUFDSTtRQUNJLHNDQUFzQztRQUN0QyxlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix1Q0FBdUM7UUFDdkMsaUJBQWlCO1FBQ2pCLGtCQUFrQjtLQUNyQjs7SUFFRDtRQUNJLGVBQWU7UUFDZixtQkFBbUI7S0FDdEI7O0lBRUQ7UUFDSSxrQkFBa0I7S0FDckI7O0NBRUoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RzX2NvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwcmVtO1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICMyNEM2REM7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1MTRBOUQsICMyNEM2REMpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1MTRBOUQsICMyNEM2REMpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbi5wcm9qZWN0c19jb250YWluZXIgaDEge1xuICAgIG1hcmdpbjogMHJlbTtcbiAgICBwYWRkaW5nOiAwcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4ucHJvamVjdHNfY29udGFpbmVyIGgzIHtcbiAgICBtYXJnaW46IDByZW07XG4gICAgcGFkZGluZzogMHJlbTtcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnByb2plY3RzX2NvbnRhaW5lciAuY2FyZHNfY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgICBncmlkLWdhcDogMXJlbTtcbn1cblxuLnByb2plY3RzX2NvbnRhaW5lciAuY2FyZHNfY29udGFpbmVyIC5jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwuMDMpLCAwIDVweCAyMnB4IC04cHggcmdiYSgwLDAsMCwuMSk7XG59XG5cbi5wcm9qZWN0c19jb250YWluZXIgLmNhcmRzX2NvbnRhaW5lciAuY2FyZCAudGl0bGV7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwcmVtO1xufVxuXG4ucHJvamVjdHNfY29udGFpbmVyIC5jYXJkc19jb250YWluZXIgLmNhcmQgLmNhcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuXG5cbi5wcm9qZWN0c19jb250YWluZXIgLmNhcmRzX2NvbnRhaW5lciAuY2FyZCAubGlua19jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMi42cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG5cbi5wcm9qZWN0c19jb250YWluZXIgLmNhcmRzX2NvbnRhaW5lciAuY2FyZCBhIHtcbiAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTM1MDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgdHJhbnNpdGlvbjogMC41c1xufVxuXG5cbi5wcm9qZWN0c19jb250YWluZXIgLmNhcmRzX2NvbnRhaW5lciAuY2FyZCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcxYzFjO1xufVxuXG5cbi8qIE1PQklMRSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuXG4gICAgLnByb2plY3RzX2NvbnRhaW5lciAuY2FyZHNfY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICB9ICAgXG5cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5wcm9qZWN0c19jb250YWluZXIgLmNhcmRzX2NvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgICAgIG1hcmdpbjogMC43cmVtO1xuICAgIH0gICBcblxuICAgIC5wcm9qZWN0c19jb250YWluZXIgaDEge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG5cbiAgICAucHJvamVjdHNfY29udGFpbmVyIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwLjdyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucHJvamVjdHNfY29udGFpbmVyIC5jYXJkc19jb250YWluZXIgLmNhcmQgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgfVxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projects_container\">\n    <h1 class=\"is-large\">My Projects</h1>\n    <h3>Check out some of my recent work. Almost all of it is on Github.</h3>\n\n    <div class=\"cards_container\">\n        <div class=\"card\">           \n            <h2 class=\"title\">Program Homework Solver</h2> <br>\n            <div style=\"padding-left: 1.3rem\">            \n                <span class=\"caption\">A simple command line application written in <b>C++</b> that helps you <b>generate source the code to produce a given series of integers.</b></span>\n                <br>\n           </div>\n\n            <div class=\"link_container\">\n                <a href=\"https://www.github.com/junaidrahim/program-homework-solver\" target=\"_blank\">\n                    <i class=\"fab fa-github\"></i>      Have a look !\n                </a>\n            </div>\n        </div>\n        \n        <div class=\"card\">\n            <h2 class=\"title\">Download Gator</h2> <br>\n            <div style=\"padding-left: 1.3rem\">            \n                <span class=\"caption\">A Web App to Start a file download remotely on the server. Server is written in <b>Python3</b> using <b>Flask</b> hosted using ngrok and connecting it to a Telegram Bot can notify about server activities</span>\n           </div>\n\n            <div class=\"link_container\">\n                <a href=\"https://www.github.com/junaidrahim/downloadgator\" target=\"_blank\">\n                    <i class=\"fab fa-github\"></i>      Have a look !\n                </a>\n            </div>\n        </div>  \n        \n        \n        <div class=\"card\">\n            <h2 class=\"title\" style=\"font-size: 3rem;\">Tic Tac Toe</h2> <br>\n            <div style=\"padding-left: 1.3rem\">            \n                <span class=\"caption\">I know this is silly. But I was bored, wrote the classic tic tac toe game in all the languages I know, or to be specific, in <b>C, C++, Python3, Java and Go</b> </span>\n           </div>\n\n            <div class=\"link_container\">\n                <a href=\"https://www.github.com/junaidrahim/tictactoe\" target=\"_blank\">\n                    <i class=\"fab fa-github\"></i>      Have a look !\n                </a>\n            </div>\n            <br>\n        </div>\n        \n    </div>\n\n    <br><br>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
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

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resume_container {\n    margin: 0px;\n    padding: 3rem;\n    text-align: center;\n    background-color: #f5f5f5;\n}\n\n.resume_container a {\n    text-decoration: none;\n}\n\n.button {\n    border-radius: 0.6rem;\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 700;\n    background-color: #0288d1;\n    border: none;\n    color: #FFFFFF;\n    text-align: center;\n    font-size: 2rem;\n    padding: 1.5rem;\n    width: 14rem;\n    transition: all 0.5s;\n    margin: 0.5rem;\n}\n\n.button span {\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n}\n\n.button span:after {\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    transition: 0.5s;\n}\n\n.button:hover span {\n    padding-right: 25px;\n}\n\n.button:hover span:after {\n    opacity: 1;\n    right: 0;\n}\n\n/* MOBILE*/\n\n@media screen and (max-width: 600px) {\n\n    .button {\n        font-size: 1.3rem;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxPQUFPO0lBQ1AsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxTQUFTO0NBQ1o7O0FBR0QsV0FBVzs7QUFFWDs7SUFFSTtRQUNJLGtCQUFrQjtLQUNyQjs7Q0FFSiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bWVfY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4ucmVzdW1lX2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyODhkMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgd2lkdGg6IDE0cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIG1hcmdpbjogMC41cmVtO1xufVxuXG4uYnV0dG9uIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ1dHRvbiBzcGFuOmFmdGVyIHtcbiAgICBjb250ZW50OiAnXFwwMGJiJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idXR0b246aG92ZXIgc3BhbiB7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJ1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHJpZ2h0OiAwO1xufVxuXG5cbi8qIE1PQklMRSovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuXG59Il19 */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resume_container\">\n    <a href=\"\" target=\"_blank\" class=\"button\"><span>Download my Resume</span></a>\n</div>"

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

/***/ "./src/app/technologies/technologies.component.css":
/*!*********************************************************!*\
  !*** ./src/app/technologies/technologies.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".technologies_container {\n\tmargin: 0rem;\n\tpadding: 0rem;\n\theight: 14rem;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2,1fr);\n\tgrid-auto-rows: auto;\n\tgrid-gap: 0rem;\n}\n\n.technologies_container .part_intro{\n\tpadding: 1rem;\n\tbackground-color: #004d40; \n}\n\n.technologies_container .part_graph{\n\tpadding: 1rem;\n\tbackground-color: #a7ffeb;\n}\n\n.technologies_container .part_intro h1 {\n\tmargin: 0rem;\n\tpadding: 0rem;\n\tmargin-top: 1rem;\n\tfont-size: 4rem;\n\tcolor: white;\n\tfont-family: \"NunitoSans-Bold\", sans-serif;\n\ttext-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaG5vbG9naWVzL3RlY2hub2xvZ2llcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsY0FBYztDQUNkLHFDQUFxQztDQUNyQyxxQkFBcUI7Q0FDckIsZUFBZTtDQUNmOztBQUVEO0NBQ0MsY0FBYztDQUNkLDBCQUEwQjtDQUMxQjs7QUFFRDtDQUNDLGNBQWM7Q0FDZCwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLDJDQUEyQztDQUMzQyxtQkFBbUI7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC90ZWNobm9sb2dpZXMvdGVjaG5vbG9naWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVjaG5vbG9naWVzX2NvbnRhaW5lciB7XG5cdG1hcmdpbjogMHJlbTtcblx0cGFkZGluZzogMHJlbTtcblx0aGVpZ2h0OiAxNHJlbTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuXHRncmlkLWF1dG8tcm93czogYXV0bztcblx0Z3JpZC1nYXA6IDByZW07XG59XG5cbi50ZWNobm9sb2dpZXNfY29udGFpbmVyIC5wYXJ0X2ludHJve1xuXHRwYWRkaW5nOiAxcmVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0ZDQwOyBcbn1cblxuLnRlY2hub2xvZ2llc19jb250YWluZXIgLnBhcnRfZ3JhcGh7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGJhY2tncm91bmQtY29sb3I6ICNhN2ZmZWI7XG59XG5cbi50ZWNobm9sb2dpZXNfY29udGFpbmVyIC5wYXJ0X2ludHJvIGgxIHtcblx0bWFyZ2luOiAwcmVtO1xuXHRwYWRkaW5nOiAwcmVtO1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xuXHRmb250LXNpemU6IDRyZW07XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1mYW1pbHk6IFwiTnVuaXRvU2Fucy1Cb2xkXCIsIHNhbnMtc2VyaWY7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/technologies/technologies.component.html":
/*!**********************************************************!*\
  !*** ./src/app/technologies/technologies.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"technologies_container\">\n\t<div class=\"part_intro\">\n\t\t<h1>Technologies</h1>\n\t</div>\n\n\t<div class=\"part_graph\">\n\t\t\n\t</div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/technologies/technologies.component.ts":
/*!********************************************************!*\
  !*** ./src/app/technologies/technologies.component.ts ***!
  \********************************************************/
/*! exports provided: TechnologiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesComponent", function() { return TechnologiesComponent; });
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

var TechnologiesComponent = /** @class */ (function () {
    function TechnologiesComponent() {
    }
    TechnologiesComponent.prototype.ngOnInit = function () {
    };
    TechnologiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-technologies',
            template: __webpack_require__(/*! ./technologies.component.html */ "./src/app/technologies/technologies.component.html"),
            styles: [__webpack_require__(/*! ./technologies.component.css */ "./src/app/technologies/technologies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TechnologiesComponent);
    return TechnologiesComponent;
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

module.exports = __webpack_require__(/*! /home/junaidrahim/Code/Github-Projects/junaidrahim.github.io/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map