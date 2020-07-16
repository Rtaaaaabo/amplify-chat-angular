import { Component, ViewChild, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { IonContent, Platform } from '@ionic/angular';
import { APIService } from '../../app/API.service';
import { v4 as uuid } from 'uuid';
import { Message } from '../interface/message';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  chatMessage;
  currentEmail: string;
  messages: Message[];

  constructor(
    private sessionService: SessionService,
    private apiService: APIService,
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.sessionService.fetchCurrentUser().subscribe((email: string) => {
      this.currentEmail = email;
      this.apiService.ListMessages().then(data => {
        this.messages = data.items;
      });
    });
  }

  onSignOut() {
    this.sessionService.signout();
  }

  sendChatMessage() {
    const inputMessage = this.chatMessage;
    const contentMessage = {
      id: `${uuid()}`,
      email: this.currentEmail,
      content: inputMessage
    };
    this.apiService.CreateMessage(contentMessage).then(data => {
      console.log(data);
    });

    this.apiService.OnCreateMessageListener.subscribe(data => {
      console.log(data);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.apiService.OnCreateMessageListener.subscribe((evt) => {
        console.log(evt);
      });
    });
  }
}
