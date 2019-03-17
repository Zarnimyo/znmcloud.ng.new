(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app.routes.ts":
/*!***********************!*\
  !*** ./app.routes.ts ***!
  \***********************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _src_app_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _src_app_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: 'news/reddit-r-all',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: _src_app_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    },
    {
        path: 'news/:sourceKey',
        component: _src_app_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_0__["ArticleListComponent"]
    }
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);


/***/ }),

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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Mobile */\r\n.pusher {\r\n    margin-left: 180px;\r\n  }\r\n.item {\r\n    border: 10px solid blue;\r\n  }\r\n/* Tablet */\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .pusher {\r\n      margin-left: 200px;\r\n    }\r\n  }\r\n@media only screen and (min-width: 991px) {\r\n    .pusher {\r\n      margin-left: 260px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYO0lBQ0ksa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7QUFFQSxXQUFXO0FBQ1g7SUFDRTtNQUNFLGtCQUFrQjtJQUNwQjtFQUNGO0FBRUE7SUFDRTtNQUNFLGtCQUFrQjtJQUNwQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNb2JpbGUgKi9cclxuLnB1c2hlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTgwcHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbSB7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgYmx1ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGFibGV0ICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAucHVzaGVyIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICAucHVzaGVyIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDI2MHB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui container\">\n  <app-sidebar></app-sidebar>\n  <app-article-list></app-article-list>\n</div> -->\n\n<div class=\"ui bottom attached segment\">\n  <app-sidebar></app-sidebar>\n  <div class=\"pusher\">\n    <router-outlet></router-outlet>\n  </div>\n  \n</div>"

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
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated //default
            ,
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

/**
 * ViewEncapsulation.None - No Shadow DOM at all. Therefore, also no style encapsulation.
   ViewEncapsulation.Emulated - No Shadow DOM but style encapsulation emulation.
   ViewEncapsulation.Native - Native Shadow DOM with all it’s goodness.
 */ 


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
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.routes */ "./app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article.service */ "./src/app/article.service.ts");
/* harmony import */ var _article_list_header_article_list_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./article-list-header/article-list-header.component */ "./src/app/article-list-header/article-list-header.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"],
                _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_8__["ArticleListComponent"],
                _article_list_header_article_list_header_component__WEBPACK_IMPORTED_MODULE_10__["ArticleListHeaderComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"]
            ],
            providers: [_article_service__WEBPACK_IMPORTED_MODULE_9__["ArticleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-list-header/article-list-header.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/article-list-header/article-list-header.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtbGlzdC1oZWFkZXIvYXJ0aWNsZS1saXN0LWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/article-list-header/article-list-header.component.html":
/*!************************************************************************!*\
  !*** ./src/app/article-list-header/article-list-header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui basic\">\n  <h1 class=\"ui header\">News</h1>\n  <div class=\"ui grid \">\n    <div class=\"four column row\" style=\"margin-bottom:5px;\">\n      <div class=\"left floated column\">\n        <div class=\"ui buttons\">\n            <button class=\"ui left attached icon mini blue button\" (click)=\"changeDirection()\">\n              <i class=\"arrow up icon\" [ngClass]=\"{\n                             'up':sortDirection > 0,\n                             'down':sortDirection <=0\n                            }\"></i>\n            </button>\n            <div class=\"right attached ui icon top left pointing dropdown blue button\">\n              <i class=\"sort content descending icon\"></i>\n              <span class=\"text\">Sort</span>\n              <div class=\"menu\">\n                <div class=\"header\">Sort by</div>\n                <div class=\"item\" (click)=\"changeSort('Time')\">Time</div>\n                <div class=\"item\" (click)=\"changeSort('Votes')\">Votes</div>\n              </div><!--menu-->\n            </div>\n        </div><!-- buttons container -->        \n      </div><!-- left column -->\n      \n      <div class=\"right floated column\">\n          <div class=\"ui fluid icon input\">\n              <input\n                (keyup)=\"liveSearch($event)\"\n                type=\"text\"\n                placeholder=\"Search...\" />\n              <i class=\"search icon\"></i>\n            </div> <!-- input -->\n      </div><!-- right column -->\n    </div>\n    \n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/article-list-header/article-list-header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/article-list-header/article-list-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: ArticleListHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListHeaderComponent", function() { return ArticleListHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../article.service */ "./src/app/article.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ArticleListHeaderComponent = /** @class */ (function () {
    function ArticleListHeaderComponent(articleService) {
        this.articleService = articleService;
        //modified from private to public because of AOT
        this.currentFilter = 'Time';
        this.sortDirection = 1; //default descending order
        console.log('ArticleListHeaderComponent - constructor');
    }
    ArticleListHeaderComponent.prototype.ngOnInit = function () {
        jQuery('.ui.dropdown').dropdown();
    };
    ArticleListHeaderComponent.prototype.changeDirection = function () {
        this.sortDirection = this.sortDirection * -1;
        this.updateSort();
    };
    ArticleListHeaderComponent.prototype.changeSort = function (filter) {
        console.log('changeSort:', filter);
        if (filter === this.currentFilter) {
            this.changeDirection();
        }
        else {
            this.currentFilter = filter;
            this.updateSort();
        }
    };
    ArticleListHeaderComponent.prototype.updateSort = function () {
        console.log('updateSort');
        this.articleService.sortBy(this.currentFilter, this.sortDirection);
    };
    ArticleListHeaderComponent.prototype.liveSearch = function (evt) {
        console.log('ArticleListHeader liveSearch');
        var val = evt.target.value;
        this.articleService.filterByTitle(val);
    };
    ArticleListHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-article-list-header',
            template: __webpack_require__(/*! ./article-list-header.component.html */ "./src/app/article-list-header/article-list-header.component.html"),
            styles: [__webpack_require__(/*! ./article-list-header.component.css */ "./src/app/article-list-header/article-list-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])
    ], ArticleListHeaderComponent);
    return ArticleListHeaderComponent;
}());



