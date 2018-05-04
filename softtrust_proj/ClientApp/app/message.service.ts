import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message';

@Injectable()

export class MessageService {
    private url = "/api/messages";

    constructor(private http: HttpClient) {
    }

    getMessages() {
        return this.http.get(this.url);
    }

    createMessage(message: Message) {
        return this.http.post(this.url, message);
    }
    updateMessage(message: Message) {

        return this.http.put(this.url + '/' + message.id, message);
    }
    deleteMessage(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}

