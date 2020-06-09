import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";

import { ApiAiClient } from "api-ai-javascript";

import { Observable, BehaviorSubject } from "rxjs";

export class Message {
  constructor(public content: string, public sentBy: string, public timestamp: Date) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogflow.forexBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {
    console.log("Chat serive constructor called")
  }

  update(msg: Message){
    this.conversation.next([msg]);
  }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user', new Date(Date.now()));
    this.update(userMessage);

    return this.client.textRequest(msg)
        .then(res => {
          const speech = res.result.fulfillment.speech;
          const timestamp = res.timestamp;
          const botMessage = new Message(speech, 'bot', timestamp);
          this.update(botMessage);
        });
  }

}