/***/ }),

/***/ "./src/app/article-list/article-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/article-list/article-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/article-list/article-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article-list/article-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui divided items\">\n  <app-article-list-header></app-article-list-header>\n\n  <!-- commented for Observable v2 -->\n  <!-- <app-article *ngFor=\"let article of articleList\" [art]=\"article\" class=\"item\"></app-article> -->\n\n  <!-- added to Observable for Obserabele v2 -->\n  <!-- added async pipe(for future data) to tell that articleList here is not iterable but it'll be eventually in iterable but it's not currently on first render,  in an asynchronous fashion-->\n  <!-- without asyn pipe ngFor can't bind to something that is not an iterable, articleList -->\n  <app-article *ngFor=\"let article of articleList | async\" [art]=\"article\" class=\"item\"></app-article>\n</div>"

/***/ }),

/***/ "./src/app/article-list/article-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-list/article-list.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../article.service */ "./src/app/article.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent(articleService, activeRoute) {
        this.articleService = articleService;
        this.activeRoute = activeRoute;
        console.log('ArticleListComponent constructor', this.articleList);
        //modified to Obserable for Obserabele v2, subscribe to articles
        //this.articleList = articleService.articles;
        //modified for sorting, subscribe to orderedArticles
        this.articleList = articleService.orderedArticles;
        console.log('ArticleListComponent constructor 2', this.articleList);
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ArticleListComponent - ngOnInit');
        //commented to Obserable for Obserabele v2
        // this.articleService.getArticles().subscribe(newsResult => {
        //   console.log('Article-List-Component:', newsResult);
        //   if(newsResult.status = 'ok'){
        //     this.articleList = newsResult.articles.map(data => {
        //       data.votes = data.votes | 0;
        //       return data;
        //     });
        //   }      
        // });
        //subscribe activeRoute params, added for sidebar sourceKey changes
        this.activeRoute.params.subscribe(function (params) {
            console.log('ArticleListComponent - activeRoute updateSourceKey');
            var sourceKey = params['sourceKey'];
            _this.articleService.updateSourceKey(sourceKey);
        });
        //added to Obserable for Obserabele v2
        //this.articleService.getArticleList();//commented for upateSourceKey
    };
    ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-article-list',
            template: __webpack_require__(/*! ./article-list.component.html */ "./src/app/article-list/article-list.component.html"),
            styles: [__webpack_require__(/*! ./article-list.component.css */ "./src/app/article-list/article-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ArticleListComponent);
    return ArticleListComponent;
}());



