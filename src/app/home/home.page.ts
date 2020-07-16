import { Component } from '@angular/core';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
    console.log('sendChatMessage');
  }
}
