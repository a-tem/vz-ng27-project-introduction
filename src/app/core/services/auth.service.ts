import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn: boolean;
  redirectUrl: string;
  inProgress$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  logIn() {
    this.inProgress$.next(true);
    return this.updateValueWithDelay(true, 1500);
  }

  logOut() {
    this.inProgress$.next(false);
    this.userLoggedIn = false;
  }

  private updateValueWithDelay(value: boolean, delayTime = 0): Observable<boolean> {
    return of(value).pipe(
      delay(delayTime),
      tap(() => {
        console.log('> SRV TAP called', value);
        this.userLoggedIn = value;
        this.inProgress$.next(false);
      })
    );
  }
}
