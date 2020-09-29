import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
  }

  onLogin() {
    const value = this.loginForm.value;
    this.sessionService.signIn(value.email, value.password).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  onSignUp() {
    this.router.navigate(['/signup']);
  }

}
