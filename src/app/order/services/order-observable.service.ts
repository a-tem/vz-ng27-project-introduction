import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrdersAPI} from '@app/order/services/orders.config';
import {Observable, throwError} from 'rxjs';
import {IOrderData} from '@shared/models/order.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderObservableService {

  constructor(@Inject(OrdersAPI) private ordersUrl: string,
              private http: HttpClient) { }

  saveOrder(orderData: IOrderData): Observable<IOrderData> {
    return this.http.post<IOrderData>(
      this.ordersUrl,
      JSON.stringify(orderData),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).pipe(
        catchError(this.handleError)
    );
  }

  private handleError(err) {
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
