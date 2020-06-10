import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
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
export class ChatDialogComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
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
    this.scrollToBottom();
  }

  ngAfterViewChecked() {        
        this.scrollToBottom();        
    } 
  scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue='';
  }

}
