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
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_project_history_project_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/project-history/project-history.component */ "./src/app/pages/project-history/project-history.component.ts");
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard/auth-guard.service */ "./src/app/services/auth-guard/auth-guard.service.ts");








const routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'log-in' },
            { path: 'log-in', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
        ] },
    { path: 'home', canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]], component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'project-history', canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]], component: _pages_project_history_project_history_component__WEBPACK_IMPORTED_MODULE_4__["ProjectHistoryComponent"] },
    { path: '**', redirectTo: 'auth' }
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/top-navigation/top-navigation.component */ "./src/app/components/top-navigation/top-navigation.component.ts");
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/side-menu/side-menu.component */ "./src/app/components/side-menu/side-menu.component.ts");
/* harmony import */ var _components_mobile_bottom_navigation_mobile_bottom_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mobile-bottom-navigation/mobile-bottom-navigation.component */ "./src/app/components/mobile-bottom-navigation/mobile-bottom-navigation.component.ts");








function AppComponent_top_navigation_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "top-navigation");
} }
function AppComponent_side_menu_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "side-menu");
} }
function AppComponent_mobile_bottom_navigation_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mobile-bottom-navigation");
} }
const _c0 = function (a0) { return { "content-container": a0 }; };
class AppComponent {
    constructor(router) {
        this.router = router;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.urlAfterRedirects.includes('log-in')) {
                    this.onLoginPage = true;
                }
                else {
                    this.onLoginPage = false;
                }
            }
        });
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 6, consts: [[4, "ngIf"], [3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_top_navigation_1_Template, 1, 0, "top-navigation", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_side_menu_2_Template, 1, 0, "side-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_mobile_bottom_navigation_5_Template, 1, 0, "mobile-bottom-navigation", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.onLoginPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.onLoginPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, !ctx.onLoginPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.onLoginPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_3__["TopNavigationComponent"], _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"], _components_mobile_bottom_navigation_mobile_bottom_navigation_component__WEBPACK_IMPORTED_MODULE_5__["MobileBottomNavigationComponent"]], styles: [".page-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  box-sizing: border-box;\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 1rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #4D4D4D;\n}\n\n.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  border: none;\n  border-top: 3px solid #E6E6E6;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 1.5rem;\n  width: 100%;\n  border: 1px solid #CCCCCC;\n  border-radius: 1rem;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #727171;\n}\n\n.button[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%], .button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 16px;\n  padding: 1.5rem;\n  border-sizing: border-box;\n  color: #FFF;\n  border: none;\n  border-radius: 2.6rem;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button-transparent-primary-small[_ngcontent-%COMP%]:hover, .button-primary[_ngcontent-%COMP%]:hover, .button-primary-small[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n  transition: 0.5s ease-in-out;\n}\n\n.button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  background-color: #EA2258;\n}\n\n.button-transparent-primary-small[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border: 1px solid #EA2258;\n  color: #EA2258;\n}\n\n.button-small[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  padding: 1rem 1.5rem;\n}\n\n.text-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n@media (min-width: 420px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n\n.content-container[_ngcontent-%COMP%] {\n  padding: 3rem;\n  padding-top: 11rem;\n  padding-left: 23rem;\n}\n\n@media (max-width: 420px) {\n  .content-container[_ngcontent-%COMP%] {\n    padding: 2rem;\n    padding-top: 11rem;\n    padding-bottom: 11rem;\n    box-sizing: border-box;\n    width: 100vw;\n    max-height: 100vh;\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGUvY29tbW9uLnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvc3R5bGUvdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ2RGOztBRGdCQTtFQUNFLHNCRXJCTTtFRnNCTixtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0FDYkY7O0FEY0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1pKOztBRGFFO0VBQ0UsaUJBQUE7RUFDQSxjRTNCSztBRGdCVDs7QURZRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNWSjs7QURZQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ1RGOztBRFVFO0VBQ0UsY0UxQ0s7QURrQ1Q7O0FEVUE7RUEvQ0UsYUFBQTtFQUNBLG1CQStDMEI7RUE5QzFCLG1CQThDdUM7RUE3Q3ZDLHVCQTZDeUQ7RUE1Q3pELGVBTCtDO0VBa0QvQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0VyRE07RUZzRE4sWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRElFO0VBakRBLHVCQUFBO0VBR0EsNEJBQUE7QUM4Q0Y7O0FESUE7RUFFRSx5QkVqRUk7QUQrRE47O0FEUUE7RUFHRSxzQkV4RU07RUZ5RU4seUJBQUE7RUFDQSxjRTVFSTtBRHFFTjs7QURTQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNORjs7QURRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRE9BO0VBQ0U7SUFDRSxhQUFBO0VDSkY7QUFDRjs7QUFsRkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQW9GRjs7QUFsRkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBcUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcmlhYmxlcy5zYXNzJ1xyXG5cclxuQG1peGluIGZsZXgoJGRpcmVjdGlvbiwgJGFsaWduLCAkanVzdGlmeSwgJHdyYXA6IHdyYXApXHJcbiAgZGlzcGxheTogZmxleFxyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uXHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnblxyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnlcclxuICBmbGV4LXdyYXA6ICR3cmFwXHJcblxyXG5AbWl4aW4gYnJpZ2h0bmVzcygkdmFsdWUpXHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKCR2YWx1ZSlcclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKClcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0XHJcblxyXG4ucGFnZS1jb250YWluZXJcclxuICB3aWR0aDogMTAwdndcclxuICBtaW4taGVpZ2h0OiAxMDB2aFxyXG4gIG92ZXJmbG93LXg6IGhpZGRlblxyXG4gIG92ZXJmbG93LXk6IGF1dG9cclxuICBwYWRkaW5nOiAycmVtXHJcblxyXG4uY2FyZFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZVxyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW1cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5XHJcbiAgcGFkZGluZzogMXJlbVxyXG4gICYtdGl0bGVcclxuICAgIGZvbnQtc2l6ZTogMnJlbVxyXG4gICAgZm9udC13ZWlnaHQ6IG1hcC1nZXQoJGZvbnQtd2VpZ2h0LCAnc2VtaS1ib2xkJylcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW1cclxuICAmLXRleHRcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtXHJcbiAgICBjb2xvcjogJGdyZXktNVxyXG4gIGhyXHJcbiAgICBtYXJnaW46IDBcclxuICAgIGJvcmRlcjogbm9uZVxyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICRncmV5XHJcblxyXG5pbnB1dFxyXG4gIGZvbnQtc2l6ZTogMTZweFxyXG4gIHBhZGRpbmc6IDEuNXJlbVxyXG4gIHdpZHRoOiAxMDAlXHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyZXktMlxyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW1cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94XHJcbiAgJjo6cGxhY2Vob2xkZXJcclxuICAgIGNvbG9yOiAkZ3JleS00XHJcblxyXG4uYnV0dG9uXHJcbiAgQGluY2x1ZGUgZmxleCgkZGlyZWN0aW9uOiByb3csICRhbGlnbjogY2VudGVyLCAkanVzdGlmeTogY2VudGVyKVxyXG4gIGZvbnQtc2l6ZTogMTZweFxyXG4gIHBhZGRpbmc6IDEuNXJlbVxyXG4gIGJvcmRlci1zaXppbmc6IGJvcmRlci1ib3hcclxuICBjb2xvcjogJHdoaXRlXHJcbiAgYm9yZGVyOiBub25lXHJcbiAgYm9yZGVyLXJhZGl1czogMi42cmVtXHJcbiAgY3Vyc29yOiBwb2ludGVyXHJcbiAgJjpob3ZlclxyXG4gICAgQGluY2x1ZGUgYnJpZ2h0bmVzcygxLjIpXHJcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKClcclxuXHJcbi5idXR0b24tcHJpbWFyeVxyXG4gIEBleHRlbmQgLmJ1dHRvblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRyZWRcclxuXHJcbi5idXR0b24tcHJpbWFyeS1zbWFsbFxyXG4gIEBleHRlbmQgLmJ1dHRvbi1wcmltYXJ5XHJcbiAgQGV4dGVuZCAuYnV0dG9uLXNtYWxsXHJcblxyXG4uYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGxcclxuICBAZXh0ZW5kIC5idXR0b25cclxuICBAZXh0ZW5kIC5idXR0b24tc21hbGxcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGVcclxuICBib3JkZXI6IDFweCBzb2xpZCAkcmVkXHJcbiAgY29sb3I6ICRyZWRcclxuXHJcbi5idXR0b24tc21hbGxcclxuICBmb250LXNpemU6IDEuNHJlbVxyXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtXHJcblxyXG4udGV4dC10aXRsZVxyXG4gIGZvbnQtc2l6ZTogM3JlbVxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpXHJcbiAgLmNhcmRcclxuICAgIHBhZGRpbmc6IDJyZW0iLCIucGFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY2FyZC10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjNEQ0RDREO1xufVxuLmNhcmQgaHIge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFNkU2RTY7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3MjcxNzE7XG59XG5cbi5idXR0b24sIC5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbCwgLmJ1dHRvbi1wcmltYXJ5LCAuYnV0dG9uLXByaW1hcnktc21hbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyLXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMi42cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnV0dG9uOmhvdmVyLCAuYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGw6aG92ZXIsIC5idXR0b24tcHJpbWFyeTpob3ZlciwgLmJ1dHRvbi1wcmltYXJ5LXNtYWxsOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idXR0b24tcHJpbWFyeSwgLmJ1dHRvbi1wcmltYXJ5LXNtYWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBMjI1ODtcbn1cblxuLmJ1dHRvbi10cmFuc3BhcmVudC1wcmltYXJ5LXNtYWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VBMjI1ODtcbiAgY29sb3I6ICNFQTIyNTg7XG59XG5cbi5idXR0b24tc21hbGwsIC5idXR0b24tcHJpbWFyeS1zbWFsbCwgLmJ1dHRvbi10cmFuc3BhcmVudC1wcmltYXJ5LXNtYWxsIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MjBweCkge1xuICAuY2FyZCB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxufVxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogM3JlbTtcbiAgcGFkZGluZy10b3A6IDExcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDIzcmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTFyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbn0iLCIkcmVkOiAjRUEyMjU4XHJcbiRwaW5rOiAjRkZFOEVBXHJcbiR3aGl0ZTogI0ZGRlxyXG4kZ3JleTogI0U2RTZFNlxyXG4kZ3JleS0yOiAjQ0NDQ0NDXHJcbiRncmV5LTM6ICM5MzkzOTNcclxuJGdyZXktNDogIzcyNzE3MVxyXG4kZ3JleS01OiAjNEQ0RDREXHJcbiRncmV5LTY6ICNFREVERURcclxuJGdyZXktNzogI0M2QzZDNlxyXG4kZ3JlZW46ICM1OEI1NzFcclxuJGdyZWVuLTI6ICMxRTk1M0VcclxuJHllbGxvdzogI0Y0OTcwNVxyXG4kekluZGV4OiAoJzEnOiAxLCAnMic6IDIpXHJcbiRmb250LXdlaWdodDogKCdzZW1pLWJvbGQnOiA2MDApXHJcbiRib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDEwXHJcbiRicmVhay1wb2ludDogKCdtb2JpbGUnOiA0MjBweCwgJ21lZGl1bSc6IDg0MHB4KSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _app_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/services/auth-guard/auth-guard.service */ "./src/app/services/auth-guard/auth-guard.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/top-navigation/top-navigation.component */ "./src/app/components/top-navigation/top-navigation.component.ts");
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/side-menu/side-menu.component */ "./src/app/components/side-menu/side-menu.component.ts");
/* harmony import */ var _components_mobile_bottom_navigation_mobile_bottom_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mobile-bottom-navigation/mobile-bottom-navigation.component */ "./src/app/components/mobile-bottom-navigation/mobile-bottom-navigation.component.ts");
/* harmony import */ var _pages_project_history_project_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/project-history/project-history.component */ "./src/app/pages/project-history/project-history.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _app_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_9__["TopNavigationComponent"],
        _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__["SideMenuComponent"],
        _components_mobile_bottom_navigation_mobile_bottom_navigation_component__WEBPACK_IMPORTED_MODULE_11__["MobileBottomNavigationComponent"],
        _pages_project_history_project_history_component__WEBPACK_IMPORTED_MODULE_12__["ProjectHistoryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                    _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_9__["TopNavigationComponent"],
                    _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_10__["SideMenuComponent"],
                    _components_mobile_bottom_navigation_mobile_bottom_navigation_component__WEBPACK_IMPORTED_MODULE_11__["MobileBottomNavigationComponent"],
                    _pages_project_history_project_history_component__WEBPACK_IMPORTED_MODULE_12__["ProjectHistoryComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [
                    _app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                    _app_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/mobile-bottom-navigation/mobile-bottom-navigation.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/mobile-bottom-navigation/mobile-bottom-navigation.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MobileBottomNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileBottomNavigationComponent", function() { return MobileBottomNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_mobile_bottom_navigation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/mobile-bottom-navigation.model */ "./src/app/models/mobile-bottom-navigation.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "item-active": a0 }; };
