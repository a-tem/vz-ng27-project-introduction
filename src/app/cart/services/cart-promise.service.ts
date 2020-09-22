import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {CartAPI} from '@cart/services/cart.config';
import {catchError, publish, refCount, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ICartAPIResponse, ICartCombinedItem} from '@shared/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartPromiseService {
  sessionObj: {id: number, data: any} = {id: null, data: null};

  constructor(private http: HttpClient,
              @Inject(CartAPI) private cartUrl: string) {
  }

  createSession(): Promise<number> {
    const sessionToken = JSON.stringify({token: Date.now()});

    return this.http.post(
      this.cartUrl, sessionToken
    )
      .toPromise()
      .then((res: {id: number}) => {
        this.sessionObj.id = res.id;
      })
      .catch(this.handleError);
  }

  createOrLoadSessionData(): Promise<ICartCombinedItem[]> {
    return this.http
      .get(this.cartUrl).pipe(
        retry(3),
        publish(),
        refCount()
      )
      .toPromise()
      .then((resp: ICartAPIResponse[]) => {
        if (!resp || !Array.isArray(resp) || !resp.length) {
          return this.createSession().then(() => {
            return [] as ICartCombinedItem[];
          });
        }
        const respLastItem = resp[resp.length - 1];
        this.sessionObj.id = respLastItem.id;
        return respLastItem.cartItems ? respLastItem.cartItems : [] as ICartCombinedItem[];
      })
      .catch(this.handleError);
  }

  loadCartState(): Promise<ICartCombinedItem[]> {
    return this.http
      .get(this.cartUrl).pipe(
        retry(3),
        publish(),
        refCount()
      )
      .toPromise()
      .then((resp: {id: number, cartItems: ICartCombinedItem[]}[]) => resp[resp.length - 1].cartItems)
      .catch(this.handleError);
  }

  updateCartState(cartItems: ICartCombinedItem[]): Promise<ICartAPIResponse> {
    return this.http
      .put(`${this.cartUrl}/${this.sessionObj.id}`, JSON.stringify({id: this.sessionObj.id, cartItems}), {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      })
      .toPromise()
      .then(resp => resp as ICartAPIResponse)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse): Promise<any> {
    return Promise.reject(err.message || err);
  }
}
