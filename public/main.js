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

module.exports = "\n<app-technologies></app-technologies>\n<app-projects></app-projects>\n<app-blog></app-blog>\n<app-resume></app-resume>\n<app-contact></app-contact>"

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

module.exports = ".contact_container {\n\twidth: 100%;\n\tbackground-color: #212121;\n\tmargin: 0rem;\n\tpadding: 0rem;\n\tpadding-top: 1rem;\n\theight: auto;\n}\n\n.contact_container h1 {\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tfont-weight: 800;\n\tfont-size: 4rem;\n\tcolor: white;\n\tmargin: 0rem;\n\tpadding: 1rem;\n\tpadding-left: 3rem;\n\tpadding-bottom: 0rem;\n}\n\n.contact_container h3 {\n\tcolor: white;\n\tmargin: 0rem;\n\tpadding-left: 3.3rem;\n\tfont-size: 2rem;\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tfont-weight: 300;\n}\n\n.contact_container .icon_container .icon {\n\twidth: 5rem;\n\theight: 5rem;\n\tmargin: 1rem;\n}\n\n.contact_container .copyright {\n\tcolor: white;\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tfont-weight: 300;\n\ttext-align: center;\n\tmargin: 0rem;\n}\n\n/*####  MOBILE   #####*/\n\n@media screen and (max-width: 600px) {\n\t.contact_container h1 {\n\t\tfont-size: 3rem;\n\t\ttext-align: center;\n\t\tpadding-left: 0rem;\n\t\tpadding-right: 0rem;\n\t\tpadding-top: 0rem;\n\t\tpadding-bottom: 0.6rem;\n\t}\n\n\t.contact_container h3 {\n\t\tfont-size: 1.5rem;\n\t\ttext-align: center;\n\t\tpadding-left: 0rem;\n\t\tpadding-right: 0rem;\n\t\tpadding-top: 0rem;\n\t\tpadding-bottom: 0.6rem;\n\t}\n\n\t.contact_container .icon_container .icon{\n\t\twidth: 4rem;\n\t\theight: 4rem;\n\t\tmargin: 0.7rem;\n\t}\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLHVDQUF1QztDQUN2QyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixhQUFhO0NBQ2IsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckI7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsdUNBQXVDO0NBQ3ZDLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTtDQUNiOztBQUVEO0NBQ0MsYUFBYTtDQUNiLHVDQUF1QztDQUN2QyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjs7QUFFRCx3QkFBd0I7O0FBRXhCO0NBQ0M7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qjs7Q0FFRDtFQUNDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCOztDQUVEO0VBQ0MsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2Y7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3RfY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG5cdG1hcmdpbjogMHJlbTtcblx0cGFkZGluZzogMHJlbTtcblx0cGFkZGluZy10b3A6IDFyZW07XG5cdGhlaWdodDogYXV0bztcbn1cblxuLmNvbnRhY3RfY29udGFpbmVyIGgxIHtcblx0Zm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0Zm9udC1zaXplOiA0cmVtO1xuXHRjb2xvcjogd2hpdGU7XG5cdG1hcmdpbjogMHJlbTtcblx0cGFkZGluZzogMXJlbTtcblx0cGFkZGluZy1sZWZ0OiAzcmVtO1xuXHRwYWRkaW5nLWJvdHRvbTogMHJlbTtcbn1cblxuLmNvbnRhY3RfY29udGFpbmVyIGgzIHtcblx0Y29sb3I6IHdoaXRlO1xuXHRtYXJnaW46IDByZW07XG5cdHBhZGRpbmctbGVmdDogMy4zcmVtO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jb250YWN0X2NvbnRhaW5lciAuaWNvbl9jb250YWluZXIgLmljb24ge1xuXHR3aWR0aDogNXJlbTtcblx0aGVpZ2h0OiA1cmVtO1xuXHRtYXJnaW46IDFyZW07XG59XG5cbi5jb250YWN0X2NvbnRhaW5lciAuY29weXJpZ2h0IHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbjogMHJlbTtcbn1cblxuLyojIyMjICBNT0JJTEUgICAjIyMjIyovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdC5jb250YWN0X2NvbnRhaW5lciBoMSB7XG5cdFx0Zm9udC1zaXplOiAzcmVtO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwYWRkaW5nLWxlZnQ6IDByZW07XG5cdFx0cGFkZGluZy1yaWdodDogMHJlbTtcblx0XHRwYWRkaW5nLXRvcDogMHJlbTtcblx0XHRwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xuXHR9XG5cblx0LmNvbnRhY3RfY29udGFpbmVyIGgzIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZy1sZWZ0OiAwcmVtO1xuXHRcdHBhZGRpbmctcmlnaHQ6IDByZW07XG5cdFx0cGFkZGluZy10b3A6IDByZW07XG5cdFx0cGFkZGluZy1ib3R0b206IDAuNnJlbTtcblx0fVxuXG5cdC5jb250YWN0X2NvbnRhaW5lciAuaWNvbl9jb250YWluZXIgLmljb257XG5cdFx0d2lkdGg6IDRyZW07XG5cdFx0aGVpZ2h0OiA0cmVtO1xuXHRcdG1hcmdpbjogMC43cmVtO1xuXHR9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact_container\">\n    <h1>Contact Me</h1>\n    <h3>Let's get in touch.</h3>\n\n    <div class=\"icon_container\" style=\"text-align: center;\">\n        <a title=\"github.com/junaidrahim\" href=\"https://www.github.com/junaidrahim\" target=\"_blank\"><img class=\"icon\" src=\"https://img.icons8.com/color/96/000000/github.png\"></a>\n        <a title=\"junaidrahim5a@gmail.com\" href=\"mailto:junaidrahim5a@gmail.com\" target=\"_blank\"><img class=\"icon\" src=\"https://img.icons8.com/color/96/000000/gmail.png\"></a>\n        <a title=\"instagram.com/junaidrahim31\" href=\"https://www.instagram.com/junaidrahim31\" target=\"_blank\"><img class=\"icon\" src=\"https://img.icons8.com/color/96/000000/instagram.png\"></a>\n        <a title=\"\" href=\"\" target=\"_blank\"><img class=\"icon\" style=\"margin-left: 5px;\" src=\"https://img.icons8.com/color/96/000000/linkedin.png\"></a>\n        <br>\n    </div>\n\n    <p class=\"copyright\">&#xa9; Junaid H Rahim. All Rights Reserved</p><br>\n</div>"

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