class MobileBottomNavigationComponent {
    constructor() {
        this.icons = [
            new _models_mobile_bottom_navigation_model__WEBPACK_IMPORTED_MODULE_1__["MIcon"](true, '../../../assets/svgs/icon-home-red.svg', '../../../assets/svgs/icon-home.svg'),
            new _models_mobile_bottom_navigation_model__WEBPACK_IMPORTED_MODULE_1__["MIcon"](false, '../../../assets/svgs/icon-video-red.svg', '../../../assets/svgs/icon-video.svg'),
            new _models_mobile_bottom_navigation_model__WEBPACK_IMPORTED_MODULE_1__["MIcon"](false, '../../../assets/svgs/icon-add-red.svg', '../../../assets/svgs/icon-add-red.svg'),
            new _models_mobile_bottom_navigation_model__WEBPACK_IMPORTED_MODULE_1__["MIcon"](false, '../../../assets/svgs/icon-help.svg', '../../../assets/svgs/icon-help.svg'),
            new _models_mobile_bottom_navigation_model__WEBPACK_IMPORTED_MODULE_1__["MIcon"](false, '../../../assets/svgs/icon-settings.svg', '../../../assets/svgs/icon-settings.svg')
        ];
    }
    ngOnInit() {
    }
    onItemClick(index) {
        this.icons.forEach(icon => icon.is_active = false);
        this.icons[index].is_active = true;
    }
}
MobileBottomNavigationComponent.ɵfac = function MobileBottomNavigationComponent_Factory(t) { return new (t || MobileBottomNavigationComponent)(); };
MobileBottomNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileBottomNavigationComponent, selectors: [["mobile-bottom-navigation"]], decls: 21, vars: 11, consts: [[1, "mobile-bot-nav"], [1, "item", 3, "ngClass", "click"], [3, "src"], [1, "item-add"], [1, "item"]], template: function MobileBottomNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileBottomNavigationComponent_Template_div_click_1_listener() { return ctx.onItemClick(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileBottomNavigationComponent_Template_div_click_5_listener() { return ctx.onItemClick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.icons[0].is_active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icons[0].is_active ? ctx.icons[0].active_url : ctx.icons[0].inactive_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.icons[1].is_active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icons[1].is_active ? ctx.icons[1].active_url : ctx.icons[1].inactive_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icons[2].active_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icons[3].is_active ? ctx.icons[3].active_url : ctx.icons[3].inactive_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icons[4].is_active ? ctx.icons[4].active_url : ctx.icons[4].inactive_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".page-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  box-sizing: border-box;\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 1rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #4D4D4D;\n}\n\n.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  border: none;\n  border-top: 3px solid #E6E6E6;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 1.5rem;\n  width: 100%;\n  border: 1px solid #CCCCCC;\n  border-radius: 1rem;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #727171;\n}\n\n.button[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%], .button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 16px;\n  padding: 1.5rem;\n  border-sizing: border-box;\n  color: #FFF;\n  border: none;\n  border-radius: 2.6rem;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button-transparent-primary-small[_ngcontent-%COMP%]:hover, .button-primary[_ngcontent-%COMP%]:hover, .button-primary-small[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n  transition: 0.5s ease-in-out;\n}\n\n.button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  background-color: #EA2258;\n}\n\n.button-transparent-primary-small[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border: 1px solid #EA2258;\n  color: #EA2258;\n}\n\n.button-small[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  padding: 1rem 1.5rem;\n}\n\n.text-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n@media (min-width: 420px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n\n.mobile-bot-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 420px) {\n  .mobile-bot-nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    display: flex;\n    height: 8rem;\n    position: fixed;\n    bottom: 0;\n    width: 100vw;\n    box-sizing: border-box;\n    z-index: 2;\n    background-color: #FFF;\n    box-shadow: 0px -3px 12px #00000010;\n    padding: 0 2rem;\n  }\n\n  .item[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n  }\n  .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-top: 0.5rem;\n    font-size: 1.1rem;\n  }\n\n  .item-active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #EA2258;\n  }\n\n  .item-add[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    position: relative;\n    top: -2rem;\n  }\n  .item-add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGUvY29tbW9uLnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9iaWxlLWJvdHRvbS1uYXZpZ2F0aW9uL21vYmlsZS1ib3R0b20tbmF2aWdhdGlvbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvc3R5bGUvdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ2RGOztBRGdCQTtFQUNFLHNCRXJCTTtFRnNCTixtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0FDYkY7O0FEY0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1pKOztBRGFFO0VBQ0UsaUJBQUE7RUFDQSxjRTNCSztBRGdCVDs7QURZRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNWSjs7QURZQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ1RGOztBRFVFO0VBQ0UsY0UxQ0s7QURrQ1Q7O0FEVUE7RUEvQ0UsYUFBQTtFQUNBLG1CQStDMEI7RUE5QzFCLG1CQThDdUM7RUE3Q3ZDLHVCQTZDeUQ7RUE1Q3pELGVBTCtDO0VBa0QvQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0VyRE07RUZzRE4sWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRElFO0VBakRBLHVCQUFBO0VBR0EsNEJBQUE7QUM4Q0Y7O0FESUE7RUFFRSx5QkVqRUk7QUQrRE47O0FEUUE7RUFHRSxzQkV4RU07RUZ5RU4seUJBQUE7RUFDQSxjRTVFSTtBRHFFTjs7QURTQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNORjs7QURRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRE9BO0VBQ0U7SUFDRSxhQUFBO0VDSkY7QUFDRjs7QUFsRkE7RUFDRSxhQUFBO0FBb0ZGOztBQWxGQTtFQUNFO0lESkEsYUFBQTtJQUNBLG1CQ0lnQjtJREhoQixtQkNHcUI7SURGckIsOEJDRTZCO0lERDdCLGVBTCtDO0lDTzdDLGFBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0lBQ0Esc0JDZEk7SURlSixtQ0FBQTtJQUNBLGVBQUE7RUF5RkY7O0VBdkZBO0lEakJBLGFBQUE7SUFDQSxzQkNpQmdCO0lEaEJoQixtQkNnQndCO0lEZnhCLHVCQ2VnQztJRGRoQyxlQUwrQztFQ2lIL0M7RUE3RkU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQStGSjtFQTlGRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQWdHSjs7RUE3RkU7SUFDRSxjQ2hDQTtFRGdJSjs7RUE5RkE7SUQvQkEsYUFBQTtJQUNBLHNCQytCZ0I7SUQ5QmhCLG1CQzhCd0I7SUQ3QnhCLHVCQzZCZ0M7SUQ1QmhDLGVBTCtDO0lDa0M3QyxrQkFBQTtJQUNBLFVBQUE7RUFxR0Y7RUFwR0U7SUFDRSxpQkFBQTtFQXNHSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2JpbGUtYm90dG9tLW5hdmlnYXRpb24vbW9iaWxlLWJvdHRvbS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJpYWJsZXMuc2FzcydcclxuXHJcbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb24sICRhbGlnbiwgJGp1c3RpZnksICR3cmFwOiB3cmFwKVxyXG4gIGRpc3BsYXk6IGZsZXhcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvblxyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ25cclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5XHJcbiAgZmxleC13cmFwOiAkd3JhcFxyXG5cclxuQG1peGluIGJyaWdodG5lc3MoJHZhbHVlKVxyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygkdmFsdWUpXHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigpXHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dFxyXG5cclxuLnBhZ2UtY29udGFpbmVyXHJcbiAgd2lkdGg6IDEwMHZ3XHJcbiAgbWluLWhlaWdodDogMTAwdmhcclxuICBvdmVyZmxvdy14OiBoaWRkZW5cclxuICBvdmVyZmxvdy15OiBhdXRvXHJcbiAgcGFkZGluZzogMnJlbVxyXG5cclxuLmNhcmRcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGVcclxuICBib3JkZXItcmFkaXVzOiAxcmVtXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOVxyXG4gIHBhZGRpbmc6IDFyZW1cclxuICAmLXRpdGxlXHJcbiAgICBmb250LXNpemU6IDJyZW1cclxuICAgIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRmb250LXdlaWdodCwgJ3NlbWktYm9sZCcpXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtXHJcbiAgJi10ZXh0XHJcbiAgICBmb250LXNpemU6IDEuNHJlbVxyXG4gICAgY29sb3I6ICRncmV5LTVcclxuICBoclxyXG4gICAgbWFyZ2luOiAwXHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAkZ3JleVxyXG5cclxuaW5wdXRcclxuICBmb250LXNpemU6IDE2cHhcclxuICBwYWRkaW5nOiAxLjVyZW1cclxuICB3aWR0aDogMTAwJVxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRncmV5LTJcclxuICBib3JkZXItcmFkaXVzOiAxcmVtXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG4gICY6OnBsYWNlaG9sZGVyXHJcbiAgICBjb2xvcjogJGdyZXktNFxyXG5cclxuLmJ1dHRvblxyXG4gIEBpbmNsdWRlIGZsZXgoJGRpcmVjdGlvbjogcm93LCAkYWxpZ246IGNlbnRlciwgJGp1c3RpZnk6IGNlbnRlcilcclxuICBmb250LXNpemU6IDE2cHhcclxuICBwYWRkaW5nOiAxLjVyZW1cclxuICBib3JkZXItc2l6aW5nOiBib3JkZXItYm94XHJcbiAgY29sb3I6ICR3aGl0ZVxyXG4gIGJvcmRlcjogbm9uZVxyXG4gIGJvcmRlci1yYWRpdXM6IDIuNnJlbVxyXG4gIGN1cnNvcjogcG9pbnRlclxyXG4gICY6aG92ZXJcclxuICAgIEBpbmNsdWRlIGJyaWdodG5lc3MoMS4yKVxyXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbigpXHJcblxyXG4uYnV0dG9uLXByaW1hcnlcclxuICBAZXh0ZW5kIC5idXR0b25cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkXHJcblxyXG4uYnV0dG9uLXByaW1hcnktc21hbGxcclxuICBAZXh0ZW5kIC5idXR0b24tcHJpbWFyeVxyXG4gIEBleHRlbmQgLmJ1dHRvbi1zbWFsbFxyXG5cclxuLmJ1dHRvbi10cmFuc3BhcmVudC1wcmltYXJ5LXNtYWxsXHJcbiAgQGV4dGVuZCAuYnV0dG9uXHJcbiAgQGV4dGVuZCAuYnV0dG9uLXNtYWxsXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlXHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHJlZFxyXG4gIGNvbG9yOiAkcmVkXHJcblxyXG4uYnV0dG9uLXNtYWxsXHJcbiAgZm9udC1zaXplOiAxLjRyZW1cclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbVxyXG5cclxuLnRleHQtdGl0bGVcclxuICBmb250LXNpemU6IDNyZW1cclxuICBmb250LXdlaWdodDogYm9sZFxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KVxyXG4gIC5jYXJkXHJcbiAgICBwYWRkaW5nOiAycmVtIiwiLnBhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzRENEQ0RDtcbn1cbi5jYXJkIGhyIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRTZFNkU2O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNzI3MTcxO1xufVxuXG4uYnV0dG9uLCAuYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGwsIC5idXR0b24tcHJpbWFyeSwgLmJ1dHRvbi1wcmltYXJ5LXNtYWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIuNnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ1dHRvbjpob3ZlciwgLmJ1dHRvbi10cmFuc3BhcmVudC1wcmltYXJ5LXNtYWxsOmhvdmVyLCAuYnV0dG9uLXByaW1hcnk6aG92ZXIsIC5idXR0b24tcHJpbWFyeS1zbWFsbDpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnV0dG9uLXByaW1hcnksIC5idXR0b24tcHJpbWFyeS1zbWFsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQTIyNTg7XG59XG5cbi5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQTIyNTg7XG4gIGNvbG9yOiAjRUEyMjU4O1xufVxuXG4uYnV0dG9uLXNtYWxsLCAuYnV0dG9uLXByaW1hcnktc21hbGwsIC5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpIHtcbiAgLmNhcmQge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbn1cbi5tb2JpbGUtYm90LW5hdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAubW9iaWxlLWJvdC1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDhyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IC0zcHggMTJweCAjMDAwMDAwMTA7XG4gICAgcGFkZGluZzogMCAycmVtO1xuICB9XG5cbiAgLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAuaXRlbSBpbWcge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgfVxuICAuaXRlbSBwIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cblxuICAuaXRlbS1hY3RpdmUgcCB7XG4gICAgY29sb3I6ICNFQTIyNTg7XG4gIH1cblxuICAuaXRlbS1hZGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMnJlbTtcbiAgfVxuICAuaXRlbS1hZGQgcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn0iLCIkcmVkOiAjRUEyMjU4XHJcbiRwaW5rOiAjRkZFOEVBXHJcbiR3aGl0ZTogI0ZGRlxyXG4kZ3JleTogI0U2RTZFNlxyXG4kZ3JleS0yOiAjQ0NDQ0NDXHJcbiRncmV5LTM6ICM5MzkzOTNcclxuJGdyZXktNDogIzcyNzE3MVxyXG4kZ3JleS01OiAjNEQ0RDREXHJcbiRncmV5LTY6ICNFREVERURcclxuJGdyZXktNzogI0M2QzZDNlxyXG4kZ3JlZW46ICM1OEI1NzFcclxuJGdyZWVuLTI6ICMxRTk1M0VcclxuJHllbGxvdzogI0Y0OTcwNVxyXG4kekluZGV4OiAoJzEnOiAxLCAnMic6IDIpXHJcbiRmb250LXdlaWdodDogKCdzZW1pLWJvbGQnOiA2MDApXHJcbiRib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDEwXHJcbiRicmVhay1wb2ludDogKCdtb2JpbGUnOiA0MjBweCwgJ21lZGl1bSc6IDg0MHB4KSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileBottomNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mobile-bottom-navigation',
                templateUrl: './mobile-bottom-navigation.component.html',
                styleUrls: ['./mobile-bottom-navigation.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_mobile_bottom_navigation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/mobile-bottom-navigation.model */ "./src/app/models/mobile-bottom-navigation.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "item-active": a0 }; };
class SideMenuComponent {
    constructor() {
        this.icons = [
            new src_app_models_mobile_bottom_navigation_model__WEBPACK_IMPORTED_MODULE_1__["MIcon"](true, '../../../assets/svgs/icon-home-red.svg', '../../../assets/svgs/icon-home.svg'),
            new src_app_models_mobile_bottom_navigation_model__WEBPACK_IMPORTED_MODULE_1__["MIcon"](false, '../../../assets/svgs/icon-video-red.svg', '../../../assets/svgs/icon-video.svg'),
            new src_app_models_mobile_bottom_navigation_model__WEBPACK_IMPORTED_MODULE_1__["MIcon"](false, '../../../assets/svgs/icon-help.svg', '../../../assets/svgs/icon-help.svg'),
            new src_app_models_mobile_bottom_navigation_model__WEBPACK_IMPORTED_MODULE_1__["MIcon"](false, '../../../assets/svgs/icon-settings.svg', '../../../assets/svgs/icon-settings.svg')
        ];
    }
    ngOnInit() {
    }
    onItemClick(index) {
        this.icons.forEach(icon => icon.is_active = false);
        this.icons[index].is_active = true;
    }
}
SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) { return new (t || SideMenuComponent)(); };
SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideMenuComponent, selectors: [["side-menu"]], decls: 17, vars: 10, consts: [[1, "side-menu"], [1, "item", 3, "ngClass", "click"], [3, "src"], [1, "item"]], template: function SideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_Template_div_click_1_listener() { return ctx.onItemClick(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_Template_div_click_5_listener() { return ctx.onItemClick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.icons[0].is_active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icons[0].is_active ? ctx.icons[0].active_url : ctx.icons[0].inactive_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.icons[1].is_active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icons[1].is_active ? ctx.icons[1].active_url : ctx.icons[1].inactive_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icons[2].is_active ? ctx.icons[2].active_url : ctx.icons[2].inactive_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icons[3].is_active ? ctx.icons[3].active_url : ctx.icons[3].inactive_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".page-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  box-sizing: border-box;\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 1rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #4D4D4D;\n}\n\n.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  border: none;\n  border-top: 3px solid #E6E6E6;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 1.5rem;\n  width: 100%;\n  border: 1px solid #CCCCCC;\n  border-radius: 1rem;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #727171;\n}\n\n.button[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%], .button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 16px;\n  padding: 1.5rem;\n  border-sizing: border-box;\n  color: #FFF;\n  border: none;\n  border-radius: 2.6rem;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button-transparent-primary-small[_ngcontent-%COMP%]:hover, .button-primary[_ngcontent-%COMP%]:hover, .button-primary-small[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n  transition: 0.5s ease-in-out;\n}\n\n.button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  background-color: #EA2258;\n}\n\n.button-transparent-primary-small[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border: 1px solid #EA2258;\n  color: #EA2258;\n}\n\n.button-small[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  padding: 1rem 1.5rem;\n}\n\n.text-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n@media (min-width: 420px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n\n.side-menu[_ngcontent-%COMP%] {\n  display: block;\n  width: 20rem;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  box-sizing: border-box;\n  z-index: 1;\n  background-color: #FFF;\n  padding: 1rem;\n  padding-top: 9rem;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  padding: 1rem;\n  border-radius: 1rem;\n  background-color: #FFF;\n  cursor: pointer;\n}\n\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.8rem;\n  width: 1.8rem;\n  margin-right: 0.5rem;\n}\n\n.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 600;\n}\n\n.item[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.9);\n  transition: 0.5s ease-in-out;\n}\n\n.item-active[_ngcontent-%COMP%] {\n  background-color: #FFE8EA;\n}\n\n.item-active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #EA2258;\n}\n\n@media (max-width: 420px) {\n  .side-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGUvY29tbW9uLnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvc3R5bGUvdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ2RGOztBRGdCQTtFQUNFLHNCRXJCTTtFRnNCTixtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0FDYkY7O0FEY0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1pKOztBRGFFO0VBQ0UsaUJBQUE7RUFDQSxjRTNCSztBRGdCVDs7QURZRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNWSjs7QURZQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ1RGOztBRFVFO0VBQ0UsY0UxQ0s7QURrQ1Q7O0FEVUE7RUEvQ0UsYUFBQTtFQUNBLG1CQStDMEI7RUE5QzFCLG1CQThDdUM7RUE3Q3ZDLHVCQTZDeUQ7RUE1Q3pELGVBTCtDO0VBa0QvQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0VyRE07RUZzRE4sWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRElFO0VBakRBLHVCQUFBO0VBR0EsNEJBQUE7QUM4Q0Y7O0FESUE7RUFFRSx5QkVqRUk7QUQrRE47O0FEUUE7RUFHRSxzQkV4RU07RUZ5RU4seUJBQUE7RUFDQSxjRTVFSTtBRHFFTjs7QURTQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNORjs7QURRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRE9BO0VBQ0U7SUFDRSxhQUFBO0VDSkY7QUFDRjs7QUFsRkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQ1RNO0VEVU4sYUFBQTtFQUNBLGlCQUFBO0FBb0ZGOztBQWxGQTtFRFpFLGFBQUE7RUFDQSxtQkNZYztFRFhkLG1CQ1dtQjtFRFZuQiwyQkNVMkI7RURUM0IsZUFMK0M7RUNlL0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JDakJNO0VEa0JOLGVBQUE7QUF5RkY7O0FBeEZFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQTBGSjs7QUF6RkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBMkZKOztBQTFGRTtFRGxCQSx1QkFBQTtFQUdBLDRCQUFBO0FDNkdGOztBQTFGQTtFQUNFLHlCQ2hDSztBRDZIUDs7QUE1RkU7RUFDRSxjQ25DRTtBRGlJTjs7QUE1RkE7RUFDRTtJQUNFLGFBQUE7RUErRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzLnNhc3MnXHJcblxyXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uLCAkYWxpZ24sICRqdXN0aWZ5LCAkd3JhcDogd3JhcClcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb25cclxuICBhbGlnbi1pdGVtczogJGFsaWduXHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeVxyXG4gIGZsZXgtd3JhcDogJHdyYXBcclxuXHJcbkBtaXhpbiBicmlnaHRuZXNzKCR2YWx1ZSlcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoJHZhbHVlKVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oKVxyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXRcclxuXHJcbi5wYWdlLWNvbnRhaW5lclxyXG4gIHdpZHRoOiAxMDB2d1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoXHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuXHJcbiAgb3ZlcmZsb3cteTogYXV0b1xyXG4gIHBhZGRpbmc6IDJyZW1cclxuXHJcbi5jYXJkXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbVxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjlcclxuICBwYWRkaW5nOiAxcmVtXHJcbiAgJi10aXRsZVxyXG4gICAgZm9udC1zaXplOiAycmVtXHJcbiAgICBmb250LXdlaWdodDogbWFwLWdldCgkZm9udC13ZWlnaHQsICdzZW1pLWJvbGQnKVxyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG4gICYtdGV4dFxyXG4gICAgZm9udC1zaXplOiAxLjRyZW1cclxuICAgIGNvbG9yOiAkZ3JleS01XHJcbiAgaHJcclxuICAgIG1hcmdpbjogMFxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgJGdyZXlcclxuXHJcbmlucHV0XHJcbiAgZm9udC1zaXplOiAxNnB4XHJcbiAgcGFkZGluZzogMS41cmVtXHJcbiAgd2lkdGg6IDEwMCVcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleS0yXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbVxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuICAmOjpwbGFjZWhvbGRlclxyXG4gICAgY29sb3I6ICRncmV5LTRcclxuXHJcbi5idXR0b25cclxuICBAaW5jbHVkZSBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduOiBjZW50ZXIsICRqdXN0aWZ5OiBjZW50ZXIpXHJcbiAgZm9udC1zaXplOiAxNnB4XHJcbiAgcGFkZGluZzogMS41cmVtXHJcbiAgYm9yZGVyLXNpemluZzogYm9yZGVyLWJveFxyXG4gIGNvbG9yOiAkd2hpdGVcclxuICBib3JkZXI6IG5vbmVcclxuICBib3JkZXItcmFkaXVzOiAyLjZyZW1cclxuICBjdXJzb3I6IHBvaW50ZXJcclxuICAmOmhvdmVyXHJcbiAgICBAaW5jbHVkZSBicmlnaHRuZXNzKDEuMilcclxuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oKVxyXG5cclxuLmJ1dHRvbi1wcmltYXJ5XHJcbiAgQGV4dGVuZCAuYnV0dG9uXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHJlZFxyXG5cclxuLmJ1dHRvbi1wcmltYXJ5LXNtYWxsXHJcbiAgQGV4dGVuZCAuYnV0dG9uLXByaW1hcnlcclxuICBAZXh0ZW5kIC5idXR0b24tc21hbGxcclxuXHJcbi5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbFxyXG4gIEBleHRlbmQgLmJ1dHRvblxyXG4gIEBleHRlbmQgLmJ1dHRvbi1zbWFsbFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZVxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRyZWRcclxuICBjb2xvcjogJHJlZFxyXG5cclxuLmJ1dHRvbi1zbWFsbFxyXG4gIGZvbnQtc2l6ZTogMS40cmVtXHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW1cclxuXHJcbi50ZXh0LXRpdGxlXHJcbiAgZm9udC1zaXplOiAzcmVtXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MjBweClcclxuICAuY2FyZFxyXG4gICAgcGFkZGluZzogMnJlbSIsIi5wYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jYXJkLXRleHQge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM0RDRENEQ7XG59XG4uY2FyZCBociB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI0U2RTZFNjtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzcyNzE3MTtcbn1cblxuLmJ1dHRvbiwgLmJ1dHRvbi10cmFuc3BhcmVudC1wcmltYXJ5LXNtYWxsLCAuYnV0dG9uLXByaW1hcnksIC5idXR0b24tcHJpbWFyeS1zbWFsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyLjZyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b246aG92ZXIsIC5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbDpob3ZlciwgLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLCAuYnV0dG9uLXByaW1hcnktc21hbGw6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmJ1dHRvbi1wcmltYXJ5LCAuYnV0dG9uLXByaW1hcnktc21hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUEyMjU4O1xufVxuXG4uYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUEyMjU4O1xuICBjb2xvcjogI0VBMjI1ODtcbn1cblxuLmJ1dHRvbi1zbWFsbCwgLmJ1dHRvbi1wcmltYXJ5LXNtYWxsLCAuYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGwge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gIC5jYXJkIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG59XG4uc2lkZS1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogOXJlbTtcbn1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLml0ZW0gaW1nIHtcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIHdpZHRoOiAxLjhyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLml0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLml0ZW06aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLml0ZW0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRThFQTtcbn1cbi5pdGVtLWFjdGl2ZSBwIHtcbiAgY29sb3I6ICNFQTIyNTg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2lkZS1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiJHJlZDogI0VBMjI1OFxyXG4kcGluazogI0ZGRThFQVxyXG4kd2hpdGU6ICNGRkZcclxuJGdyZXk6ICNFNkU2RTZcclxuJGdyZXktMjogI0NDQ0NDQ1xyXG4kZ3JleS0zOiAjOTM5MzkzXHJcbiRncmV5LTQ6ICM3MjcxNzFcclxuJGdyZXktNTogIzRENEQ0RFxyXG4kZ3JleS02OiAjRURFREVEXHJcbiRncmV5LTc6ICNDNkM2QzZcclxuJGdyZWVuOiAjNThCNTcxXHJcbiRncmVlbi0yOiAjMUU5NTNFXHJcbiR5ZWxsb3c6ICNGNDk3MDVcclxuJHpJbmRleDogKCcxJzogMSwgJzInOiAyKVxyXG4kZm9udC13ZWlnaHQ6ICgnc2VtaS1ib2xkJzogNjAwKVxyXG4kYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAxMFxyXG4kYnJlYWstcG9pbnQ6ICgnbW9iaWxlJzogNDIwcHgsICdtZWRpdW0nOiA4NDBweCkiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'side-menu',
                templateUrl: './side-menu.component.html',
                styleUrls: ['./side-menu.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/top-navigation/top-navigation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/top-navigation/top-navigation.component.ts ***!
  \***********************************************************************/
/*! exports provided: TopNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavigationComponent", function() { return TopNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TopNavigationComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+ Create new project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TopNavigationComponent {
    constructor(authService) {
        this.authService = authService;
        this.isAdmin = this.authService.isAdmin;
    }
    ngOnInit() {
    }
}
TopNavigationComponent.ɵfac = function TopNavigationComponent_Factory(t) { return new (t || TopNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TopNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopNavigationComponent, selectors: [["top-navigation"]], decls: 7, vars: 1, consts: [[1, "top-nav"], ["src", "../../../assets/svgs/logo-motionable.svg", "alt", "motionable", 1, "logo"], [1, "item-container"], ["class", "button-primary", "type", "submit", 4, "ngIf"], [1, "user-name"], ["src", "../../../assets//svgs/icon-user.svg", "alt", "user", 1, "icon-user"], ["type", "submit", 1, "button-primary"]], template: function TopNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopNavigationComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Putra Utama Jaya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".page-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  box-sizing: border-box;\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 1rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #4D4D4D;\n}\n\n.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  border: none;\n  border-top: 3px solid #E6E6E6;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 1.5rem;\n  width: 100%;\n  border: 1px solid #CCCCCC;\n  border-radius: 1rem;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #727171;\n}\n\n.button[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%], .button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 16px;\n  padding: 1.5rem;\n  border-sizing: border-box;\n  color: #FFF;\n  border: none;\n  border-radius: 2.6rem;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button-transparent-primary-small[_ngcontent-%COMP%]:hover, .button-primary[_ngcontent-%COMP%]:hover, .button-primary-small[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n  transition: 0.5s ease-in-out;\n}\n\n.button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  background-color: #EA2258;\n}\n\n.button-transparent-primary-small[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border: 1px solid #EA2258;\n  color: #EA2258;\n}\n\n.button-small[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  padding: 1rem 1.5rem;\n}\n\n.text-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n@media (min-width: 420px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  height: 8rem;\n  padding-right: 2rem;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  box-sizing: border-box;\n  z-index: 2;\n  background-color: #FFF;\n}\n\n.item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.item-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.item-container[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.item-container[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.7rem;\n  margin-left: 1rem;\n}\n\n.item-container[_ngcontent-%COMP%]   .icon-user[_ngcontent-%COMP%] {\n  display: block;\n  width: 2.7rem;\n  margin-left: 1rem;\n}\n\n@media (max-width: 840px) {\n  .item-container[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .item-container[_ngcontent-%COMP%]   .icon-user[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 420px) {\n  .top-nav[_ngcontent-%COMP%] {\n    box-shadow: 0px 3px 12px #00000010;\n  }\n  .top-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 22rem;\n  }\n  .top-nav[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n    width: 3rem;\n  }\n\n  .item-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGUvY29tbW9uLnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9wLW5hdmlnYXRpb24vdG9wLW5hdmlnYXRpb24uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3N0eWxlL3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNkRjs7QURnQkE7RUFDRSxzQkVyQk07RUZzQk4sbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtBQ2JGOztBRGNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNaSjs7QURhRTtFQUNFLGlCQUFBO0VBQ0EsY0UzQks7QURnQlQ7O0FEWUU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDVko7O0FEWUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNURjs7QURVRTtFQUNFLGNFMUNLO0FEa0NUOztBRFVBO0VBL0NFLGFBQUE7RUFDQSxtQkErQzBCO0VBOUMxQixtQkE4Q3VDO0VBN0N2Qyx1QkE2Q3lEO0VBNUN6RCxlQUwrQztFQWtEL0MsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFdFckRNO0VGc0ROLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNIRjs7QURJRTtFQWpEQSx1QkFBQTtFQUdBLDRCQUFBO0FDOENGOztBRElBO0VBRUUseUJFakVJO0FEK0ROOztBRFFBO0VBR0Usc0JFeEVNO0VGeUVOLHlCQUFBO0VBQ0EsY0U1RUk7QURxRU47O0FEU0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDTkY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURPQTtFQUNFO0lBQ0UsYUFBQTtFQ0pGO0FBQ0Y7O0FBbEZBO0VEQUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJDRG1CO0VERW5CLDhCQ0YyQjtFREczQixlQUwrQztFQ0cvQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkNWTTtBRGtHUjs7QUF0RkE7RURYRSxhQUFBO0VBQ0EsbUJDV2M7RURWZCxtQkNVbUI7RURUbkIsdUJDUzJCO0VEUjNCLGVBTCtDO0FDMEdqRDs7QUE1RkU7RUFDRSxjQUFBO0FBOEZKOztBQTdGRTtFQUNFLGlCQUFBO0FBK0ZKOztBQTlGRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBZ0dKOztBQS9GRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFpR0o7O0FBL0ZBO0VBRUk7SUFDRSxhQUFBO0VBaUdKO0VBaEdFO0lBQ0UsYUFBQTtFQWtHSjtBQUNGOztBQWpHQTtFQUNFO0lBQ0Usa0NDdkJTO0VEMEhYO0VBbEdFO0lBQ0UsWUFBQTtFQW9HSjtFQW5HRTtJQUNFLFdBQUE7RUFxR0o7O0VBbEdFO0lBQ0UsYUFBQTtFQXFHSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3AtbmF2aWdhdGlvbi90b3AtbmF2aWdhdGlvbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzLnNhc3MnXHJcblxyXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uLCAkYWxpZ24sICRqdXN0aWZ5LCAkd3JhcDogd3JhcClcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb25cclxuICBhbGlnbi1pdGVtczogJGFsaWduXHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeVxyXG4gIGZsZXgtd3JhcDogJHdyYXBcclxuXHJcbkBtaXhpbiBicmlnaHRuZXNzKCR2YWx1ZSlcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoJHZhbHVlKVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oKVxyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXRcclxuXHJcbi5wYWdlLWNvbnRhaW5lclxyXG4gIHdpZHRoOiAxMDB2d1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoXHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuXHJcbiAgb3ZlcmZsb3cteTogYXV0b1xyXG4gIHBhZGRpbmc6IDJyZW1cclxuXHJcbi5jYXJkXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbVxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjlcclxuICBwYWRkaW5nOiAxcmVtXHJcbiAgJi10aXRsZVxyXG4gICAgZm9udC1zaXplOiAycmVtXHJcbiAgICBmb250LXdlaWdodDogbWFwLWdldCgkZm9udC13ZWlnaHQsICdzZW1pLWJvbGQnKVxyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG4gICYtdGV4dFxyXG4gICAgZm9udC1zaXplOiAxLjRyZW1cclxuICAgIGNvbG9yOiAkZ3JleS01XHJcbiAgaHJcclxuICAgIG1hcmdpbjogMFxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgJGdyZXlcclxuXHJcbmlucHV0XHJcbiAgZm9udC1zaXplOiAxNnB4XHJcbiAgcGFkZGluZzogMS41cmVtXHJcbiAgd2lkdGg6IDEwMCVcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleS0yXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbVxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuICAmOjpwbGFjZWhvbGRlclxyXG4gICAgY29sb3I6ICRncmV5LTRcclxuXHJcbi5idXR0b25cclxuICBAaW5jbHVkZSBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduOiBjZW50ZXIsICRqdXN0aWZ5OiBjZW50ZXIpXHJcbiAgZm9udC1zaXplOiAxNnB4XHJcbiAgcGFkZGluZzogMS41cmVtXHJcbiAgYm9yZGVyLXNpemluZzogYm9yZGVyLWJveFxyXG4gIGNvbG9yOiAkd2hpdGVcclxuICBib3JkZXI6IG5vbmVcclxuICBib3JkZXItcmFkaXVzOiAyLjZyZW1cclxuICBjdXJzb3I6IHBvaW50ZXJcclxuICAmOmhvdmVyXHJcbiAgICBAaW5jbHVkZSBicmlnaHRuZXNzKDEuMilcclxuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oKVxyXG5cclxuLmJ1dHRvbi1wcmltYXJ5XHJcbiAgQGV4dGVuZCAuYnV0dG9uXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHJlZFxyXG5cclxuLmJ1dHRvbi1wcmltYXJ5LXNtYWxsXHJcbiAgQGV4dGVuZCAuYnV0dG9uLXByaW1hcnlcclxuICBAZXh0ZW5kIC5idXR0b24tc21hbGxcclxuXHJcbi5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbFxyXG4gIEBleHRlbmQgLmJ1dHRvblxyXG4gIEBleHRlbmQgLmJ1dHRvbi1zbWFsbFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZVxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRyZWRcclxuICBjb2xvcjogJHJlZFxyXG5cclxuLmJ1dHRvbi1zbWFsbFxyXG4gIGZvbnQtc2l6ZTogMS40cmVtXHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW1cclxuXHJcbi50ZXh0LXRpdGxlXHJcbiAgZm9udC1zaXplOiAzcmVtXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MjBweClcclxuICAuY2FyZFxyXG4gICAgcGFkZGluZzogMnJlbSIsIi5wYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jYXJkLXRleHQge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM0RDRENEQ7XG59XG4uY2FyZCBociB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI0U2RTZFNjtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzcyNzE3MTtcbn1cblxuLmJ1dHRvbiwgLmJ1dHRvbi10cmFuc3BhcmVudC1wcmltYXJ5LXNtYWxsLCAuYnV0dG9uLXByaW1hcnksIC5idXR0b24tcHJpbWFyeS1zbWFsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyLjZyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b246aG92ZXIsIC5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbDpob3ZlciwgLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLCAuYnV0dG9uLXByaW1hcnktc21hbGw6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmJ1dHRvbi1wcmltYXJ5LCAuYnV0dG9uLXByaW1hcnktc21hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUEyMjU4O1xufVxuXG4uYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUEyMjU4O1xuICBjb2xvcjogI0VBMjI1ODtcbn1cblxuLmJ1dHRvbi1zbWFsbCwgLmJ1dHRvbi1wcmltYXJ5LXNtYWxsLCAuYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGwge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gIC5jYXJkIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG59XG4udG9wLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDhyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbi5pdGVtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uaXRlbS1jb250YWluZXIgYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaXRlbS1jb250YWluZXIgLm1haWwge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5pdGVtLWNvbnRhaW5lciAudXNlci1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5pdGVtLWNvbnRhaW5lciAuaWNvbi11c2VyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyLjdyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcbiAgLml0ZW0tY29udGFpbmVyIC51c2VyLW5hbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLml0ZW0tY29udGFpbmVyIC5pY29uLXVzZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAudG9wLW5hdiB7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAxMDtcbiAgfVxuICAudG9wLW5hdiAubG9nbyB7XG4gICAgd2lkdGg6IDIycmVtO1xuICB9XG4gIC50b3AtbmF2IC5tYWlsIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgfVxuXG4gIC5pdGVtLWNvbnRhaW5lciBidXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iLCIkcmVkOiAjRUEyMjU4XHJcbiRwaW5rOiAjRkZFOEVBXHJcbiR3aGl0ZTogI0ZGRlxyXG4kZ3JleTogI0U2RTZFNlxyXG4kZ3JleS0yOiAjQ0NDQ0NDXHJcbiRncmV5LTM6ICM5MzkzOTNcclxuJGdyZXktNDogIzcyNzE3MVxyXG4kZ3JleS01OiAjNEQ0RDREXHJcbiRncmV5LTY6ICNFREVERURcclxuJGdyZXktNzogI0M2QzZDNlxyXG4kZ3JlZW46ICM1OEI1NzFcclxuJGdyZWVuLTI6ICMxRTk1M0VcclxuJHllbGxvdzogI0Y0OTcwNVxyXG4kekluZGV4OiAoJzEnOiAxLCAnMic6IDIpXHJcbiRmb250LXdlaWdodDogKCdzZW1pLWJvbGQnOiA2MDApXHJcbiRib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDEwXHJcbiRicmVhay1wb2ludDogKCdtb2JpbGUnOiA0MjBweCwgJ21lZGl1bSc6IDg0MHB4KSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'top-navigation',
                templateUrl: './top-navigation.component.html',
                styleUrls: ['./top-navigation.component.sass']
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/mobile-bottom-navigation.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/models/mobile-bottom-navigation.model.ts ***!
  \**********************************************************/
/*! exports provided: MIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIcon", function() { return MIcon; });
class MIcon {
    constructor(is_active, active_url, inactive_url) {
        this.is_active = is_active;
        this.active_url = active_url;
        this.inactive_url = inactive_url;
    }
}


/***/ }),

/***/ "./src/app/models/project-history.model.ts":
/*!*************************************************!*\
  !*** ./src/app/models/project-history.model.ts ***!
  \*************************************************/
/*! exports provided: MProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MProject", function() { return MProject; });
class MProject {
    constructor(name, date, status) {
        this.name = name;
        this.date = date;
        this.status = status;
    }
}


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DashboardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create new project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Have a new campaign in mind? Let\u2019s create new sets of motion videos to increase sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Previous Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "#1029 Something somethi..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Project Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "#1029 Something somethi..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " paid projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Congratulations! You have 2 paid projects pending deliverables");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " projects requested revisions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "You have received 5 rounds of revisions from active projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Invite your team members");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "You may choose their role in managing your admin panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.isAdmin = this.authService.isAdmin;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 6, vars: 2, consts: [[1, "welcome"], [1, "text-title", "text-overview"], [4, "ngIf"], [1, "card", "home-card"], ["src", "../../../assets/svgs/icon-add-red.svg", "alt", "icon-add"], [1, "content"], [1, "card-title"], [1, "card-text"], [1, "previous-project-mobile"], [1, "card-text", "project-name"], [1, "card-text", "status"], [1, "previous-project"], [1, "item-1"], [1, "card-text", "sub-title"], [1, "item-2"], [1, "card-text", "status-success"], [1, "button-view"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello, Putra Utama Jaya!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_4_Template, 36, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_5_Template, 27, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".page-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  box-sizing: border-box;\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 1rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #4D4D4D;\n}\n\n.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  border: none;\n  border-top: 3px solid #E6E6E6;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 1.5rem;\n  width: 100%;\n  border: 1px solid #CCCCCC;\n  border-radius: 1rem;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #727171;\n}\n\n.button[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%], .button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 16px;\n  padding: 1.5rem;\n  border-sizing: border-box;\n  color: #FFF;\n  border: none;\n  border-radius: 2.6rem;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button-transparent-primary-small[_ngcontent-%COMP%]:hover, .button-primary[_ngcontent-%COMP%]:hover, .button-primary-small[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n  transition: 0.5s ease-in-out;\n}\n\n.button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  background-color: #EA2258;\n}\n\n.button-transparent-primary-small[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border: 1px solid #EA2258;\n  color: #EA2258;\n}\n\n.button-small[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  padding: 1rem 1.5rem;\n}\n\n.text-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n@media (min-width: 420px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n\n.welcome[_ngcontent-%COMP%] {\n  font-size: 2.6rem;\n  display: block;\n}\n\n.home-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n}\n\n.home-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3.5rem;\n}\n\n.home-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  width: calc( 100% - 3.5rem );\n  box-sizing: border-box;\n}\n\n.home-card[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  color: #EA2258;\n}\n\n.home-card[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-weight: 600;\n}\n\n.home-card[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #58B571;\n}\n\n.text-overview[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.previous-project-mobile[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.previous-project[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  display: none;\n}\n\n.previous-project[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.previous-project[_ngcontent-%COMP%]   .item-1[_ngcontent-%COMP%] {\n  width: 25rem;\n}\n\n.previous-project[_ngcontent-%COMP%]   .item-2[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n\n.previous-project[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n}\n\n.previous-project[_ngcontent-%COMP%]   .status-success[_ngcontent-%COMP%] {\n  color: #58B571;\n  padding-top: 0.5rem;\n}\n\n.button-view[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 0.5rem 1rem;\n  border-sizing: border-box;\n  border: none;\n  border-radius: 2.6rem;\n  cursor: pointer;\n  background-color: #EDEDED;\n  color: #4D4D4D;\n}\n\n.button-view[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n  transition: 0.5s ease-in-out;\n}\n\n.card-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #EA2258;\n}\n\n@media (min-width: 420px) {\n  .text-overview[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .welcome[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n\n  .previous-project-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .previous-project[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n\n@media (min-width: 840px) {\n  .welcome[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .previous-project[_ngcontent-%COMP%]   .item-1[_ngcontent-%COMP%] {\n    width: 35rem;\n  }\n  .previous-project[_ngcontent-%COMP%]   .item-2[_ngcontent-%COMP%] {\n    width: 20rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGUvY29tbW9uLnNhc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3N0eWxlL3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNkRjs7QURnQkE7RUFDRSxzQkVyQk07RUZzQk4sbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtBQ2JGOztBRGNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNaSjs7QURhRTtFQUNFLGlCQUFBO0VBQ0EsY0UzQks7QURnQlQ7O0FEWUU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDVko7O0FEWUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNURjs7QURVRTtFQUNFLGNFMUNLO0FEa0NUOztBRFVBO0VBL0NFLGFBQUE7RUFDQSxtQkErQzBCO0VBOUMxQixtQkE4Q3VDO0VBN0N2Qyx1QkE2Q3lEO0VBNUN6RCxlQUwrQztFQWtEL0MsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFdFckRNO0VGc0ROLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNIRjs7QURJRTtFQWpEQSx1QkFBQTtFQUdBLDRCQUFBO0FDOENGOztBRElBO0VBRUUseUJFakVJO0FEK0ROOztBRFFBO0VBR0Usc0JFeEVNO0VGeUVOLHlCQUFBO0VBQ0EsY0U1RUk7QURxRU47O0FEU0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDTkY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURPQTtFQUNFO0lBQ0UsYUFBQTtFQ0pGO0FBQ0Y7O0FBbEZBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBb0ZGOztBQWxGQTtFREpFLGFBQUE7RUFDQSxtQkNJYztFREhkLHVCQ0dtQjtFREZuQiwyQkNFK0I7RUREL0IsZUFMK0M7RUNPL0MsZ0JBQUE7QUF5RkY7O0FBeEZFO0VBQ0UsYUFBQTtBQTBGSjs7QUF6RkU7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUEyRko7O0FBMUZFO0VBQ0UsY0NqQkU7QUQ2R047O0FBM0ZFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQTZGSjs7QUE1Rkk7RUFDRSxjQ1pFO0FEMEdSOztBQTVGQTtFQUNFLGFBQUE7QUErRkY7O0FBN0ZBO0VBQ0UsY0FBQTtBQWdHRjs7QUE5RkE7RUQzQkUsYUFBQTtFQUNBLG1CQzJCYztFRDFCZCx1QkMwQm1CO0VEekJuQiwyQkN5QitCO0VEeEIvQixlQUwrQztFQzhCL0MsYUFBQTtBQXFHRjs7QUFwR0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBc0dKOztBQXJHRTtFQUNFLFlBQUE7QUF1R0o7O0FBdEdFO0VBQ0UsWUFBQTtBQXdHSjs7QUF2R0U7RUFDRSxtQkFBQTtBQXlHSjs7QUF4R0U7RUFDRSxjQ2pDSTtFRGtDSixtQkFBQTtBQTBHSjs7QUF4R0E7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkM3Q087RUQ4Q1AsY0MvQ087QUQwSlQ7O0FBMUdFO0VEN0NBLHVCQUFBO0VBR0EsNEJBQUE7QUN3SkY7O0FBekdFO0VBQ0UsY0M3REU7QUR5S047O0FBMUdBO0VBQ0U7SUFDRSxjQUFBO0VBNkdGOztFQTNHQTtJQUNFLG1CQUFBO0VBOEdGOztFQTVHQTtJQUNFLGFBQUE7RUErR0Y7O0VBN0dBO0lBQ0UsYUFBQTtFQWdIRjtBQUNGOztBQS9HQTtFQUNFO0lBQ0UsYUFBQTtFQWlIRjs7RUE5R0U7SUFDRSxZQUFBO0VBaUhKO0VBaEhFO0lBQ0UsWUFBQTtFQWtISjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzLnNhc3MnXHJcblxyXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uLCAkYWxpZ24sICRqdXN0aWZ5LCAkd3JhcDogd3JhcClcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb25cclxuICBhbGlnbi1pdGVtczogJGFsaWduXHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeVxyXG4gIGZsZXgtd3JhcDogJHdyYXBcclxuXHJcbkBtaXhpbiBicmlnaHRuZXNzKCR2YWx1ZSlcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoJHZhbHVlKVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oKVxyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXRcclxuXHJcbi5wYWdlLWNvbnRhaW5lclxyXG4gIHdpZHRoOiAxMDB2d1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoXHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuXHJcbiAgb3ZlcmZsb3cteTogYXV0b1xyXG4gIHBhZGRpbmc6IDJyZW1cclxuXHJcbi5jYXJkXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbVxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjlcclxuICBwYWRkaW5nOiAxcmVtXHJcbiAgJi10aXRsZVxyXG4gICAgZm9udC1zaXplOiAycmVtXHJcbiAgICBmb250LXdlaWdodDogbWFwLWdldCgkZm9udC13ZWlnaHQsICdzZW1pLWJvbGQnKVxyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG4gICYtdGV4dFxyXG4gICAgZm9udC1zaXplOiAxLjRyZW1cclxuICAgIGNvbG9yOiAkZ3JleS01XHJcbiAgaHJcclxuICAgIG1hcmdpbjogMFxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgJGdyZXlcclxuXHJcbmlucHV0XHJcbiAgZm9udC1zaXplOiAxNnB4XHJcbiAgcGFkZGluZzogMS41cmVtXHJcbiAgd2lkdGg6IDEwMCVcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleS0yXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbVxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuICAmOjpwbGFjZWhvbGRlclxyXG4gICAgY29sb3I6ICRncmV5LTRcclxuXHJcbi5idXR0b25cclxuICBAaW5jbHVkZSBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduOiBjZW50ZXIsICRqdXN0aWZ5OiBjZW50ZXIpXHJcbiAgZm9udC1zaXplOiAxNnB4XHJcbiAgcGFkZGluZzogMS41cmVtXHJcbiAgYm9yZGVyLXNpemluZzogYm9yZGVyLWJveFxyXG4gIGNvbG9yOiAkd2hpdGVcclxuICBib3JkZXI6IG5vbmVcclxuICBib3JkZXItcmFkaXVzOiAyLjZyZW1cclxuICBjdXJzb3I6IHBvaW50ZXJcclxuICAmOmhvdmVyXHJcbiAgICBAaW5jbHVkZSBicmlnaHRuZXNzKDEuMilcclxuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oKVxyXG5cclxuLmJ1dHRvbi1wcmltYXJ5XHJcbiAgQGV4dGVuZCAuYnV0dG9uXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHJlZFxyXG5cclxuLmJ1dHRvbi1wcmltYXJ5LXNtYWxsXHJcbiAgQGV4dGVuZCAuYnV0dG9uLXByaW1hcnlcclxuICBAZXh0ZW5kIC5idXR0b24tc21hbGxcclxuXHJcbi5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbFxyXG4gIEBleHRlbmQgLmJ1dHRvblxyXG4gIEBleHRlbmQgLmJ1dHRvbi1zbWFsbFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZVxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRyZWRcclxuICBjb2xvcjogJHJlZFxyXG5cclxuLmJ1dHRvbi1zbWFsbFxyXG4gIGZvbnQtc2l6ZTogMS40cmVtXHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW1cclxuXHJcbi50ZXh0LXRpdGxlXHJcbiAgZm9udC1zaXplOiAzcmVtXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MjBweClcclxuICAuY2FyZFxyXG4gICAgcGFkZGluZzogMnJlbSIsIi5wYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jYXJkLXRleHQge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM0RDRENEQ7XG59XG4uY2FyZCBociB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI0U2RTZFNjtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzcyNzE3MTtcbn1cblxuLmJ1dHRvbiwgLmJ1dHRvbi10cmFuc3BhcmVudC1wcmltYXJ5LXNtYWxsLCAuYnV0dG9uLXByaW1hcnksIC5idXR0b24tcHJpbWFyeS1zbWFsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyLjZyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b246aG92ZXIsIC5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbDpob3ZlciwgLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLCAuYnV0dG9uLXByaW1hcnktc21hbGw6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmJ1dHRvbi1wcmltYXJ5LCAuYnV0dG9uLXByaW1hcnktc21hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUEyMjU4O1xufVxuXG4uYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUEyMjU4O1xuICBjb2xvcjogI0VBMjI1ODtcbn1cblxuLmJ1dHRvbi1zbWFsbCwgLmJ1dHRvbi1wcmltYXJ5LXNtYWxsLCAuYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGwge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gIC5jYXJkIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG59XG4ud2VsY29tZSB7XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhvbWUtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5ob21lLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDMuNXJlbTtcbn1cbi5ob21lLWNhcmQgLmNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHdpZHRoOiBjYWxjKCAxMDAlIC0gMy41cmVtICk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uaG9tZS1jYXJkIC5wcm9qZWN0LW5hbWUge1xuICBjb2xvcjogI0VBMjI1ODtcbn1cbi5ob21lLWNhcmQgLnN0YXR1cyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaG9tZS1jYXJkIC5zdGF0dXMgc3BhbiB7XG4gIGNvbG9yOiAjNThCNTcxO1xufVxuXG4udGV4dC1vdmVydmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcmV2aW91cy1wcm9qZWN0LW1vYmlsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJldmlvdXMtcHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5wcmV2aW91cy1wcm9qZWN0IC5zdWItdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnByZXZpb3VzLXByb2plY3QgLml0ZW0tMSB7XG4gIHdpZHRoOiAyNXJlbTtcbn1cbi5wcmV2aW91cy1wcm9qZWN0IC5pdGVtLTIge1xuICB3aWR0aDogMTByZW07XG59XG4ucHJldmlvdXMtcHJvamVjdCAucHJvamVjdC1uYW1lIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cbi5wcmV2aW91cy1wcm9qZWN0IC5zdGF0dXMtc3VjY2VzcyB7XG4gIGNvbG9yOiAjNThCNTcxO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuXG4uYnV0dG9uLXZpZXcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIuNnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xuICBjb2xvcjogIzRENEQ0RDtcbn1cbi5idXR0b24tdmlldzpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2FyZC10aXRsZSBzcGFuIHtcbiAgY29sb3I6ICNFQTIyNTg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MjBweCkge1xuICAudGV4dC1vdmVydmlldyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAud2VsY29tZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5wcmV2aW91cy1wcm9qZWN0LW1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wcmV2aW91cy1wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODQwcHgpIHtcbiAgLndlbGNvbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucHJldmlvdXMtcHJvamVjdCAuaXRlbS0xIHtcbiAgICB3aWR0aDogMzVyZW07XG4gIH1cbiAgLnByZXZpb3VzLXByb2plY3QgLml0ZW0tMiB7XG4gICAgd2lkdGg6IDIwcmVtO1xuICB9XG59IiwiJHJlZDogI0VBMjI1OFxyXG4kcGluazogI0ZGRThFQVxyXG4kd2hpdGU6ICNGRkZcclxuJGdyZXk6ICNFNkU2RTZcclxuJGdyZXktMjogI0NDQ0NDQ1xyXG4kZ3JleS0zOiAjOTM5MzkzXHJcbiRncmV5LTQ6ICM3MjcxNzFcclxuJGdyZXktNTogIzRENEQ0RFxyXG4kZ3JleS02OiAjRURFREVEXHJcbiRncmV5LTc6ICNDNkM2QzZcclxuJGdyZWVuOiAjNThCNTcxXHJcbiRncmVlbi0yOiAjMUU5NTNFXHJcbiR5ZWxsb3c6ICNGNDk3MDVcclxuJHpJbmRleDogKCcxJzogMSwgJzInOiAyKVxyXG4kZm9udC13ZWlnaHQ6ICgnc2VtaS1ib2xkJzogNjAwKVxyXG4kYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAxMFxyXG4kYnJlYWstcG9pbnQ6ICgnbW9iaWxlJzogNDIwcHgsICdtZWRpdW0nOiA4NDBweCkiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.sass']
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["loginForm"];
function LoginComponent_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 14);
} }
function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "By signing up, you agree to our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "terms of service and privacy policy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create an account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
        this.selectedTab = 'login';
    }
    ngOnInit() {
    }
    onTabSelect(tab) {
        this.selectedTab = tab;
    }
    onSubmit() {
        console.log(this.loginForm.value);
        this.authService.onLogIn();
        this.route.navigate(['/project-history']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["page-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loginForm = _t.first);
    } }, decls: 16, vars: 5, consts: [[1, "page-container", "login"], ["src", "../../../assets/svgs/logo-motionable-white.svg", "alt", "motionable", 1, "logo-motionable"], [1, "card"], [1, "tab-container"], [1, "text-login", "tab-login", "text-login-temp", 3, "click"], [3, "ngSubmit"], ["loginForm", "ngForm"], ["type", "text", "placeholder", "Your Email", "ngModel", "", "name", "email", "required", "", "email", ""], ["type", "password", "placeholder", "Your Password", "ngModel", "", "name", "password", "required", ""], ["type", "text", "placeholder", "Your Name", 4, "ngIf"], ["class", "forgot-password", 4, "ngIf"], ["class", "terms", 4, "ngIf"], ["type", "submit", 1, "button-primary"], ["class", "create-account", 4, "ngIf"], ["type", "text", "placeholder", "Your Name"], [1, "forgot-password"], [1, "terms"], [1, "create-account"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_4_listener() { return ctx.onTabSelect("login"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_input_10_Template, 1, 0, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 4, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTab === "sign-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTab === "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTab === "sign-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.selectedTab === "login" ? "Log in" : "Sign up", " with Motionable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTab === "login");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".page-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  box-sizing: border-box;\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 1rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #4D4D4D;\n}\n\n.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  border: none;\n  border-top: 3px solid #E6E6E6;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 1.5rem;\n  width: 100%;\n  border: 1px solid #CCCCCC;\n  border-radius: 1rem;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #727171;\n}\n\n.button[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%], .button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 16px;\n  padding: 1.5rem;\n  border-sizing: border-box;\n  color: #FFF;\n  border: none;\n  border-radius: 2.6rem;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button-transparent-primary-small[_ngcontent-%COMP%]:hover, .button-primary[_ngcontent-%COMP%]:hover, .button-primary-small[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n  transition: 0.5s ease-in-out;\n}\n\n.button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  background-color: #EA2258;\n}\n\n.button-transparent-primary-small[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border: 1px solid #EA2258;\n  color: #EA2258;\n}\n\n.button-small[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  padding: 1rem 1.5rem;\n}\n\n.text-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n@media (min-width: 420px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n\n.login[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n}\n\n.background[_ngcontent-%COMP%], .login[_ngcontent-%COMP%] {\n  background-image: url('login-background.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi) {\n  .background[_ngcontent-%COMP%], .login[_ngcontent-%COMP%] {\n    background-image: url('login-background-x2.png');\n  }\n}\n\n.logo-motionable[_ngcontent-%COMP%] {\n  width: 45rem;\n}\n\n.text-login[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #939393;\n  font-weight: 600;\n  text-align: center;\n  padding-bottom: 1rem;\n  z-index: 2;\n}\n\n.text-login-active[_ngcontent-%COMP%] {\n  color: #EA2258;\n  border-bottom: 3px solid #EA2258;\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.tab-container[_ngcontent-%COMP%]   .tab-login[_ngcontent-%COMP%] {\n  flex: 1;\n  cursor: pointer;\n}\n\n.tab-container[_ngcontent-%COMP%]   .tab-login[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n  transition: 0.5s ease-in-out;\n}\n\n.tab-container[_ngcontent-%COMP%]   .tab-sign-up[_ngcontent-%COMP%] {\n  flex: 2;\n  cursor: pointer;\n}\n\n.tab-container[_ngcontent-%COMP%]   .tab-sign-up[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n  transition: 0.5s ease-in-out;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 3rem 1rem;\n  max-width: 45rem;\n}\n\n.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n  padding-bottom: 2rem;\n  z-index: 1;\n}\n\n.card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.terms[_ngcontent-%COMP%], .create-account[_ngcontent-%COMP%], .forgot-password[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #4D4D4D;\n  padding: 0 1rem 2rem 1rem;\n  cursor: pointer;\n}\n\n.terms[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .create-account[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .forgot-password[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #EA2258;\n}\n\n.terms[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover, .create-account[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover, .forgot-password[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.5);\n  transition: 0.5s ease-in-out;\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  color: #EA2258;\n  text-align: right;\n}\n\n.forgot-password[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.5);\n  transition: 0.5s ease-in-out;\n}\n\n.create-account[_ngcontent-%COMP%] {\n  color: #EA2258;\n  text-align: center;\n  padding: 0;\n  padding-top: 1rem;\n}\n\n.create-account[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.5);\n  transition: 0.5s ease-in-out;\n}\n\n.text-login-temp[_ngcontent-%COMP%] {\n  color: black;\n  margin-bottom: 2rem;\n}\n\n.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: #EA2258;\n}\n\n@media (max-width: 420px) {\n  .background[_ngcontent-%COMP%], .login[_ngcontent-%COMP%] {\n    padding: 1rem;\n    background: transparent linear-gradient(180deg, #FF9A35 0%, #FF7947 16%, #FF4564 44%, #FF1F79 68%, #FF0886 88%, #FF008B 100%);\n  }\n\n  .logo-motionable[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGUvY29tbW9uLnNhc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zdHlsZS92YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDZEY7O0FEZ0JBO0VBQ0Usc0JFckJNO0VGc0JOLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7QUNiRjs7QURjRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDWko7O0FEYUU7RUFDRSxpQkFBQTtFQUNBLGNFM0JLO0FEZ0JUOztBRFlFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ1ZKOztBRFlBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDVEY7O0FEVUU7RUFDRSxjRTFDSztBRGtDVDs7QURVQTtFQS9DRSxhQUFBO0VBQ0EsbUJBK0MwQjtFQTlDMUIsbUJBOEN1QztFQTdDdkMsdUJBNkN5RDtFQTVDekQsZUFMK0M7RUFrRC9DLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXRXJETTtFRnNETixZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDSEY7O0FESUU7RUFqREEsdUJBQUE7RUFHQSw0QkFBQTtBQzhDRjs7QURJQTtFQUVFLHlCRWpFSTtBRCtETjs7QURRQTtFQUdFLHNCRXhFTTtFRnlFTix5QkFBQTtFQUNBLGNFNUVJO0FEcUVOOztBRFNBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ05GOztBRFFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDTEY7O0FET0E7RUFDRTtJQUNFLGFBQUE7RUNKRjtBQUNGOztBQWxGQTtFREFFLGFBQUE7RUFDQSxzQkNDYztFREFkLG1CQUFBO0VBQ0EsdUJDRDhCO0VERTlCLGVBTCtDO0VDSS9DLHNCQUFBO0FBdUZGOztBQXJGQTtFQUNFLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQXdGRjs7QUF0RkU7RUFMRjtJQU1JLGdEQUFBO0VBeUZGO0FBQ0Y7O0FBeEZBO0VBQ0UsWUFBQTtBQTJGRjs7QUF6RkE7RUFDRSxlQUFBO0VBQ0EsY0NoQk87RURpQlAsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQTRGRjs7QUExRkE7RUFDRSxjQzVCSTtFRDZCSixnQ0FBQTtBQTZGRjs7QUEzRkE7RUQ1QkUsYUFBQTtFQUNBLG1CQzRCYztFRDNCZCx1QkMyQm1CO0VEMUJuQiw4QkMwQitCO0VEekIvQixlQUwrQztBQ2dJakQ7O0FBakdFO0VBQ0UsT0FBQTtFQUNBLGVBQUE7QUFtR0o7O0FBbEdJO0VEMUJGLHVCQUFBO0VBR0EsNEJBQUE7QUM2SEY7O0FBbkdFO0VBQ0UsT0FBQTtFQUNBLGVBQUE7QUFxR0o7O0FBcEdJO0VEaENGLHVCQUFBO0VBR0EsNEJBQUE7QUNxSUY7O0FBcEdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQXVHRjs7QUF0R0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7QUF3R0o7O0FBdkdFO0VBQ0UsbUJBQUE7QUF5R0o7O0FBeEdFO0VBQ0UsV0FBQTtBQTBHSjs7QUF4R0E7RUFDRSxpQkFBQTtFQUNBLGNDdERPO0VEdURQLHlCQUFBO0VBQ0EsZUFBQTtBQTJHRjs7QUExR0U7RUFDRSxjQ2pFRTtBRDZLTjs7QUEzR0k7RUR4REYsdUJBQUE7RUFHQSw0QkFBQTtBQ29LRjs7QUEzR0E7RUFFRSxjQ3hFSTtFRHlFSixpQkFBQTtBQTZHRjs7QUE1R0U7RURoRUEsdUJBQUE7RUFHQSw0QkFBQTtBQzZLRjs7QUE1R0E7RUFFRSxjQ2hGSTtFRGlGSixrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQThHRjs7QUE3R0U7RUQxRUEsdUJBQUE7RUFHQSw0QkFBQTtBQ3dMRjs7QUE3R0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFnSEY7O0FBOUdBO0VBQ0UscUJDN0ZJO0FEOE1OOztBQS9HQTtFQUNFO0lBQ0ksYUFBQTtJQUNBLDZIQUFBO0VBa0hKOztFQWhIQTtJQUNFLFdBQUE7RUFtSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJpYWJsZXMuc2FzcydcclxuXHJcbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb24sICRhbGlnbiwgJGp1c3RpZnksICR3cmFwOiB3cmFwKVxyXG4gIGRpc3BsYXk6IGZsZXhcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvblxyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ25cclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5XHJcbiAgZmxleC13cmFwOiAkd3JhcFxyXG5cclxuQG1peGluIGJyaWdodG5lc3MoJHZhbHVlKVxyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygkdmFsdWUpXHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigpXHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dFxyXG5cclxuLnBhZ2UtY29udGFpbmVyXHJcbiAgd2lkdGg6IDEwMHZ3XHJcbiAgbWluLWhlaWdodDogMTAwdmhcclxuICBvdmVyZmxvdy14OiBoaWRkZW5cclxuICBvdmVyZmxvdy15OiBhdXRvXHJcbiAgcGFkZGluZzogMnJlbVxyXG5cclxuLmNhcmRcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGVcclxuICBib3JkZXItcmFkaXVzOiAxcmVtXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOVxyXG4gIHBhZGRpbmc6IDFyZW1cclxuICAmLXRpdGxlXHJcbiAgICBmb250LXNpemU6IDJyZW1cclxuICAgIGZvbnQtd2VpZ2h0OiBtYXAtZ2V0KCRmb250LXdlaWdodCwgJ3NlbWktYm9sZCcpXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtXHJcbiAgJi10ZXh0XHJcbiAgICBmb250LXNpemU6IDEuNHJlbVxyXG4gICAgY29sb3I6ICRncmV5LTVcclxuICBoclxyXG4gICAgbWFyZ2luOiAwXHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAkZ3JleVxyXG5cclxuaW5wdXRcclxuICBmb250LXNpemU6IDE2cHhcclxuICBwYWRkaW5nOiAxLjVyZW1cclxuICB3aWR0aDogMTAwJVxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRncmV5LTJcclxuICBib3JkZXItcmFkaXVzOiAxcmVtXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG4gICY6OnBsYWNlaG9sZGVyXHJcbiAgICBjb2xvcjogJGdyZXktNFxyXG5cclxuLmJ1dHRvblxyXG4gIEBpbmNsdWRlIGZsZXgoJGRpcmVjdGlvbjogcm93LCAkYWxpZ246IGNlbnRlciwgJGp1c3RpZnk6IGNlbnRlcilcclxuICBmb250LXNpemU6IDE2cHhcclxuICBwYWRkaW5nOiAxLjVyZW1cclxuICBib3JkZXItc2l6aW5nOiBib3JkZXItYm94XHJcbiAgY29sb3I6ICR3aGl0ZVxyXG4gIGJvcmRlcjogbm9uZVxyXG4gIGJvcmRlci1yYWRpdXM6IDIuNnJlbVxyXG4gIGN1cnNvcjogcG9pbnRlclxyXG4gICY6aG92ZXJcclxuICAgIEBpbmNsdWRlIGJyaWdodG5lc3MoMS4yKVxyXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbigpXHJcblxyXG4uYnV0dG9uLXByaW1hcnlcclxuICBAZXh0ZW5kIC5idXR0b25cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkXHJcblxyXG4uYnV0dG9uLXByaW1hcnktc21hbGxcclxuICBAZXh0ZW5kIC5idXR0b24tcHJpbWFyeVxyXG4gIEBleHRlbmQgLmJ1dHRvbi1zbWFsbFxyXG5cclxuLmJ1dHRvbi10cmFuc3BhcmVudC1wcmltYXJ5LXNtYWxsXHJcbiAgQGV4dGVuZCAuYnV0dG9uXHJcbiAgQGV4dGVuZCAuYnV0dG9uLXNtYWxsXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlXHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHJlZFxyXG4gIGNvbG9yOiAkcmVkXHJcblxyXG4uYnV0dG9uLXNtYWxsXHJcbiAgZm9udC1zaXplOiAxLjRyZW1cclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbVxyXG5cclxuLnRleHQtdGl0bGVcclxuICBmb250LXNpemU6IDNyZW1cclxuICBmb250LXdlaWdodDogYm9sZFxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KVxyXG4gIC5jYXJkXHJcbiAgICBwYWRkaW5nOiAycmVtIiwiLnBhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzRENEQ0RDtcbn1cbi5jYXJkIGhyIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRTZFNkU2O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNzI3MTcxO1xufVxuXG4uYnV0dG9uLCAuYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGwsIC5idXR0b24tcHJpbWFyeSwgLmJ1dHRvbi1wcmltYXJ5LXNtYWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIuNnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ1dHRvbjpob3ZlciwgLmJ1dHRvbi10cmFuc3BhcmVudC1wcmltYXJ5LXNtYWxsOmhvdmVyLCAuYnV0dG9uLXByaW1hcnk6aG92ZXIsIC5idXR0b24tcHJpbWFyeS1zbWFsbDpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnV0dG9uLXByaW1hcnksIC5idXR0b24tcHJpbWFyeS1zbWFsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQTIyNTg7XG59XG5cbi5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQTIyNTg7XG4gIGNvbG9yOiAjRUEyMjU4O1xufVxuXG4uYnV0dG9uLXNtYWxsLCAuYnV0dG9uLXByaW1hcnktc21hbGwsIC5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpIHtcbiAgLmNhcmQge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbn1cbi5sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5iYWNrZ3JvdW5kLCAubG9naW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWJhY2tncm91bmQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1lZGlhICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNSksIChtaW4tcmVzb2x1dGlvbjogMTQ0ZHBpKSB7XG4gIC5iYWNrZ3JvdW5kLCAubG9naW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmFja2dyb3VuZC14Mi5wbmdcIik7XG4gIH1cbn1cblxuLmxvZ28tbW90aW9uYWJsZSB7XG4gIHdpZHRoOiA0NXJlbTtcbn1cblxuLnRleHQtbG9naW4ge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjOTM5MzkzO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB6LWluZGV4OiAyO1xufVxuXG4udGV4dC1sb2dpbi1hY3RpdmUge1xuICBjb2xvcjogI0VBMjI1ODtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNFQTIyNTg7XG59XG5cbi50YWItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRhYi1jb250YWluZXIgLnRhYi1sb2dpbiB7XG4gIGZsZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWItY29udGFpbmVyIC50YWItbG9naW46aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cbi50YWItY29udGFpbmVyIC50YWItc2lnbi11cCB7XG4gIGZsZXg6IDI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWItY29udGFpbmVyIC50YWItc2lnbi11cDpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDNyZW0gMXJlbTtcbiAgbWF4LXdpZHRoOiA0NXJlbTtcbn1cbi5jYXJkIGhyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICB6LWluZGV4OiAxO1xufVxuLmNhcmQgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNhcmQgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXJtcywgLmNyZWF0ZS1hY2NvdW50LCAuZm9yZ290LXBhc3N3b3JkIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjNEQ0RDREO1xuICBwYWRkaW5nOiAwIDFyZW0gMnJlbSAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGVybXMgc3BhbiwgLmNyZWF0ZS1hY2NvdW50IHNwYW4sIC5mb3Jnb3QtcGFzc3dvcmQgc3BhbiB7XG4gIGNvbG9yOiAjRUEyMjU4O1xufVxuLnRlcm1zIHNwYW46aG92ZXIsIC5jcmVhdGUtYWNjb3VudCBzcGFuOmhvdmVyLCAuZm9yZ290LXBhc3N3b3JkIHNwYW46aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gIGNvbG9yOiAjRUEyMjU4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmNyZWF0ZS1hY2NvdW50IHtcbiAgY29sb3I6ICNFQTIyNTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG4uY3JlYXRlLWFjY291bnQ6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnRleHQtbG9naW4tdGVtcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI0VBMjI1ODtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5iYWNrZ3JvdW5kLCAubG9naW4ge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGOUEzNSAwJSwgI0ZGNzk0NyAxNiUsICNGRjQ1NjQgNDQlLCAjRkYxRjc5IDY4JSwgI0ZGMDg4NiA4OCUsICNGRjAwOEIgMTAwJSk7XG4gIH1cblxuICAubG9nby1tb3Rpb25hYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSIsIiRyZWQ6ICNFQTIyNThcclxuJHBpbms6ICNGRkU4RUFcclxuJHdoaXRlOiAjRkZGXHJcbiRncmV5OiAjRTZFNkU2XHJcbiRncmV5LTI6ICNDQ0NDQ0NcclxuJGdyZXktMzogIzkzOTM5M1xyXG4kZ3JleS00OiAjNzI3MTcxXHJcbiRncmV5LTU6ICM0RDRENERcclxuJGdyZXktNjogI0VERURFRFxyXG4kZ3JleS03OiAjQzZDNkM2XHJcbiRncmVlbjogIzU4QjU3MVxyXG4kZ3JlZW4tMjogIzFFOTUzRVxyXG4keWVsbG93OiAjRjQ5NzA1XHJcbiR6SW5kZXg6ICgnMSc6IDEsICcyJzogMilcclxuJGZvbnQtd2VpZ2h0OiAoJ3NlbWktYm9sZCc6IDYwMClcclxuJGJveC1zaGFkb3c6IDBweCAzcHggMTJweCAjMDAwMDAwMTBcclxuJGJyZWFrLXBvaW50OiAoJ21vYmlsZSc6IDQyMHB4LCAnbWVkaXVtJzogODQwcHgpIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'page-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.sass']
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { loginForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['loginForm']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/project-history/project-history.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/project-history/project-history.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectHistoryComponent", function() { return ProjectHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_project_history_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/project-history.model */ "./src/app/models/project-history.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProjectHistoryComponent_tr_13_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Write Brief");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectHistoryComponent_tr_13_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "pending": a0, "in-progress": a1, "complete": a2 }; };
function ProjectHistoryComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectHistoryComponent_tr_13_button_8_Template, 3, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectHistoryComponent_tr_13_button_9_Template, 3, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c0, project_r1.status.includes("Pending"), project_r1.status.includes("progress"), project_r1.status.includes("Complete")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.status.includes("Pending"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.status.includes("progress") || project_r1.status.includes("Complete"));
} }
class ProjectHistoryComponent {
    constructor() {
        this.projects = [
            new _models_project_history_model__WEBPACK_IMPORTED_MODULE_1__["MProject"]('Project1', '10 / 1 / 2021', 'Pending brief'),
            new _models_project_history_model__WEBPACK_IMPORTED_MODULE_1__["MProject"]('Project2', '10 / 1 / 2021', 'In progress'),
            new _models_project_history_model__WEBPACK_IMPORTED_MODULE_1__["MProject"]('Project3', '10 / 1 / 2021', 'Completed')
        ];
    }
    ngOnInit() {
    }
}
ProjectHistoryComponent.ɵfac = function ProjectHistoryComponent_Factory(t) { return new (t || ProjectHistoryComponent)(); };
ProjectHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectHistoryComponent, selectors: [["project-history"]], decls: 14, vars: 1, consts: [[1, "text-title"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "project-name"], [3, "ngClass"], ["class", "button-primary-small", 4, "ngIf"], ["class", "button-transparent-primary-small", 4, "ngIf"], [1, "button-primary-small"], ["src", "../../../assets/svgs/icon-edit-white.svg", "alt", "edit"], [1, "button-transparent-primary-small"], ["src", "../../../assets/svgs/icon-eye-red.svg", "alt", "edit"]], template: function ProjectHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Project History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectHistoryComponent_tr_13_Template, 10, 10, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".page-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 1rem;\n  box-sizing: border-box;\n  box-shadow: 0px 3px 6px #00000029;\n  padding: 1rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #4D4D4D;\n}\n\n.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 0;\n  border: none;\n  border-top: 3px solid #E6E6E6;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 1.5rem;\n  width: 100%;\n  border: 1px solid #CCCCCC;\n  border-radius: 1rem;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #727171;\n}\n\n.button[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%], .button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 16px;\n  padding: 1.5rem;\n  border-sizing: border-box;\n  color: #FFF;\n  border: none;\n  border-radius: 2.6rem;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button-transparent-primary-small[_ngcontent-%COMP%]:hover, .button-primary[_ngcontent-%COMP%]:hover, .button-primary-small[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n  transition: 0.5s ease-in-out;\n}\n\n.button-primary[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%] {\n  background-color: #EA2258;\n}\n\n.button-transparent-primary-small[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border: 1px solid #EA2258;\n  color: #EA2258;\n}\n\n.button-small[_ngcontent-%COMP%], .button-primary-small[_ngcontent-%COMP%], .button-transparent-primary-small[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  padding: 1rem 1.5rem;\n}\n\n.text-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n@media (min-width: 420px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n\n.text-title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  border-top-left-radius: 2rem;\n  border-top-right-radius: 2rem;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 100rem;\n  overflow: hidden;\n  border-collapse: collapse;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 1.8rem;\n  font-weight: bold;\n  padding: 2rem;\n  background-color: #FFE8EA;\n  position: sticky;\n  top: 0px;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  padding: 2rem;\n  border-bottom: 1px solid #C6C6C6;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.4rem;\n  margin-right: 0.5rem;\n}\n\n.project-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #EA2258;\n}\n\n.pending[_ngcontent-%COMP%] {\n  color: #939393;\n}\n\n.in-progress[_ngcontent-%COMP%] {\n  color: #F49705;\n}\n\n.complete[_ngcontent-%COMP%] {\n  color: #1E953E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGUvY29tbW9uLnNhc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2plY3QtaGlzdG9yeS9wcm9qZWN0LWhpc3RvcnkuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3N0eWxlL3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNkRjs7QURnQkE7RUFDRSxzQkVyQk07RUZzQk4sbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtBQ2JGOztBRGNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNaSjs7QURhRTtFQUNFLGlCQUFBO0VBQ0EsY0UzQks7QURnQlQ7O0FEWUU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDVko7O0FEWUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNURjs7QURVRTtFQUNFLGNFMUNLO0FEa0NUOztBRFVBO0VBL0NFLGFBQUE7RUFDQSxtQkErQzBCO0VBOUMxQixtQkE4Q3VDO0VBN0N2Qyx1QkE2Q3lEO0VBNUN6RCxlQUwrQztFQWtEL0MsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFdFckRNO0VGc0ROLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNIRjs7QURJRTtFQWpEQSx1QkFBQTtFQUdBLDRCQUFBO0FDOENGOztBRElBO0VBRUUseUJFakVJO0FEK0ROOztBRFFBO0VBR0Usc0JFeEVNO0VGeUVOLHlCQUFBO0VBQ0EsY0U1RUk7QURxRU47O0FEU0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDTkY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURPQTtFQUNFO0lBQ0UsYUFBQTtFQ0pGO0FBQ0Y7O0FBbEZBO0VBQ0UsbUJBQUE7QUFvRkY7O0FBbEZBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQXFGRjs7QUFuRkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBc0ZGOztBQXBGSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkN0QkM7RUR1QkQsZ0JBQUE7RUFDQSxRQUFBO0FBc0ZOOztBQXJGSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBdUZOOztBQXJGUTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQXVGVjs7QUFyRkE7RUFDRSxpQkFBQTtFQUNBLGNDckNJO0FENkhOOztBQXRGQTtFQUNFLGNDbkNPO0FENEhUOztBQXZGQTtFQUNFLGNDL0JPO0FEeUhUOztBQXhGQTtFQUNFLGNDbkNRO0FEOEhWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvamVjdC1oaXN0b3J5L3Byb2plY3QtaGlzdG9yeS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzLnNhc3MnXHJcblxyXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uLCAkYWxpZ24sICRqdXN0aWZ5LCAkd3JhcDogd3JhcClcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb25cclxuICBhbGlnbi1pdGVtczogJGFsaWduXHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeVxyXG4gIGZsZXgtd3JhcDogJHdyYXBcclxuXHJcbkBtaXhpbiBicmlnaHRuZXNzKCR2YWx1ZSlcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoJHZhbHVlKVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oKVxyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXRcclxuXHJcbi5wYWdlLWNvbnRhaW5lclxyXG4gIHdpZHRoOiAxMDB2d1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoXHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuXHJcbiAgb3ZlcmZsb3cteTogYXV0b1xyXG4gIHBhZGRpbmc6IDJyZW1cclxuXHJcbi5jYXJkXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbVxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjlcclxuICBwYWRkaW5nOiAxcmVtXHJcbiAgJi10aXRsZVxyXG4gICAgZm9udC1zaXplOiAycmVtXHJcbiAgICBmb250LXdlaWdodDogbWFwLWdldCgkZm9udC13ZWlnaHQsICdzZW1pLWJvbGQnKVxyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG4gICYtdGV4dFxyXG4gICAgZm9udC1zaXplOiAxLjRyZW1cclxuICAgIGNvbG9yOiAkZ3JleS01XHJcbiAgaHJcclxuICAgIG1hcmdpbjogMFxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgJGdyZXlcclxuXHJcbmlucHV0XHJcbiAgZm9udC1zaXplOiAxNnB4XHJcbiAgcGFkZGluZzogMS41cmVtXHJcbiAgd2lkdGg6IDEwMCVcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleS0yXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbVxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuICAmOjpwbGFjZWhvbGRlclxyXG4gICAgY29sb3I6ICRncmV5LTRcclxuXHJcbi5idXR0b25cclxuICBAaW5jbHVkZSBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGFsaWduOiBjZW50ZXIsICRqdXN0aWZ5OiBjZW50ZXIpXHJcbiAgZm9udC1zaXplOiAxNnB4XHJcbiAgcGFkZGluZzogMS41cmVtXHJcbiAgYm9yZGVyLXNpemluZzogYm9yZGVyLWJveFxyXG4gIGNvbG9yOiAkd2hpdGVcclxuICBib3JkZXI6IG5vbmVcclxuICBib3JkZXItcmFkaXVzOiAyLjZyZW1cclxuICBjdXJzb3I6IHBvaW50ZXJcclxuICAmOmhvdmVyXHJcbiAgICBAaW5jbHVkZSBicmlnaHRuZXNzKDEuMilcclxuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oKVxyXG5cclxuLmJ1dHRvbi1wcmltYXJ5XHJcbiAgQGV4dGVuZCAuYnV0dG9uXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHJlZFxyXG5cclxuLmJ1dHRvbi1wcmltYXJ5LXNtYWxsXHJcbiAgQGV4dGVuZCAuYnV0dG9uLXByaW1hcnlcclxuICBAZXh0ZW5kIC5idXR0b24tc21hbGxcclxuXHJcbi5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbFxyXG4gIEBleHRlbmQgLmJ1dHRvblxyXG4gIEBleHRlbmQgLmJ1dHRvbi1zbWFsbFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZVxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRyZWRcclxuICBjb2xvcjogJHJlZFxyXG5cclxuLmJ1dHRvbi1zbWFsbFxyXG4gIGZvbnQtc2l6ZTogMS40cmVtXHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW1cclxuXHJcbi50ZXh0LXRpdGxlXHJcbiAgZm9udC1zaXplOiAzcmVtXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MjBweClcclxuICAuY2FyZFxyXG4gICAgcGFkZGluZzogMnJlbSIsIi5wYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jYXJkLXRleHQge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM0RDRENEQ7XG59XG4uY2FyZCBociB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI0U2RTZFNjtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzcyNzE3MTtcbn1cblxuLmJ1dHRvbiwgLmJ1dHRvbi10cmFuc3BhcmVudC1wcmltYXJ5LXNtYWxsLCAuYnV0dG9uLXByaW1hcnksIC5idXR0b24tcHJpbWFyeS1zbWFsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyLjZyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b246aG92ZXIsIC5idXR0b24tdHJhbnNwYXJlbnQtcHJpbWFyeS1zbWFsbDpob3ZlciwgLmJ1dHRvbi1wcmltYXJ5OmhvdmVyLCAuYnV0dG9uLXByaW1hcnktc21hbGw6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmJ1dHRvbi1wcmltYXJ5LCAuYnV0dG9uLXByaW1hcnktc21hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUEyMjU4O1xufVxuXG4uYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUEyMjU4O1xuICBjb2xvcjogI0VBMjI1ODtcbn1cblxuLmJ1dHRvbi1zbWFsbCwgLmJ1dHRvbi1wcmltYXJ5LXNtYWxsLCAuYnV0dG9uLXRyYW5zcGFyZW50LXByaW1hcnktc21hbGwge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gIC5jYXJkIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG59XG4udGV4dC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJyZW07XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxudGFibGUgdHIgdGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkU4RUE7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xufVxudGFibGUgdHIgdGQge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDNkM2QzY7XG59XG50YWJsZSB0ciB0ZCBidXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAxLjRyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRUEyMjU4O1xufVxuXG4ucGVuZGluZyB7XG4gIGNvbG9yOiAjOTM5MzkzO1xufVxuXG4uaW4tcHJvZ3Jlc3Mge1xuICBjb2xvcjogI0Y0OTcwNTtcbn1cblxuLmNvbXBsZXRlIHtcbiAgY29sb3I6ICMxRTk1M0U7XG59IiwiJHJlZDogI0VBMjI1OFxyXG4kcGluazogI0ZGRThFQVxyXG4kd2hpdGU6ICNGRkZcclxuJGdyZXk6ICNFNkU2RTZcclxuJGdyZXktMjogI0NDQ0NDQ1xyXG4kZ3JleS0zOiAjOTM5MzkzXHJcbiRncmV5LTQ6ICM3MjcxNzFcclxuJGdyZXktNTogIzRENEQ0RFxyXG4kZ3JleS02OiAjRURFREVEXHJcbiRncmV5LTc6ICNDNkM2QzZcclxuJGdyZWVuOiAjNThCNTcxXHJcbiRncmVlbi0yOiAjMUU5NTNFXHJcbiR5ZWxsb3c6ICNGNDk3MDVcclxuJHpJbmRleDogKCcxJzogMSwgJzInOiAyKVxyXG4kZm9udC13ZWlnaHQ6ICgnc2VtaS1ib2xkJzogNjAwKVxyXG4kYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAxMFxyXG4kYnJlYWstcG9pbnQ6ICgnbW9iaWxlJzogNDIwcHgsICdtZWRpdW0nOiA4NDBweCkiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'project-history',
                templateUrl: './project-history.component.html',
                styleUrls: ['./project-history.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard/auth-guard.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/auth-guard/auth-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    canActivate(route, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.route.navigate(['/']);
        }
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthService {
    constructor() {
        this.logIn = false;
        this.isAdmin = false;
    }
    onLogIn() {
        this.logIn = true;
    }
    isAuthenticated() {
        return this.logIn;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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

module.exports = __webpack_require__(/*! C:\Users\putra\Documents\CODE\motionable\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map