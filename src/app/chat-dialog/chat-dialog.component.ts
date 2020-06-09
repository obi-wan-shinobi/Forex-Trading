import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from "../chat.service";
import { Observable } from "rxjs";
import { scan } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  constructor(private chat: ChatService) {
    console.log("Chat dialog Component called");
  }

  ngOnInit(): void {
    this.messages = this.chat.conversation.asObservable()
      .pipe(
        scan((acc, val) => acc.concat(val))
      );
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue='';
  }

}