module.exports = ".projects_container {\n    margin: 0rem;\n    padding: 0rem;\n    height: auto;\n    background: #0cebeb;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n}\n\n.projects_container h1 {\n    margin: 0rem;\n    padding: 0rem;\n    margin-left: 3rem;\n    padding-top: 2rem;\n    color: black;\n    font-size: 4rem;\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 900;\n}\n\n.projects_container h3 {\n    margin: 0rem;\n    padding: 0rem;\n    margin-left: 3rem;\n    margin-right: 1rem;\n    color: black;\n    font-size: 1.5rem;\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 400;\n}\n\n.projects_container .cards_container {\n    padding: 2rem;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: auto;\n    grid-gap: 1rem;\n}\n\n.projects_container .cards_container .card {\n    border-radius: 0.5rem;\n    padding: 1rem;\n    margin-top: 2rem;\n    background-color: white;\n    box-shadow: 0 0 5px rgba(0,0,0,.03), 0 5px 22px -8px rgba(0,0,0,.1);\n}\n\n.projects_container .cards_container .card .title{\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 800;\n    font-size: 2rem;\n    text-align: center;\n    margin: 0rem;\n    margin-top: 0.5rem;\n    padding: 0rem;\n}\n\n.projects_container .cards_container .card .caption {\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 300;\n    font-size: 1.3rem;\n}\n\n.projects_container .cards_container .card .link_container {\n    text-align: center;\n    padding-top: 2.6rem;\n    padding-bottom: 1rem;\n}\n\n.projects_container .cards_container .card a {\n    padding: 0.6rem;\n    font-family: \"Nunito Sans\", sans-serif;\n    font-weight: 700;\n    font-size: 1.5rem;\n    color: white;\n    border-radius: 0.3rem;\n    background-color: #ef5350;\n    text-decoration: none;\n    width: 5rem;\n    transition: 0.5s\n}\n\n.projects_container .cards_container .card a:hover {\n    background-color: #b71c1c;\n}\n\n/* MOBILE */\n\n@media screen and (max-width: 800px) {\n\n    .projects_container .cards_container {\n        grid-template-columns: repeat(2, 1fr);\n    }   \n\n}\n\n@media screen and (max-width: 600px) {\n    .projects_container .cards_container {\n        grid-template-columns: repeat(1, 1fr);\n        margin: 0.7rem;\n    }   \n\n    .projects_container h1 {\n        margin-left: 0rem;\n        text-align: center;\n        font-family: \"Nunito Sans\", sans-serif;\n        font-weight: 900;\n        font-size: 3.5rem;\n    }\n\n    .projects_container h3 {\n        margin: 0.7rem;\n        text-align: center;\n    }\n\n    .projects_container .cards_container .card .title {\n        font-size: 2.5rem;\n    }\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLG9CQUFvQixFQUFFLCtCQUErQixFQUNzQixnQ0FBZ0M7SUFDM0csaUVBQWlFLENBQUMsc0VBQXNFOztDQUUzSTs7QUFFRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QyxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsb0VBQW9FO0NBQ3ZFOztBQUVEO0lBQ0ksdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCOztBQUlEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDeEI7O0FBR0Q7SUFDSSxnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7O0FBR0Q7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBR0QsWUFBWTs7QUFFWjs7SUFFSTtRQUNJLHNDQUFzQztLQUN6Qzs7Q0FFSjs7QUFHRDtJQUNJO1FBQ0ksc0NBQXNDO1FBQ3RDLGVBQWU7S0FDbEI7O0lBRUQ7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHVDQUF1QztRQUN2QyxpQkFBaUI7UUFDakIsa0JBQWtCO0tBQ3JCOztJQUVEO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJLGtCQUFrQjtLQUNyQjs7Q0FFSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHNfY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDByZW07XG4gICAgcGFkZGluZzogMHJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZDogIzBjZWJlYjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI5ZmZjNiwgIzIwZTNiMiwgIzBjZWJlYik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI5ZmZjNiwgIzIwZTNiMiwgIzBjZWJlYik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cblxufVxuXG4ucHJvamVjdHNfY29udGFpbmVyIGgxIHtcbiAgICBtYXJnaW46IDByZW07XG4gICAgcGFkZGluZzogMHJlbTtcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLnByb2plY3RzX2NvbnRhaW5lciBoMyB7XG4gICAgbWFyZ2luOiAwcmVtO1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5wcm9qZWN0c19jb250YWluZXIgLmNhcmRzX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gICAgZ3JpZC1nYXA6IDFyZW07XG59XG5cbi5wcm9qZWN0c19jb250YWluZXIgLmNhcmRzX2NvbnRhaW5lciAuY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsLjAzKSwgMCA1cHggMjJweCAtOHB4IHJnYmEoMCwwLDAsLjEpO1xufVxuXG4ucHJvamVjdHNfY29udGFpbmVyIC5jYXJkc19jb250YWluZXIgLmNhcmQgLnRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZzogMHJlbTtcbn1cblxuLnByb2plY3RzX2NvbnRhaW5lciAuY2FyZHNfY29udGFpbmVyIC5jYXJkIC5jYXB0aW9uIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cblxuXG4ucHJvamVjdHNfY29udGFpbmVyIC5jYXJkc19jb250YWluZXIgLmNhcmQgLmxpbmtfY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIuNnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuXG4ucHJvamVjdHNfY29udGFpbmVyIC5jYXJkc19jb250YWluZXIgLmNhcmQgYSB7XG4gICAgcGFkZGluZzogMC42cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjUzNTA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIHRyYW5zaXRpb246IDAuNXNcbn1cblxuXG4ucHJvamVjdHNfY29udGFpbmVyIC5jYXJkc19jb250YWluZXIgLmNhcmQgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3MWMxYztcbn1cblxuXG4vKiBNT0JJTEUgKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcblxuICAgIC5wcm9qZWN0c19jb250YWluZXIgLmNhcmRzX2NvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgfSAgIFxuXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAucHJvamVjdHNfY29udGFpbmVyIC5jYXJkc19jb250YWluZXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgICAgICBtYXJnaW46IDAuN3JlbTtcbiAgICB9ICAgXG5cbiAgICAucHJvamVjdHNfY29udGFpbmVyIGgxIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgfVxuXG4gICAgLnByb2plY3RzX2NvbnRhaW5lciBoMyB7XG4gICAgICAgIG1hcmdpbjogMC43cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnByb2plY3RzX2NvbnRhaW5lciAuY2FyZHNfY29udGFpbmVyIC5jYXJkIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIH1cblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */"

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

