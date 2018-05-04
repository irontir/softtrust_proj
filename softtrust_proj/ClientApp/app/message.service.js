var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
        this.url = "/api/messages";
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get(this.url);
    };
    MessageService.prototype.createMessage = function (message) {
        return this.http.post(this.url, message);
    };
    MessageService.prototype.updateMessage = function (message) {
        return this.http.put(this.url + '/' + message.id, message);
    };
    MessageService.prototype.deleteMessage = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    MessageService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], MessageService);
    return MessageService;
}());
export { MessageService };
//# sourceMappingURL=message.service.js.map