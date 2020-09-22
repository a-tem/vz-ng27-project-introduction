import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { TimingInterceptor } from './timing';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
];
