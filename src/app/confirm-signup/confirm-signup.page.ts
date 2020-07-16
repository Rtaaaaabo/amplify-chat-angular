import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-confirm-signup',
  templateUrl: './confirm-signup.page.html',
  styleUrls: ['./confirm-signup.page.scss'],
})
export class ConfirmSignupPage implements OnInit {

  confirmForm = new FormGroup({
    confirmNumber: new FormControl('', [Validators.required]),
  });

  userName: string;

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe((param) => {
      this.userName = param.userName;
    });
  }

  ngOnInit() {
  }

  confirmSignUp() {
    const valueNumber = this.confirmForm.value.confirmNumber;
    this.sessionService.confirmSignup(this.userName, valueNumber).subscribe((result) => {
      const query = { queryParams: { result: 'Success' } };
      this.router.navigate(['/login'], query);
    });
  }

}
