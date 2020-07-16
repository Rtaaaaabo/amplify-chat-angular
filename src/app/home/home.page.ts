import { Component } from '@angular/core';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private sessionService: SessionService,
  ) { }

  onSignOut() {
    this.sessionService.signout();
  }
}
