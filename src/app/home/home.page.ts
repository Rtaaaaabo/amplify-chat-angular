import { Component, ViewChild } from '@angular/core';
import { SessionService } from '../service/session.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  chatMessage;
  currentUserId: string;
  messages: { id: string, email: string, content: string };

  constructor(
    private sessionService: SessionService,
  ) { }

  onSignOut() {
    this.sessionService.signout();
  }

  sendChatMessage() {
    let inputMessage = this.chatMessage;
    setTimeout(() => {
      this.content.scrollToBottom(200);
      this.chatMessage = '';
    })
  }
}
