import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '@core/services/auth.service';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  subs: Subscription;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onLogIn() {
    this.subs = this.authService.logIn()
      .pipe(
        tap(loggedIn => {
          console.log('> CMP onLogIn TAP', loggedIn);
          const url = this.authService.redirectUrl || 'admin';
          this.router.navigate([url]);
        })
      )
      .subscribe();
  }
  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['home']);
  }

}
