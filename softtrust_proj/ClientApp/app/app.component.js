var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Message } from './message';
import { Theme } from './theme';
import { ThemeService } from './theme.service';
import { MessageService } from './message.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(userService, themeService, messageService) {
        this.userService = userService;
        this.themeService = themeService;
        this.messageService = messageService;
        this.user = new User();
        this.message = new Message();
        this.theme = new Theme();
        this.form1 = true;
        this.form2 = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadUsers(); // загрузка данных при старте компонента 
        this.loadThemes();
        this.editedMessage = new Message(0, "", 1, 0);
        this.messages.push(this.editedMessage);
        this.editedUser = new User(0, "", "", "");
        this.users.push(this.editedUser);
    };
    AppComponent.prototype.editUser = function (user) {
        this.editedUser = new User(user.id, user.name, user.email, user.phone);
    };
    AppComponent.prototype.editMessage = function (message) {
        // message.id = this.id_user;
        this.editedMessage = new Message(message.id, message.text, message.themeid, message.userid);
    };
    // получаем данные через сервис
    AppComponent.prototype.loadThemes = function () {
        var _this = this;
        this.themeService.getThemes()
            .subscribe(function (data) { return _this.themes = data; });
    };
    AppComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (data) { return _this.users = data; });
    };
    AppComponent.prototype.loadMessages = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (data1) { return _this.messages = data1; });
    };
    // сохранение данных
    AppComponent.prototype.save = function () {
        /*if (this.user.id == null) {
            this.userService.createUser(this.editedUser).subscribe((data: User) => this.users.push(data));
        } else {
            this.userService.updateUser(this.user)
                .subscribe(data => this.loadUsers());
        }*/
        var _this = this;
        this.userService.createUser(this.user)
            .subscribe(function (data) {
            _this.id_user = data;
            if (_this.message.id == null) {
                _this.editedMessage.userid = _this.id_user;
                _this.messageService.createMessage(_this.editedMessage).subscribe(function (data1) { return _this.messages.push(data1); });
                console.log(_this.editedMessage);
            }
            else {
                _this.messageService.updateMessage(_this.message)
                    .subscribe(function (data1) { return _this.loadMessages(); });
            }
        });
        this.form2 = true;
        this.form1 = false;
    };
    AppComponent.prototype.editsUser = function (u) {
        this.user = u;
    };
    AppComponent.prototype.cancel = function () {
        this.user = new User();
    };
    AppComponent.prototype.delete = function (u) {
        var _this = this;
        this.userService.deleteUser(u.id)
            .subscribe(function (data) { return _this.loadUsers(); });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [UserService, ThemeService, MessageService]
        }),
        __metadata("design:paramtypes", [UserService, ThemeService, MessageService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map