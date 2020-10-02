import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  private counter = 0;
  private t: number;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // request interceptor
    if (req.url.includes('cart')) {
      this.startCountingTime();
    }

    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      map((event: HttpResponse<any>) => {
        // do stuff with response
        if (event.url.includes('cart')) {
          this.stopCountingTime();
        }
        return event;
      })
    );
  }

  // можно и так, а можно воспользоваться объектом Date()
  private startCountingTime() {
    if (this.t) {
      clearInterval(this.t);
    } else {
      this.counter = 0;
      console.log('> Start Counting Request Time');
      this.t = setInterval(() => {
        this.counter++;
      }, 1);
    }
  }

  private stopCountingTime() {
    if (this.t) {
      clearInterval(this.t);
    }
    console.log(`> Stop Counting Request Time. It takes: ${this.counter}ms`);
  }
}
