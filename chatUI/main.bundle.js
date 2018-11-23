webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div  class=\"chatform\">\n  <message-list [messages]=\"messages\"></message-list>\n  <message-form [message]=\"message\" [messages]=\"messages\"></message-form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatform {\n  width: 600px;\n  margin: 0 auto;\n  margin-top: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models__ = __webpack_require__("../../../../../src/app/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.message = new __WEBPACK_IMPORTED_MODULE_1__app_models__["a" /* Message */]('', 'assets/images/user.png');
        this.messages = [
            new __WEBPACK_IMPORTED_MODULE_1__app_models__["a" /* Message */]('Welcome to TCD Room Booking. How can I help you?', 'assets/images/bot.png', new Date())
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_components__ = __webpack_require__("../../../../../src/app/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_components__["c" /* MessageListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_components__["a" /* MessageFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_components__["b" /* MessageItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__app_services__["a" /* DialogflowService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_form_message_form_component__ = __webpack_require__("../../../../../src/app/components/message-form/message-form.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__message_form_message_form_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_list_message_list_component__ = __webpack_require__("../../../../../src/app/components/message-list/message-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__message_list_message_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_item_message_item_component__ = __webpack_require__("../../../../../src/app/components/message-item/message-item.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__message_item_message_item_component__["a"]; });





/***/ }),

/***/ "../../../../../src/app/components/message-form/message-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chatcontrol\">\n  <input type=\"text\" class=\"form-control chatinput\" (keyup.enter)=\"sendMessage()\" [(ngModel)]=\"message.content\"/>\n  <button class=\"btn btn-success sendbtn\" (click)=\"sendMessage()\">Send</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/message-form/message-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatcontrol {\n  float: left;\n  width: 100%; }\n  .chatcontrol .chatinput {\n    width: 80%;\n    float: left;\n    border-radius: 0; }\n  .chatcontrol .sendbtn {\n    width: 20%;\n    float: left;\n    border-radius: 0;\n    text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/message-form/message-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageFormComponent = (function () {
    function MessageFormComponent(dialogFlowService) {
        this.dialogFlowService = dialogFlowService;
    }
    MessageFormComponent.prototype.ngOnInit = function () {
    };
    MessageFormComponent.prototype.sendMessage = function () {
        var _this = this;
        this.message.timestamp = new Date();
        this.messages.push(this.message);
        this.dialogFlowService.getResponse(this.message.content).subscribe(function (res) {
            _this.messages.push(new __WEBPACK_IMPORTED_MODULE_1__app_models__["a" /* Message */](res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp));
        });
        this.message = new __WEBPACK_IMPORTED_MODULE_1__app_models__["a" /* Message */]('', 'assets/images/user.png');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('message'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_models__["a" /* Message */])
    ], MessageFormComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('messages'),
        __metadata("design:type", Array)
    ], MessageFormComponent.prototype, "messages", void 0);
    MessageFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'message-form',
            template: __webpack_require__("../../../../../src/app/components/message-form/message-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/message-form/message-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_services__["a" /* DialogflowService */]])
    ], MessageFormComponent);
    return MessageFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/message-item/message-item.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item\">\n  <img [src]=\"message.avatar\" class=\"avatar\"/>\n  <div class=\"message\">\n    {{message.content}}\n  </div>\n  <div class=\"timeform\">\n    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> <span class=\"timestamp\">at {{message.timestamp | date : 'dd/MM/yyyy' }}</span>\n  </div>\n</li>\n"

/***/ }),

/***/ "../../../../../src/app/components/message-item/message-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message {\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 400; }\n\n.timeform {\n  float: left;\n  width: 100%; }\n  .timeform i {\n    margin-left: 20px; }\n  .timeform .timestamp {\n    font-size: 0.6em; }\n\n.avatar {\n  width: 50px;\n  margin-right: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/message-item/message-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models__ = __webpack_require__("../../../../../src/app/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageItemComponent = (function () {
    function MessageItemComponent() {
    }
    MessageItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('message'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_models__["a" /* Message */])
    ], MessageItemComponent.prototype, "message", void 0);
    MessageItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'message-item',
            template: __webpack_require__("../../../../../src/app/components/message-item/message-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/message-item/message-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageItemComponent);
    return MessageItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/message-list/message-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chatlist\" #chatlist>\n  <ul class=\"list-group\">\n    <message-item *ngFor=\"let msg of messages\" [message]=\"msg\"></message-item>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/message-list/message-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatlist {\n  height: 600px;\n  overflow-y: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/message-list/message-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_components_message_item_message_item_component__ = __webpack_require__("../../../../../src/app/components/message-item/message-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageListComponent = (function () {
    function MessageListComponent() {
    }
    MessageListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.chatItems.changes.subscribe(function (elements) {
            // console.log('messsage list changed: ' + this.messages.length);
            _this.scrollToBottom();
        });
    };
    MessageListComponent.prototype.scrollToBottom = function () {
        try {
            this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log('Could not find the "chatList" element.');
        }
    };
    MessageListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('messages'),
        __metadata("design:type", Array)
    ], MessageListComponent.prototype, "messages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('chatlist', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], MessageListComponent.prototype, "chatList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__app_components_message_item_message_item_component__["a" /* MessageItemComponent */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* QueryList */])
    ], MessageListComponent.prototype, "chatItems", void 0);
    MessageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'message-list',
            template: __webpack_require__("../../../../../src/app/components/message-list/message-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/message-list/message-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message__ = __webpack_require__("../../../../../src/app/models/message.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__message__["a"]; });



/***/ }),

/***/ "../../../../../src/app/models/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(content, avatar, timestamp) {
        this.content = content;
        this.timestamp = timestamp;
        this.avatar = avatar;
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/services/dialogflow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogflowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogflowService = (function () {
    function DialogflowService(http) {
        this.http = http;
        this.baseURL = "https://api.dialogflow.com/v1/query?v=20150910";
        this.token = __WEBPACK_IMPORTED_MODULE_3__env_environment__["a" /* environment */].token;
    }
    DialogflowService.prototype.getResponse = function (query) {
        var data = {
            query: query,
            lang: 'en',
            sessionId: '12345'
        };
        return this.http
            .post("" + this.baseURL, data, { headers: this.getHeaders() })
            .map(function (res) {
            return res.json();
        });
    };
    DialogflowService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "Bearer " + this.token);
        return headers;
    };
    DialogflowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DialogflowService);
    return DialogflowService;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogflow_service__ = __webpack_require__("../../../../../src/app/services/dialogflow.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dialogflow_service__["a"]; });



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    token: '611aecbfa08c47c0941c6e4ffca48e8c'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map