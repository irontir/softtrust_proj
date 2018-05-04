import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Message } from './message';
import { Theme } from './theme';
import { ThemeService } from './theme.service';
import { MessageService } from './message.service';
import { ViewChild } from '@angular/core';



@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService, ThemeService, MessageService]
})
export class AppComponent implements OnInit {
    
    id_user: number;
    messages: Message[];
    users: User[]; 
    themes: Theme[];
    user: User = new User(); 
    message: Message = new Message();
    theme: Theme = new Theme();
    editedMessage: Message;
    editedUser: User;
    form1: boolean = true;
    form2: boolean = false;
                constructor(private userService: UserService, private themeService: ThemeService, private messageService: MessageService) { }

    ngOnInit() {
        this.loadUsers();    // загрузка данных при старте компонента 
        this.loadThemes();
        this.editedMessage = new Message(0, "", 1, 0);
        this.messages.push(this.editedMessage);
        this.editedUser = new User(0, "", "", "");
        this.users.push(this.editedUser);
    }

    editUser(user: User) {
        this.editedUser = new User(user.id, user.name, user.email, user.phone);
    }
    editMessage(message: Message) {
        // message.id = this.id_user;
        this.editedMessage = new Message(message.id, message.text, message.themeid, message.userid);
    }


    // получаем данные через сервис
    loadThemes() {
        this.themeService.getThemes()
            .subscribe((data: Theme[]) => this.themes = data);

    }
    loadUsers() {
        this.userService.getUsers()
            .subscribe((data: User[]) => this.users = data);

    }
    loadMessages() {
        this.messageService.getMessages()
            .subscribe((data1: Message[]) => this.messages = data1);

    }

    // сохранение данных
    save() {
        /*if (this.user.id == null) {
            this.userService.createUser(this.editedUser).subscribe((data: User) => this.users.push(data));
        } else {
            this.userService.updateUser(this.user)
                .subscribe(data => this.loadUsers());
        }*/


        this.userService.createUser(this.user)
            .subscribe((data: any) => {
                this.id_user = data;

                if (this.message.id == null) {
                    this.editedMessage.userid = this.id_user;
                    this.messageService.createMessage(this.editedMessage).subscribe((data1: Message) => this.messages.push(data1));
                    console.log(this.editedMessage);
                } else {
                    this.messageService.updateMessage(this.message)
                        .subscribe(data1 => this.loadMessages());
                }
    })        


        
    
        this.form2 = true;
        this.form1 = false;

    }
    editsUser(u: User) {
        this.user = u;
    }
    cancel() {
        this.user = new User();
    }
    delete(u: User) {
        this.userService.deleteUser(u.id)
            .subscribe(data => this.loadUsers());
    }
  
}