import { Injectable } from '@angular/core';
import {AuthService} from '@core/services/auth.service';
import {BehaviorSubject, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  showSpinner$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  showManually() {
    this.showSpinner$.next(true);
  }
  hideManually() {
    this.showSpinner$.next(false);
  }
}
