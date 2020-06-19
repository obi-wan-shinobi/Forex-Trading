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

  readonly token = environment.dialogflow.forexBot;                           //Import token from environment
  readonly client = new ApiAiClient({accessToken: this.token});               //Create an ApiAiClient

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {
    console.log("Chat serive constructor called")
  }

  update(msg: Message){
    this.conversation.next([msg]);
  }                                                                 //Update message into message array

  converse(msg: string) {
    const userMessage = new Message(msg, 'You', new Date(Date.now()));
    this.update(userMessage);

    return this.client.textRequest(msg)
        .then(res => {
          const speech = res.result.fulfillment.speech;
          const timestamp = res['timestamp'];
          const botMessage = new Message(speech, 'Bot', timestamp);
          this.update(botMessage);
        });
  }                                                                           //Function to send and receive messages
}
