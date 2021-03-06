import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Observable, from, BehaviorSubject, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { InterfaceUser } from '../interface/interface-user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  loggedIn: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  // ユーザーがログインしているかしていないかをチェック
  isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser()).pipe(
      map(() => {
        this.loggedIn.next(true);
        return true;
      }),
      catchError(() => {
        this.loggedIn.next(false);
        return of(false);
      })
    );
  }

  // 新規ユーザーの登録
  entryUserSignUp(value: InterfaceUser): Observable<any> {
    const username = value.userName;
    const email = value.email;
    const password = value.password;
    console.log(value);
    return from(Auth.signUp({
      username,
      password,
    }));
  }

  // ユーザーのログイン処理
  signIn(email, password): Observable<any> {
    return from(Auth.signIn(email, password)).pipe(
      tap(() => this.loggedIn.next(true))
    );
  }

  // チェック Confirm Number
  confirmSignup(userName, code): Observable<any> {
    return from(Auth.confirmSignUp(userName, code));
  }

  signout() {
    from(Auth.signOut()).subscribe(() => {
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
    });
  }

  fetchCurrentUser(): Observable<string> {
    return from(Auth.currentAuthenticatedUser()).pipe(map((result) => result.attributes.email));
  }
}