/***/ }),

/***/ "./src/app/article.service.ts":
/*!************************************!*\
  !*** ./src/app/article.service.ts ***!
  \************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article */ "./src/app/article.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







//ArticleSortOrderFn return ArticleSortFn return number
var sortByTime = function (direction) {
    return function (a, b) {
        console.log('### sortByTime - direction:', direction);
        return (direction * (b.publishedAt.getTime() - a.publishedAt.getTime()));
    };
};
var sortByVote = function (direction) {
    return function (a, b) {
        console.log('### sortByVotes - direction:', direction);
        return (direction * (b.votes - a.votes));
    };
};
var sortFns = {
    'Time': sortByTime,
    'Votes': sortByVote
};
var ArticleService = /** @class */ (function () {
    function ArticleService(httpClient) {
        this.httpClient = httpClient;
        this.source = "reddit-r-all";
        this.path = '/v2/top-headlines';
        this.sourcePath = '/v2/sources';
        this._articles = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]); //empty array
        this.articles = this._articles.asObservable();
        //added for sorting direction / votes, time
        this._sortByDirectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](1);
        this._sortByFilterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](sortByTime);
        this._filterBySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.refreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.source);
        this._sourceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.sources = this._sourceSubject.asObservable();
        console.log('ArticleService constructor', this.orderedArticles);
        //added for updateSourceKey changes
        this.refreshSubject.subscribe(this.getArticleList.bind(this));
        //update order article subject
        //order article to be a combination of all articles plus filter
        this.orderedArticles = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.articles, this._sortByFilterSubject, this._sortByDirectionSubject, this._filterBySubject)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_a) {
            var articles = _a[0], sorter = _a[1], direction = _a[2], filterStr = _a[3];
            console.log('ArticleService constructor - map - direction:', direction, filterStr);
            var reg = new RegExp(filterStr, 'gi'); //g global, all match / i insensitive, case insensitive match
            return articles
                .filter(function (article) { return reg.exec(article.title); })
                .sort(sorter(direction));
        }));
        console.log('ArticleService constructor 2', this.orderedArticles);
    }
    ArticleService.prototype.getArticles = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('sources', this.source).set('apiKey', src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiKey);
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl, { params: params });
    };
    ArticleService.prototype.getArticleList = function (sourceKey) {
        var _this = this;
        if (sourceKey === void 0) { sourceKey = this.source; }
        console.log('ArticleService getArticleList');
        this._makeHttpRequests(this.path, sourceKey).subscribe(function (result) {
            //console.log('newResult:', result);
            if (result.status === 'ok') {
                var tempArticleList = result.articles.map(function (article) {
                    article = new _article__WEBPACK_IMPORTED_MODULE_2__["Article"](article.title, article.description, article.urlToImage, article.publishedAt, article.votes);
                    return article;
                });
                _this._articles.next(tempArticleList);
            }
        });
    };
    ArticleService.prototype._makeHttpRequests = function (path, sourceKey) {
        var params;
        var url;
        if (undefined !== sourceKey) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('sources', sourceKey).set('apiKey', src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiKey);
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + path;
        }
        else {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('language', 'en').set('apiKey', src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiKey);
            url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + this.sourcePath;
        }
        return this.httpClient.get(url, { params: params });
    };
    //added for sorting
    ArticleService.prototype.sortBy = function (filter, direction) {
        console.log('ArticleService sortBy');
        //update the different subjects
        this._sortByDirectionSubject.next(direction);
        this._sortByFilterSubject.next(sortFns[filter]); //sortFns.Time or sortFns.xxx
    };
    //filter by title - serach
    ArticleService.prototype.filterByTitle = function (filter) {
        console.log('filterBy - filter:', filter);
        this._filterBySubject.next(filter);
    };
    ArticleService.prototype.getSourceList = function () {
        var _this = this;
        console.log('ArticleService getSourceList');
        this._makeHttpRequests(this.path).subscribe(function (result) {
            console.log('getSourceList - result:', result.sources);
            _this._sourceSubject.next(result.sources);
        });
    };
    ArticleService.prototype.updateSourceKey = function (sourceKey) {
        console.log('ArticleService - updateSourceKey:', sourceKey);
        this.refreshSubject.next(sourceKey);
    };
    ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
}());

