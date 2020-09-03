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

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutusComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutusComponent.ɵfac = function AboutusComponent_Factory(t) { return new (t || AboutusComponent)(); };
AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutusComponent, selectors: [["app-aboutus"]], decls: 3, vars: 0, consts: [[1, "bg", 2, "height", "85vh", "padding", "30px"], [2, "font-size", "40px", "font-weight", "300"]], template: function AboutusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About us Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutus',
                templateUrl: './aboutus.component.html',
                styleUrls: ['./aboutus.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _foods_foods_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foods/foods.component */ "./src/app/foods/foods.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placeorder/placeorder.component */ "./src/app/placeorder/placeorder.component.ts");
/* harmony import */ var _orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orderhistory/orderhistory.component */ "./src/app/orderhistory/orderhistory.component.ts");










const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'about-us',
        component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__["AboutusComponent"]
    },
    {
        path: 'foods/:catId',
        component: _foods_foods_component__WEBPACK_IMPORTED_MODULE_2__["FoodsComponent"]
    },
    {
        path: 'placeorder/:orderId',
        component: _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_6__["PlaceorderComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'orderhistory',
        component: _orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_7__["OrderhistoryComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.service */ "./src/app/food.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notify.service */ "./src/app/notify.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AppComponent_div_6_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/foods/", cat_r10._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r10.name);
} }
function AppComponent_div_6_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_6_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_6_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_6_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.user.name, " ");
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.menu = 1 - ctx_r13.menu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_6_a_5_Template, 2, 2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_a_6_Template, 2, 0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_6_a_7_Template, 2, 0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_6_button_8_Template, 3, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cats);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.name);
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.menu = 1 - ctx_r15.menu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/foods/", cat_r17._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r17.name);
} }
function AppComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.user.name, " ");
} }
class AppComponent {
    constructor(foodService, auth, router, activated, notify) {
        this.foodService = foodService;
        this.auth = auth;
        this.router = router;
        this.activated = activated;
        this.notify = notify;
        this.title = 'food-booking-user';
        this.menu = 0;
        this.user = { name: null };
        this.cats = [];
        this.notifSubs = null;
    }
    ngOnInit() {
        this.notifSubs = this.notify.getNotification()
            .subscribe(msg => {
            if (msg == 'userIn') {
                this.auth.getUser()
                    .subscribe(res => {
                    console.log(res);
                    this.user.name = res.name;
                }, err => {
                    console.log(err);
                });
            }
        });
        if (localStorage.getItem('token')) {
            this.auth.getUser()
                .subscribe(res => {
                console.log(res);
                this.user.name = res.name;
            }, err => {
                console.log(err);
            });
        }
        this.foodService.getAllCat()
            .subscribe((res, err) => {
            if (err)
                console.log(err);
            else {
                console.log(res);
                this.cats = res;
            }
        });
    }
    ngOnDestroy() {
        this.notifSubs.unSubscribe();
    }
    logout() {
        if (!confirm('logout ?')) {
            return;
        }
        localStorage.removeItem('token');
        this.router.navigate(['login']);
        this.user.name = null;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 6, consts: [[1, "header", 2, "background-color", "black"], [1, "logo"], ["id", "dropmenu", 1, "btn-fa", 2, "color", "white", "position", "absolute", "right", "30px", 3, "click"], [1, "fa", "fa-bars"], ["class", "dropnavbar", "style", "margin:0 ; max-width: 90vw; text-align: left ;", 3, "click", 4, "ngIf"], ["class", "blocker", 3, "click", 4, "ngIf"], ["id", "traynavbar", 1, "traynavbar", 2, "margin", "0", "max-width", "90vw", "text-align", "left"], ["routerLinkActive", "active", "routerLink", "/home"], ["routerLinkActive", "active", "routerLink", "/about-us"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", "routerLink", "/orderhistory", 4, "ngIf"], ["routerLinkActive", "active", "routerLink", "login", 4, "ngIf"], ["class", "btn", "style", "color: white; background-color: rgba(255, 255, 255, .1); border-radius: 20px;", 3, "click", 4, "ngIf"], [1, "dropnavbar", 2, "margin", "0", "max-width", "90vw", "text-align", "left", 3, "click"], ["routerLinkActive", "active", 3, "routerLink"], ["routerLinkActive", "active", "routerLink", "/orderhistory"], ["routerLinkActive", "active", "routerLink", "login"], [1, "btn", 2, "color", "white", "background-color", "rgba(255, 255, 255, .1)", "border-radius", "20px", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-power-off"], [1, "blocker", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Logo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.menu = 1 - ctx.menu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 9, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_a_13_Template, 2, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_a_14_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_a_15_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_button_16_Template, 3, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _foods_foods_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foods/foods.component */ "./src/app/foods/foods.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./food.service */ "./src/app/food.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./placeorder/placeorder.component */ "./src/app/placeorder/placeorder.component.ts");
/* harmony import */ var _orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orderhistory/orderhistory.component */ "./src/app/orderhistory/orderhistory.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _food_service__WEBPACK_IMPORTED_MODULE_10__["FoodService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptorService"],
            multi: true
        }], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _foods_foods_component__WEBPACK_IMPORTED_MODULE_5__["FoodsComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_12__["AboutusComponent"],
        _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_13__["PlaceorderComponent"],
        _orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_14__["OrderhistoryComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _foods_foods_component__WEBPACK_IMPORTED_MODULE_5__["FoodsComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_12__["AboutusComponent"],
                    _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_13__["PlaceorderComponent"],
                    _orderhistory_orderhistory_component__WEBPACK_IMPORTED_MODULE_14__["OrderhistoryComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _food_service__WEBPACK_IMPORTED_MODULE_10__["FoodService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptorService"],
                        multi: true
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AuthService {
    constructor(http) {
        this.http = http;
        this.signUpUrl = 'http://localhost:5000/userAuth/signUp';
        this.loginUrl = 'http://localhost:5000/userAuth/logIn';
    }
    signUp(form) {
        console.log(form);
        return this.http.post(this.signUpUrl, form);
    }
    logIn(form) {
        return this.http.post(this.loginUrl, form);
    }
    getUser() {
        return this.http.get('http://localhost:5000/userAuth/getUser');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getOrdersByUserId(id) {
        return this.http.get('http://localhost:5000/order/getOrdersByUserId/' + id);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/food.service.ts":
/*!*********************************!*\
  !*** ./src/app/food.service.ts ***!
  \*********************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class FoodService {
    constructor(http) {
        this.http = http;
        this.getAllCatUrl = 'http://localhost:5000/foods/getAllCat';
        this.getFoodsByCatIdUrl = 'http://localhost:5000/foods/getFoodsByCatId/';
    }
    getAllCat() {
        return this.http.get(this.getAllCatUrl);
    }
    getFoodsByCatId(catId) {
        return this.http.get(this.getFoodsByCatIdUrl + catId);
    }
    getImage(id) {
        return this.http.get('http://localhost:5000/files/getImage/' + id);
    }
    getFoodById(fid) {
        return this.http.get('http://localhost:5000/foods/getFoodById/' + fid);
    }
    placeOrder(order) {
        return this.http.post('http://localhost:5000/order/placeOrder', order);
    }
}
FoodService.ɵfac = function FoodService_Factory(t) { return new (t || FoodService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FoodService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FoodService, factory: FoodService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/foods/foods.component.ts":
/*!******************************************!*\
  !*** ./src/app/foods/foods.component.ts ***!
  \******************************************/
/*! exports provided: FoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodsComponent", function() { return FoodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../food.service */ "./src/app/food.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function FoodsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FoodsComponent_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const food_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.placeOrder(food_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const food_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", food_r1.imageDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](food_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](food_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Place Order Rs.", food_r1.cost, "/-");
} }
class FoodsComponent {
    constructor(active, fs, router) {
        this.active = active;
        this.fs = fs;
        this.router = router;
        this.foods = [];
    }
    ngOnInit() {
        this.active.url.subscribe((res) => {
            if (res) {
                var catId = res[1].path;
                this.fs.getFoodsByCatId(catId)
                    .subscribe((res, err) => {
                    if (err)
                        console.log(err);
                    else {
                        this.foods = res;
                        console.log(this.foods);
                        this.loadImages(0);
                    }
                });
            }
        });
    }
    loadImages(i) {
        if (!this.foods[i].image) {
            console.log('skip' + i);
            this.foods[i].imageDataUrl = '';
            i += 1;
            if (i < this.foods.length)
                this.loadImages(i);
            return;
        }
        this.fs.getImage(this.foods[i].image)
            .subscribe(res => {
            this.foods[i].imageDataUrl = 'data:image/jpg;base64,' + res.data;
            i += 1;
            if (i < this.foods.length)
                this.loadImages(i);
        }, err => {
            console.log(err);
        });
    }
    placeOrder(foodId) {
        this.router.navigate([`placeorder/${foodId}`]);
    }
}
FoodsComponent.ɵfac = function FoodsComponent_Factory(t) { return new (t || FoodsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FoodsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FoodsComponent, selectors: [["app-foods"]], decls: 2, vars: 1, consts: [[2, "min-height", "88vh", "height", "100%", "padding", "20px", "background-color", "rgb(230, 230, 230)"], ["style", "display: inline-block; height: fit-content; width: 200px; background-color: white; display: inline-flex;justify-content: center; filter: drop-shadow(2px 2px 10px gray); margin: 10px;", 4, "ngFor", "ngForOf"], [2, "display", "inline-block", "height", "fit-content", "width", "200px", "background-color", "white", "display", "inline-flex", "justify-content", "center", "filter", "drop-shadow(2px 2px 10px gray)", "margin", "10px"], ["height", "200px", "width", "200px", "alt", "", 2, "object-fit", "cover", 3, "src"], [2, "margin", "10px"], [2, "font-size", "12px", "font-weight", "600"], [2, "font-size", "11px", "color", "grey", "font-weight", "300"], [1, "btn", 3, "click"]], template: function FoodsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FoodsComponent_div_1_Template, 12, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foods);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RzL2Zvb2RzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-foods',
                templateUrl: './foods.component.html',
                styleUrls: ['./foods.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[1, "bg", 2, "height", "85vh", "padding", "30px"], [2, "font-size", "40px", "font-weight", "300"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notify.service */ "./src/app/notify.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function LoginComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_form_7_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logIn(_r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.invalid);
} }
function LoginComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_form_8_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.signUp(_r6.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r6.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r6.invalid);
} }
function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.alert, " ");
} }
class LoginComponent {
    constructor(auth, router, activeRoute, notify) {
        this.auth = auth;
        this.router = router;
        this.activeRoute = activeRoute;
        this.notify = notify;
        this.nxt = null;
        this.login = 1;
        this.alert = null;
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe(res => {
            this.nxt = res.nxt;
        });
    }
    signUp(formdata) {
        this.auth.signUp(formdata)
            .subscribe((res, err) => {
            if (err)
                console.log(err);
            else {
                console.log(res);
                if (res.exist == 1) {
                    this.alert = "Email Address already in use !";
                    return;
                }
                if (res.saved) {
                    this.alert = 'Registered successfully ! Login to continue..';
                    if (this.alert) {
                        setInterval(() => {
                            this.alert = null;
                        }, 5000);
                    }
                    return;
                }
            }
        });
    }
    logIn(form) {
        this.auth.logIn(form)
            .subscribe((res, err) => {
            if (err)
                console.log(err);
            else {
                console.log(res);
                if (res.found == 0) {
                    this.alert = 'Please enter registered email address.';
                    return;
                }
                if (res.pass == 0) {
                    this.alert = 'Invalid password !';
                    return;
                }
                localStorage.setItem('token', res.token);
                this.notify.updateNotification('userIn');
                if (this.nxt) {
                    this.router.navigate([this.nxt]);
                }
                else {
                    this.router.navigate(['/home']);
                }
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 10, vars: 7, consts: [[1, "bg", 2, "min-height", "88vh", "height", "100%", "padding", "20px", "display", "flex", "align-items", "center", "flex-direction", "column"], [1, "formContainer", 2, "background-color", "black", "max-width", "fit-content", "margin-top", "10vh"], [1, "traynavbar"], [3, "click"], ["action", "", "class", "customForm1", 3, "submit", 4, "ngIf"], ["style", "color:white; opacity: .4; font-size: 11px; background-color: rgba(255, 255,255, .1); padding: 10px 20px; border-radius: 20px;", 4, "ngIf"], ["action", "", 1, "customForm1", 3, "submit"], ["logInForm", "ngForm"], ["for", ""], ["required", "", "ngModel", "", "name", "email", "type", "text"], ["required", "", "ngModel", "", "name", "password", "type", "password"], ["type", "submit", 3, "disabled"], ["signUpForm", "ngForm"], ["required", "", "ngModel", "", "name", "name", "type", "text"], ["required", "", "ngModel", "", "name", "phone", "type", "text"], ["required", "", "ngModel", "", "name", "address", "type", "text"], ["minlength", "6", "required", "", "ngModel", "", "name", "password", "type", "password"], [2, "color", "white", "opacity", ".4", "font-size", "11px", "background-color", "rgba(255, 255,255, .1)", "padding", "10px 20px", "border-radius", "20px"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_3_listener() { return ctx.login = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_5_listener() { return ctx.login = 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_form_7_Template, 10, 3, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_form_8_Template, 19, 3, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/notify.service.ts":
/*!***********************************!*\
  !*** ./src/app/notify.service.ts ***!
  \***********************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class NotifyService {
    constructor() {
        this.notification = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    updateNotification(data) {
        this.notification.next(data);
    }
    getNotification() {
        return this.notification.asObservable();
    }
}
NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(); };
NotifyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/orderhistory/orderhistory.component.ts":
/*!********************************************************!*\
  !*** ./src/app/orderhistory/orderhistory.component.ts ***!
  \********************************************************/
/*! exports provided: OrderhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryComponent", function() { return OrderhistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function OrderhistoryComponent_table_1_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r3.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r3.cost, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r3.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r3.cost * order_r3.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r3.customeraddress, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r3.orderDate, " ");
} }
function OrderhistoryComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "S.No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Food name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delivery Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrderhistoryComponent_table_1_tr_18_Template, 17, 8, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.orders);
} }
function OrderhistoryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delivery Address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ordered on: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r6 + 1, ". ", order_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r5.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r5.customeraddress, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r5.orderDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", order_r5.cost, " x ", order_r5.quantity, " = Rs. ", order_r5.cost * order_r5.quantity, " ");
} }
class OrderhistoryComponent {
    constructor(auth) {
        this.auth = auth;
        this.orders = [];
    }
    ngOnInit() {
        this.auth.getUser()
            .subscribe(res => {
            this.auth.getOrdersByUserId(res._id)
                .subscribe(res => {
                console.log(res);
                this.orders = res;
            }, err => {
                console.log(err);
            });
        }, err => {
            console.log(err);
        });
    }
}
OrderhistoryComponent.ɵfac = function OrderhistoryComponent_Factory(t) { return new (t || OrderhistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
OrderhistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderhistoryComponent, selectors: [["app-orderhistory"]], decls: 3, vars: 2, consts: [[1, "bg", 2, "padding", "20px", "min-height", "88vh"], ["class", "customTable1", 4, "ngIf"], ["style", "width: 300px; margin: 10px; filter: drop-shadow(2px 5px 10px gray); min-height: 150px; height: fit-content; padding-bottom: 10px; background-color: white; display: inline-block; vertical-align: top;", 4, "ngFor", "ngForOf"], [1, "customTable1"], [4, "ngFor", "ngForOf"], [2, "width", "300px", "margin", "10px", "filter", "drop-shadow(2px 5px 10px gray)", "min-height", "150px", "height", "fit-content", "padding-bottom", "10px", "background-color", "white", "display", "inline-block", "vertical-align", "top"], [2, "font-size", "12px", "color", "white", "width", "280px", "background-color", "black", "padding", "10px 10px"], [2, "font-size", "12px", "margin", "10px"], [2, "font-size", "12px", "margin-left", "10px"]], template: function OrderhistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderhistoryComponent_table_1_Template, 19, 1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderhistoryComponent_div_2_Template, 27, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 0 && false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyaGlzdG9yeS9vcmRlcmhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */", "tr[_ngcontent-%COMP%]{\n            filter: drop-shadow(2px 2px 5px gray);\n\n        }\n        td[_ngcontent-%COMP%]{\n            text-align: center;\n            background-color: white;\n            color: black;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderhistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-orderhistory',
                templateUrl: './orderhistory.component.html',
                styleUrls: ['./orderhistory.component.scss']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/placeorder/placeorder.component.ts":
/*!****************************************************!*\
  !*** ./src/app/placeorder/placeorder.component.ts ***!
  \****************************************************/
/*! exports provided: PlaceorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceorderComponent", function() { return PlaceorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../food.service */ "./src/app/food.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function PlaceorderComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PlaceorderComponent_form_7_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.placeOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Food Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Food Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Food Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Customer Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Customer Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlaceorderComponent_form_7_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.order.customeraddress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlaceorderComponent_form_7_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.order.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Place");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.order.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.order.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.order.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.order.customername);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.order.customeremail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.order.customerphone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.order.customeraddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.order.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total: ", ctx_r0.order.cost * ctx_r0.order.quantity, "/- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
} }
class PlaceorderComponent {
    constructor(auth, foodService, activeRoute, router) {
        this.auth = auth;
        this.foodService = foodService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.order = {};
    }
    ngOnInit() {
        if (!this.auth.getToken()) {
            console.log(this.router.url);
            this.router.navigate(['login'], { queryParams: { nxt: this.router.url } });
        }
        this.activeRoute.url.subscribe((res) => {
            let foodId = res[1].path;
            this.foodService.getFoodById(foodId)
                .subscribe((res, err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                this.order['name'] = res.name;
                this.order['cost'] = res.cost;
                this.order['description'] = res.description;
                this.order['quantity'] = 1;
                this.auth.getUser()
                    .subscribe(res => {
                    this.order['customername'] = res.name;
                    this.order['customerphone'] = res.phone;
                    this.order['customeremail'] = res.email;
                    this.order['customeraddress'] = res.address;
                    this.order['customerId'] = res._id;
                }, err => {
                    console.log(err);
                });
            });
        });
    }
    placeOrder() {
        this.foodService.placeOrder(this.order)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['orderhistory']);
        }, err => {
            console.log(err);
        });
    }
}
PlaceorderComponent.ɵfac = function PlaceorderComponent_Factory(t) { return new (t || PlaceorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PlaceorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaceorderComponent, selectors: [["app-placeorder"]], decls: 8, vars: 1, consts: [[1, "bg", 2, "height", "fit-content", "min-height", "100vh", "display", "flex", "justify-content", "center"], [2, "padding", "10px", "font-size", "30px", "text-align", "center"], [1, "formContainer1", 2, "background-color", "rgb(35, 35, 35)", "padding", "20px 5px", "text-align", "center", "color", "white", "min-width", "300px"], [2, "display", "inline-block"], ["action", "", "class", "customForm1", 3, "submit", 4, "ngIf"], ["action", "", 1, "customForm1", 3, "submit"], ["orderForm", "ngForm"], ["for", ""], ["disabled", "", "name", "name", "type", "text", 3, "ngModel"], ["name", "description", "disabled", "", "type", "text", 3, "ngModel"], ["name", "cost", "disabled", "", "type", "text", 3, "ngModel"], ["name", "customername", "disabled", "", "type", "text", 3, "ngModel"], ["name", "customeremail", "disabled", "", "type", "text", 3, "ngModel"], ["name", "customerphone", "disabled", "", "type", "text", 3, "ngModel"], [2, "color", "red"], ["required", "", "name", "customeraddress", "type", "text", 3, "ngModel", "ngModelChange"], ["autofocus", "", "required", "", "name", "quantity", "type", "number", 3, "ngModel", "ngModelChange"], [2, "font-size", "15px"], ["type", "submit", 2, "align-self", "flex-end", 3, "disabled"]], template: function PlaceorderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Food Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlaceorderComponent_form_7_Template, 34, 10, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order["name"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlb3JkZXIvcGxhY2VvcmRlci5jb21wb25lbnQuc2NzcyJ9 */", "input[_ngcontent-%COMP%]{\n                        width: 200px;\n                    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceorderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-placeorder',
                templateUrl: './placeorder.component.html',
                styleUrls: ['./placeorder.component.scss']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let auth = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        let newReq = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + auth.getToken()
            }
        });
        return next.handle(newReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\food-booking-app\food-booking-user\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map