module.exports = ".technologies_container {\n\tmargin: 0rem;\n\tpadding: 0rem;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(2,1fr);\n\tgrid-auto-rows: auto;\n\tgrid-gap: 0rem;\n}\n\n.technologies_container .part_intro{\n\tpadding: 1rem;\n\tbackground-color: #f5f5f5; \n}\n\n.technologies_container .part_intro h1 {\n\tmargin: 0rem;\n\tpadding: 0rem;\n\tmargin-top: 1rem;\n\tmargin-left: 1rem;\n\tfont-size: 3rem;\n\tcolor: black;\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tfont-weight: 800;\n}\n\n.technologies_container .part_intro .interests_container {\n\tpadding: 1rem;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3,1fr);\n\tgrid-auto-rows: auto;\n\tgrid-gap: 1rem;\n}\n\n.technologies_container .part_intro .interests_container .card {\n\tborder-radius: 0.2rem;\n\twidth: auto;\n    padding: 1rem;\n    background-color: white;\n\tbox-shadow: 0 0 5px rgba(0,0,0,.03), 0 5px 22px -8px rgba(0,0,0,.1);\n}\n\n.technologies_container .part_intro .interests_container .card i {\n\tfont-size: 2rem;\n}\n\n.technologies_container .part_intro .interests_container .card h2 {\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tfont-weight: 300;\n\tmargin: 0rem;\n\tpadding: 0rem;\n}\n\n.technologies_container .part_graph{\n\tpadding: 1rem;\n\tbackground-color: #ffffff;\n\tmargin-left: 2rem;\n\tmargin-right: 2rem;\n}\n\n.technologies_container .part_graph h1 {\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tfont-weight: 800;\n}\n\n.technologies_container .part_graph .skill_container {\n\tdisplay: block;\n\tmargin: 1rem;\n\tmargin-left: 0rem;\n}\n\n.technologies_container .part_graph .skill_container h3 {\n\tfont-family: \"Nunito Sans\", sans-serif;\n\tfont-weight: 400;\n\tmargin: 0rem;\n\tpadding: 0rem;\n}\n\n.technologies_container .part_graph .skill_container .meter {\n\twidth: 70%;\n\theight: 0.6rem;\n\tbackground-color: #e1f5fe;\n\tborder-radius: 1rem;\n\tmargin-top: 0.3rem;\n}\n\n.technologies_container .part_graph .skill_container .meter span {\n\theight: 100%;\n\tbackground-color: #0091ea;\n\tborder-radius: 1rem;\n\tdisplay: block;\n}\n\n/*  MOBILE  */\n\n@media screen and (max-width: 800px){\n\t.technologies_container {\n\t\tgrid-template-columns: repeat(1,1fr);\n\t}\n\t\n\t.technologies_container .part_intro .interests_container {\n\t\tgrid-template-columns: repeat(2,1fr);\n\t\t\n\t}\n\n\t.technologies_container .part_intro h1 {\n\t\ttext-align: center;\n\t\tfont-size: 2rem;\n\t}\n\n\t.technologies_container .part_graph {\n\t\tmargin-right: 0rem;\n\t\tmargin-left: 0.5rem;\n\t}\n}\n\n@media screen and (max-width: 500px){\n\t.technologies_container .part_intro .interests_container {\n\t\tgrid-template-columns: repeat(1,1fr);\n\t\t\n\t}\n\n\t.technologies_container .part_intro h1 {\n\t\ttext-align: center;\n\t}\n\n\t.technologies_container .part_graph .skill_container h4 {\n\t\tdisplay: none;\n\t}\n\n\t.technologies_container .part_graph .skill_container .meter {\n\t\twidth: 100%;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaG5vbG9naWVzL3RlY2hub2xvZ2llcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLGNBQWM7Q0FDZCxjQUFjO0NBQ2QscUNBQXFDO0NBQ3JDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2Y7O0FBRUQ7Q0FDQyxjQUFjO0NBQ2QsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsYUFBYTtDQUNiLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsdUNBQXVDO0NBQ3ZDLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QscUNBQXFDO0NBQ3JDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2Y7O0FBRUQ7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtJQUNULGNBQWM7SUFDZCx3QkFBd0I7Q0FDM0Isb0VBQW9FO0NBQ3BFOztBQUVEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0MsdUNBQXVDO0NBQ3ZDLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsY0FBYztDQUNkOztBQUVEO0NBQ0MsY0FBYztDQUNkLDBCQUEwQjtDQUMxQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25COztBQUVEO0NBQ0MsdUNBQXVDO0NBQ3ZDLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCOztBQUVEO0NBQ0MsdUNBQXVDO0NBQ3ZDLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsY0FBYztDQUNkOztBQUVEO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZiwwQkFBMEI7Q0FDMUIsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQjs7QUFFRDtDQUNDLGFBQWE7Q0FDYiwwQkFBMEI7Q0FDMUIsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZjs7QUFRRCxjQUFjOztBQUVkO0NBQ0M7RUFDQyxxQ0FBcUM7RUFDckM7O0NBRUQ7RUFDQyxxQ0FBcUM7O0VBRXJDOztDQUVEO0VBQ0MsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQjs7Q0FFRDtFQUNDLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEI7Q0FDRDs7QUFFRDtDQUNDO0VBQ0MscUNBQXFDOztFQUVyQzs7Q0FFRDtFQUNDLG1CQUFtQjtFQUNuQjs7Q0FFRDtFQUNDLGNBQWM7RUFDZDs7Q0FFRDtFQUNDLFlBQVk7RUFDWjtDQUNEIiwiZmlsZSI6InNyYy9hcHAvdGVjaG5vbG9naWVzL3RlY2hub2xvZ2llcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlY2hub2xvZ2llc19jb250YWluZXIge1xuXHRtYXJnaW46IDByZW07XG5cdHBhZGRpbmc6IDByZW07XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcblx0Z3JpZC1hdXRvLXJvd3M6IGF1dG87XG5cdGdyaWQtZ2FwOiAwcmVtO1xufVxuXG4udGVjaG5vbG9naWVzX2NvbnRhaW5lciAucGFydF9pbnRyb3tcblx0cGFkZGluZzogMXJlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTsgXG59XG5cbi50ZWNobm9sb2dpZXNfY29udGFpbmVyIC5wYXJ0X2ludHJvIGgxIHtcblx0bWFyZ2luOiAwcmVtO1xuXHRwYWRkaW5nOiAwcmVtO1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcblx0Zm9udC1zaXplOiAzcmVtO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi50ZWNobm9sb2dpZXNfY29udGFpbmVyIC5wYXJ0X2ludHJvIC5pbnRlcmVzdHNfY29udGFpbmVyIHtcblx0cGFkZGluZzogMXJlbTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xuXHRncmlkLWF1dG8tcm93czogYXV0bztcblx0Z3JpZC1nYXA6IDFyZW07XG59XG5cbi50ZWNobm9sb2dpZXNfY29udGFpbmVyIC5wYXJ0X2ludHJvIC5pbnRlcmVzdHNfY29udGFpbmVyIC5jYXJkIHtcblx0Ym9yZGVyLXJhZGl1czogMC4ycmVtO1xuXHR3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsLjAzKSwgMCA1cHggMjJweCAtOHB4IHJnYmEoMCwwLDAsLjEpO1xufVxuXG4udGVjaG5vbG9naWVzX2NvbnRhaW5lciAucGFydF9pbnRybyAuaW50ZXJlc3RzX2NvbnRhaW5lciAuY2FyZCBpIHtcblx0Zm9udC1zaXplOiAycmVtO1xufVxuXG4udGVjaG5vbG9naWVzX2NvbnRhaW5lciAucGFydF9pbnRybyAuaW50ZXJlc3RzX2NvbnRhaW5lciAuY2FyZCBoMiB7XG5cdGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdG1hcmdpbjogMHJlbTtcblx0cGFkZGluZzogMHJlbTtcbn1cblxuLnRlY2hub2xvZ2llc19jb250YWluZXIgLnBhcnRfZ3JhcGh7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdG1hcmdpbi1sZWZ0OiAycmVtO1xuXHRtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi50ZWNobm9sb2dpZXNfY29udGFpbmVyIC5wYXJ0X2dyYXBoIGgxIHtcblx0Zm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnRlY2hub2xvZ2llc19jb250YWluZXIgLnBhcnRfZ3JhcGggLnNraWxsX2NvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IDFyZW07XG5cdG1hcmdpbi1sZWZ0OiAwcmVtO1xufVxuXG4udGVjaG5vbG9naWVzX2NvbnRhaW5lciAucGFydF9ncmFwaCAuc2tpbGxfY29udGFpbmVyIGgzIHtcblx0Zm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0bWFyZ2luOiAwcmVtO1xuXHRwYWRkaW5nOiAwcmVtO1xufVxuXG4udGVjaG5vbG9naWVzX2NvbnRhaW5lciAucGFydF9ncmFwaCAuc2tpbGxfY29udGFpbmVyIC5tZXRlciB7XG5cdHdpZHRoOiA3MCU7XG5cdGhlaWdodDogMC42cmVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmNWZlO1xuXHRib3JkZXItcmFkaXVzOiAxcmVtO1xuXHRtYXJnaW4tdG9wOiAwLjNyZW07XG59XG5cbi50ZWNobm9sb2dpZXNfY29udGFpbmVyIC5wYXJ0X2dyYXBoIC5za2lsbF9jb250YWluZXIgLm1ldGVyIHNwYW4ge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDkxZWE7XG5cdGJvcmRlci1yYWRpdXM6IDFyZW07XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cblxuXG5cblxuXG4vKiAgTU9CSUxFICAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XG5cdC50ZWNobm9sb2dpZXNfY29udGFpbmVyIHtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XG5cdH1cblx0XG5cdC50ZWNobm9sb2dpZXNfY29udGFpbmVyIC5wYXJ0X2ludHJvIC5pbnRlcmVzdHNfY29udGFpbmVyIHtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XG5cdFx0XG5cdH1cblxuXHQudGVjaG5vbG9naWVzX2NvbnRhaW5lciAucGFydF9pbnRybyBoMSB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMnJlbTtcblx0fVxuXG5cdC50ZWNobm9sb2dpZXNfY29udGFpbmVyIC5wYXJ0X2dyYXBoIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDByZW07XG5cdFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcblx0fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG5cdC50ZWNobm9sb2dpZXNfY29udGFpbmVyIC5wYXJ0X2ludHJvIC5pbnRlcmVzdHNfY29udGFpbmVyIHtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XG5cdFx0XG5cdH1cblxuXHQudGVjaG5vbG9naWVzX2NvbnRhaW5lciAucGFydF9pbnRybyBoMSB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0LnRlY2hub2xvZ2llc19jb250YWluZXIgLnBhcnRfZ3JhcGggLnNraWxsX2NvbnRhaW5lciBoNCB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdC50ZWNobm9sb2dpZXNfY29udGFpbmVyIC5wYXJ0X2dyYXBoIC5za2lsbF9jb250YWluZXIgLm1ldGVyIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/technologies/technologies.component.html":
/*!**********************************************************!*\
  !*** ./src/app/technologies/technologies.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"technologies_container\">\n\t<div class=\"part_intro\">\n\t\t<h1>Stuff that excites me</h1>\n\t\t<div class=\"interests_container\">\n\t\t\t<div class=\"card\" style=\"border-bottom: 0.3rem solid #e53935\">\n\t\t\t\t<h2>Software Architecture</h2>\n\t\t\t\t<br>\n\t\t\t\t<i class=\"fas fa-microchip\"></i>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\" style=\"border-bottom: 0.3rem solid #01579b\">\n\t\t\t\t<h2>Web Development</h2>\n\t\t\t\t<br>\n\t\t\t\t<i style=\"margin-left: 0rem;\" class=\"fab fa-html5\"></i>\n\t\t\t\t<i style=\"margin-left: 0.7rem;\" class=\"fab fa-css3-alt\"></i>\n\t\t\t\t<i style=\"margin-left: 0.7rem;\" class=\"fab fa-js\"></i>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\" style=\"border-bottom: 0.3rem solid #004d40\">\n\t\t\t\t<h2>Android Development</h2>\n\t\t\t\t<br>\n\t\t\t\t<i style=\"font-size: 2.8rem;\" class=\"fab fa-android\"></i>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\" style=\"border-bottom: 0.3rem solid #2e7d32\">\n\t\t\t\t<h2>Linux Kernel</h2>\n\t\t\t\t<br>\n\t\t\t\t<i style=\"font-size: 2.8rem;\" class=\"fab fa-linux\"></i>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\" style=\"border-bottom: 0.3rem solid #ef6c00\">\n\t\t\t\t<h2>Technical Writing</h2>\n\t\t\t\t<br>\n\t\t\t\t<i class=\"fas fa-pencil-ruler\"></i>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\" style=\"border-bottom: 0.3rem solid #304ffe\">\n\t\t\t\t<h2>Open Source Software</h2>\n\t\t\t\t<br>\n\t\t\t\t<i style=\"font-size: 2.8rem;\" class=\"fab fa-osi\"></i>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"part_graph\">\n\t\t<h1>My Skills</h1>\n\n\t\t<div class=\"skill_container\">\n\t\t\t<h3>Python</h3>\n\t\t\t<h4 style=\"font-family:'Nunito Sans',sans-serif; font-weight: 400; float: right; margin:0rem; padding: 0rem;\">\n\t\t\t\tAmazing\n\t\t\t</h4>\n\t\t\t<div class=\"meter\">\n\t\t\t\t<span style=\"width: 90%\"></span>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"skill_container\">\n\t\t\t<h3>HTML5, CSS3</h3>\n\t\t\t<h4 style=\"font-family:'Nunito Sans',sans-serif; font-weight: 400; float: right; margin:0rem; padding: 0rem;\">\n\t\t\t\tAmazing.\n\t\t\t</h4>\n\t\t\t<div class=\"meter\">\n\t\t\t\t<span style=\"width: 80%\"></span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t\n\t\t<div class=\"skill_container\">\n\t\t\t<h3>C & C++</h3>\n\t\t\t<h4 style=\"font-family:'Nunito Sans',sans-serif; font-weight: 400; float: right; margin:0rem; padding: 0rem;\">\n\t\t\t\tIntermediate\n\t\t\t</h4>\n\t\t\t<div class=\"meter\">\n\t\t\t\t<span style=\"width: 65%\"></span>\n\t\t\t</div>\n\t\t</div>\n\t\t\t\n\t\t<div class=\"skill_container\">\n\t\t\t<h3>Java, Go</h3>\n\t\t\t<h4 style=\"font-family:'Nunito Sans',sans-serif; font-weight: 400; float: right; margin:0rem; padding: 0rem;\">\n\t\t\t\tIntermediate\n\t\t\t</h4>\n\t\t\t<div class=\"meter\">\n\t\t\t\t<span style=\"width: 65%\"></span>\n\t\t\t</div>\n\t\t</div>\n\t\t\t\n\t\t<div class=\"skill_container\">\n\t\t\t<h3>Angular</h3>\n\t\t\t<h4 style=\"font-family:'Nunito Sans',sans-serif; font-weight: 400; float: right; margin:0rem; padding: 0rem;\">\n\t\t\t\tIntermediate\n\t\t\t</h4>\n\t\t\t<div class=\"meter\">\n\t\t\t\t<span style=\"width: 55%\"></span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"skill_container\">\n\t\t\t<h3>Javascript & NodeJS</h3>\n\t\t\t<h4 style=\"font-family:'Nunito Sans',sans-serif; font-weight: 400; float: right; margin:0rem; padding: 0rem;\">\n\t\t\t\tBeginner\n\t\t\t</h4>\n\t\t\t<div class=\"meter\">\n\t\t\t\t<span style=\"width: 45%\"></span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"skill_container\">\n\t\t\t<h3>Android App Development</h3>\n\t\t\t<h4 style=\"font-family:'Nunito Sans',sans-serif; font-weight: 400; float: right; margin:0rem; padding: 0rem;\">\n\t\t\t\tBeginner\n\t\t\t</h4>\n\t\t\t<div class=\"meter\">\n\t\t\t\t<span style=\"width: 35%\"></span>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"skill_container\">\n\t\t\t<h3>SQL and NoSQL Databases</h3>\n\t\t\t<h4 style=\"font-family:'Nunito Sans',sans-serif; font-weight: 400; float: right; margin:0rem; padding: 0rem;\">\n\t\t\t\tBeginner\n\t\t\t</h4>\n\t\t\t<div class=\"meter\">\n\t\t\t\t<span style=\"width: 32%\"></span>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t\t\n\t\t<h1>I am also familiar with</h1>\n\t\t<p style=\"font-family: 'Nunito Sans', sans-serif; font-weight: 400;\">\n\t\t\tGit, Linux, Vim, Bash, Scrum, Tools by JetBrains, Digital Ocean, Heroku, MongoDB etc.\n\t\t</p>\n\t</div>\n\n\n\n</div>"

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

module.exports = __webpack_require__(/*! /home/junaidrahim/Code/Github-Projects/junaidrahim.me/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map