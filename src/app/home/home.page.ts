import { Component, ViewChild, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { AmplifyService } from '../service/amplify.service';
import { IonContent } from '@ionic/angular';
import createMessage from '../graphql/mutation/createMessage';
import { APIService } from '../../app/API.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  chatMessage;
  currentEmail: string;
  messages: { id: string, email: string, content: string };

  constructor(
    private sessionService: SessionService,
    private amplifyService: AmplifyService,
    private apiService: APIService,
  ) { }

  ngOnInit() {
    this.sessionService.fetchCurrentUser().subscribe((email: string) => {
      this.currentEmail = email;
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
    console.log('contentMessage', contentMessage);
    this.apiService.CreateMessage(contentMessage).then(data => {
      console.log(data);
    });
  }
}
