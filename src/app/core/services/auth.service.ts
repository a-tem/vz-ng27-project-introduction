import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {LayoutService} from '@app/layout/services/layout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn: boolean;
  redirectUrl: string;
  inProgress$ = new BehaviorSubject<boolean>(false);

  constructor(private layoutService: LayoutService) {
  }

  logIn() {
    this.layoutService.showManually();
    return this.updateValueWithDelay(true, 1500);
  }

  logOut() {
    this.layoutService.hideManually();
    this.userLoggedIn = false;
  }

  private updateValueWithDelay(value: boolean, delayTime = 0): Observable<boolean> {
    return of(value).pipe(
      delay(delayTime),
      tap(() => {
        this.userLoggedIn = value;
        this.layoutService.hideManually();
      })
    );
  }
}
