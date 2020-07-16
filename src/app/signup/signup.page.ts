import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from '../service/session.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
  }

  onConfirmSignup() {
    const value = this.signupForm.value;
    const navigationExtra: NavigationExtras = {
      queryParams: {
        userName: value.userName
      }
    };
    this.sessionService.entryUserSignUp(value).pipe(
      tap(() => this.router.navigate(['/confirm-signup'], navigationExtra))
    ).subscribe();
  }
}
