(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome!</h1>\n<p>ignore the styling for time being ;)</p>\n\n<app-server [userObj]=\"user\"></app-server>\n\n\n\n\n     \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/servers/server.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servers/server.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div *ngIf=\"collapse\">\r\n    \r\n\r\n    <h5>I am working on a project were  a writer can easily write script keeping the track of all the elements in their story</h5>\r\n\r\n<h2>So at present learning and working on the whole design</h2>\r\n\r\n<p>Name:{{userObj.name}}</p>\r\n<p>From:{{userObj.add}}</p>\r\n    <p>Contact:{{userObj.phone}}</p>\r\n\r\n</div>\r\n<div>\r\n    <button (click)=collapseIt()>   \r\n            <div *ngIf=\"collapse;then content else other_content\">here is ignored</div>    \r\n                <ng-template #content>Less Info</ng-template>\r\n                <ng-template #other_content>More Info</ng-template>\r\n    </button>\r\n    \r\n</div>\r\n<div class=\"bottom\"><p>{{date}}</p></div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/servers/sub-server/sub-server.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servers/sub-server/sub-server.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>sub-server works!</p>\n<div class=app-sub-server><p>hi</p></div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    font-style: normal;\r\n    color: rgba(252, 21, 5, 0.938);\r\n    text-align: center;\r\n}\r\np{\r\n    text-align: center\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogcmdiYSgyNTIsIDIxLCA1LCAwLjkzOCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxucHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59Il19 */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _servers_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servers/user.model */ "./src/app/servers/user.model.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.patientid = 1234;
        this.url = "http://localhost:8091/pay?patientid=" + this.patientid;
        this.ServerName = null;
        this.ServerPID = 11;
        this.ServerStatus = 'offline';
        this.statusFlag = false;
        this.buttonState = true;
        this.user = new _servers_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        setTimeout(function () { _this.buttonState = false; }, 2000);
        this.user.name = "Runay Ramdas Dhaygude";
        this.user.add = "satara, Maharashtra";
        this.user.phone = "runaydhaygude97@gmail.com";
    }
    AppComponent.prototype.getPayment = function () {
        this.http.get("" + this.url);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servers_server_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servers/server.component */ "./src/app/servers/server.component.ts");
/* harmony import */ var _servers_sub_server_sub_server_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servers/sub-server/sub-server.component */ "./src/app/servers/sub-server/sub-server.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _servers_server_component__WEBPACK_IMPORTED_MODULE_5__["ServerComponent"], _servers_sub_server_sub_server_component__WEBPACK_IMPORTED_MODULE_6__["SubServerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"] //HttpClientModule is used for REST Api  
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/servers/server.component.css":
/*!**********************************************!*\
  !*** ./src/app/servers/server.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{color: rgb(235, 91, 8);\r\ntext-align: center;}\r\nh5{color: red;\r\n    text-align: center;}\r\n.app-server{margin-left: 1cm}\r\np,div{\r\n    text-align: center;\r\n    border-bottom: 0ch;\r\n    border-top: 0ch;\r\n}\r\n.bottom{\r\n    -moz-text-align-last: bottom;\r\n         text-align-last: bottom;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVycy9zZXJ2ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFHLHNCQUFzQjtBQUN6QixrQkFBa0IsQ0FBQztBQUNuQixHQUFHLFVBQVU7SUFDVCxrQkFBa0IsQ0FBQztBQUN2QixZQUFZLGdCQUFnQjtBQUM1QjtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksNEJBQXVCO1NBQXZCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcnMvc2VydmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntjb2xvcjogcmdiKDIzNSwgOTEsIDgpO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG5oNXtjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO31cclxuLmFwcC1zZXJ2ZXJ7bWFyZ2luLWxlZnQ6IDFjbX1cclxucCxkaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAwY2g7XHJcbiAgICBib3JkZXItdG9wOiAwY2g7XHJcbn1cclxuLmJvdHRvbXtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogYm90dG9tO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/servers/server.component.ts":
/*!*********************************************!*\
  !*** ./src/app/servers/server.component.ts ***!
  \*********************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ "./src/app/servers/user.model.ts");



var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        var _this = this;
        this.userObj = new _user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.collapse = false;
        this.date = new Date().toDateString();
        setInterval(function () {
            var currentDate = new Date();
            _this.date = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
        }, 1000);
    }
    ServerComponent.prototype.collapseIt = function () {
        this.collapse = !this.collapse;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userObj')
    ], ServerComponent.prototype, "userObj", void 0);
    ServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server',
            template: '<app-sub-server>',
            template: __webpack_require__(/*! raw-loader!./server.component.html */ "./node_modules/raw-loader/index.js!./src/app/servers/server.component.html"),
            styles: [__webpack_require__(/*! ./server.component.css */ "./src/app/servers/server.component.css")]
        })
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/app/servers/sub-server/sub-server.component.css":
/*!*************************************************************!*\
  !*** ./src/app/servers/sub-server/sub-server.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-sub-server{\r\n    background-color: brown\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVycy9zdWItc2VydmVyL3N1Yi1zZXJ2ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXJ2ZXJzL3N1Yi1zZXJ2ZXIvc3ViLXNlcnZlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zdWItc2VydmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd25cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/servers/sub-server/sub-server.component.ts":
/*!************************************************************!*\
  !*** ./src/app/servers/sub-server/sub-server.component.ts ***!
  \************************************************************/
/*! exports provided: SubServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubServerComponent", function() { return SubServerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubServerComponent = /** @class */ (function () {
    function SubServerComponent() {
    }
    SubServerComponent.prototype.ngOnInit = function () {
    };
    SubServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sub-server',
            template: __webpack_require__(/*! raw-loader!./sub-server.component.html */ "./node_modules/raw-loader/index.js!./src/app/servers/sub-server/sub-server.component.html"),
            styles: [__webpack_require__(/*! ./sub-server.component.css */ "./src/app/servers/sub-server/sub-server.component.css")]
        })
    ], SubServerComponent);
    return SubServerComponent;
}());



/***/ }),

/***/ "./src/app/servers/user.model.ts":
/*!***************************************!*\
  !*** ./src/app/servers/user.model.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
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

module.exports = __webpack_require__(/*! C:\Users\KBhadke\ScreenPlay\writing\Service\UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map