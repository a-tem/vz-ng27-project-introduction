import { Injectable } from '@angular/core';
import {AuthService} from '@core/services/auth.service';
import {BehaviorSubject, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  showSpinner$ = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService) {
    this.authService.inProgress$.subscribe(show => this.showSpinner$.next(show));

    this.showSpinner$.subscribe(v => console.log('> LAYOUT SERVICE showSpinner$', v));
  }

  showManually() {
    // return of(true);
    this.showSpinner$.next(true);
  }
  hideManually() {
    // return of(false);
    this.showSpinner$.next(false);
  }
}