/**
 * <Subject>
 * A Subject is a special type of Observable that allows values to be multicasted
 * to many Observers. Subjects are like EventEmitters
 *
 * <BehaviorSubject>
 * A variant of Subject that requires an initial value and
 * emits its current value whenever it is subscribed to.
 *
 * <combineLatest>
 * Combines multiple Observables to create an Observable whose values
 * are calculated from the latest values of each of its input Observables
 *
 * <map>
 * Applies a given project function to each value emitted by the source Observable,
 * and emits the resulting values as an Observable
 *
 * <bind>
 * For a given function, creates a bound function that has the same body
 * as the original function. The this object of the bound function is associated
 * with the specified object, and has the specified initial parameters.
 * (or)
 * The bind() method creates a new function that, when called,
 * has its 'this' keyword set to the provided value,
 * with a given sequence of arguments preceding any provided
 * when the new function is called.
 * (or)
 * You can use call()/apply() to invoke the function immediately.
 * bind() returns a bound function that, when executed later,
 * will have the correct context ("this") for calling the original function.
 * So bind() can be used when the function needs to be called later in
 * certain events when it's useful.
 */ 


/***/ }),

/***/ "./src/app/article.ts":
/*!****************************!*\
  !*** ./src/app/article.ts ***!
  \****************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
var Article = /** @class */ (function () {
    function Article(title, description, urlToImage, publishedAt, votes) {
        this.title = title;
        this.description = description;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
        this.votes = votes;
        //console.log('article constructor');
        this.votes = votes | 0;
        this.publishedAt = new Date(publishedAt);
    }
    /*
 private title: string;
 private description: string;

 constructor(title:string, description:string){
   this.title = title;
   this.description = description;
 }
 */
    //for converting json to article object for toPromise as its return object but we can use it if we want
    //but no need for Observable as it return json
    Article.fromJSON = function (json) {
        var article = Object.create(Article.prototype);
        return Object.assign(article, json, {
            votes: json.votes ? json.votes : 0,
            publishedAt: json.publishedAt ? new Date(json.publishedAt) : new Date()
        });
    };
    Article.prototype.voteUp = function () {
        this.votes++;
    };
    Article.prototype.voteDown = function () {
        this.votes--;
    };
    return Article;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\n  <img src=\"{{art.urlToImage}}\"/>\n</div>\n<div class=\"content\">\n  <div class=\"header\">\n    {{art.title}}\n  </div>\n  <div class=\"meta\">\n    <span class=\"ui blue small label\">\n      <i class=\"heart icon\"></i>\n      <div class=\"detail\">\n        {{art.votes}}\n      </div>\n    </span>\n    <span class=\"ui right floated\">\n      <a (click)=\"upVote()\" class=\"ui small label\">\n        <i class=\"arrow up icon\"></i>\n        Upvote\n      </a>\n\n      <a (click)=\"downVote()\" class=\"ui small label\">\n        <i class=\"arrow down icon\"></i>\n        Downvote\n      </a>\n    </span>\n  </div>\n  <div class=\"meta date\">\n  \n  {{art.publishedAt | date:'medium'}}\n  </div>\n  <div class=\"meta description\">\n    <p>{{art.description}}</p>\n  </div>\n  <div>\n    <a href=\"#\" target=\"_blank\" class=\"ui right floated button primary\">\n      Read more <i class=\"right chevron icon\"></i>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../article */ "./src/app/article.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.upVote = function () {
        this.art.voteUp();
    };
    ArticleComponent.prototype.downVote = function () {
        this.art.voteDown();
    };
    ArticleComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _article__WEBPACK_IMPORTED_MODULE_1__["Article"])
    ], ArticleComponent.prototype, "art", void 0);
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        })
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Mobile */\r\n.sidebar-container {\r\n  width: 180px;\r\n  overflow: hidden;\r\n  height: 100%;\r\n  position: fixed;\r\n  margin: 0;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n/* Tablet / iPad Portrait */\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .sidebar-container {\r\n    width: 200px;\r\n  }\r\n}\r\n@media only screen and (min-width: 991px) {\r\n  .sidebar-container {\r\n    width: 260px;\r\n  }\r\n}\r\na.item.news-item {\r\n  padding-left: 10px;\r\n  line-height: 1.4em !important;\r\n}\r\na.item.news-item.active {\r\n  background-color: #ddd !important;\r\n}\r\na span.side-news-item {\r\n  color: #ffffff;\r\n}\r\na.active span.side-news-item {\r\n  color: #222222 !important;\r\n}\r\n.sidebar::-webkit-scrollbar { width: 0 !important }\r\n.sidebar { -ms-overflow-style: none; }\r\n.sidebar { overflow: -moz-scrollbars-none; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxNQUFNO0VBQ04sT0FBTztBQUNUO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQSw4QkFBOEIsb0JBQW9CO0FBQ2xELFdBQVcsd0JBQXdCLEVBQUU7QUFDckMsV0FBVyw4QkFBOEIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW9iaWxlICovXHJcbi5zaWRlYmFyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW46IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi8qIFRhYmxldCAvIGlQYWQgUG9ydHJhaXQgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLnNpZGViYXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAuc2lkZWJhci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuYS5pdGVtLm5ld3MtaXRlbSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbSAhaW1wb3J0YW50O1xyXG59XHJcbmEuaXRlbS5uZXdzLWl0ZW0uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XHJcbn1cclxuYSBzcGFuLnNpZGUtbmV3cy1pdGVtIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5hLmFjdGl2ZSBzcGFuLnNpZGUtbmV3cy1pdGVtIHtcclxuICBjb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXIgeyB3aWR0aDogMCAhaW1wb3J0YW50IH1cclxuLnNpZGViYXIgeyAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IH1cclxuLnNpZGViYXIgeyBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7IH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-container\">\n  <div class=\"ui container visible fixed inverted left vertical sidebar menu\">\n    <div class=\"item\">\n      <div class=\"header\">New sources</div>\n    </div>\n\n    <div class=\"item\">\n      <div class=\"menu\">\n        <a class=\"item news-item\" \n          *ngFor='let source of sourceList | async'\n          routerLink='/news/{{source[\"id\"]}}'\n          routerLinkActive='active'>\n          <span class='side-news-item'>\n            <!-- <img class='ui avatar image'\n              src='{{ source[\"urlsToLogos\"][\"small\"] }}' /> -->\n            <span class='side-news-item'>\n              {{ source['name'] }}\n            </span>\n          </span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(articleService) {
        this.articleService = articleService;
        this.sourceList = articleService.sources;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.articleService.getSourceList();
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"]])
    ], SidebarComponent);
    return SidebarComponent;
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
    production: false,
    baseUrl: "https://newsapi.org",
    apiKey: "80d5a48feac64a48b912d2a060fbc21d"
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

module.exports = __webpack_require__(/*! D:\Angular\Projects\reddit-clone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map