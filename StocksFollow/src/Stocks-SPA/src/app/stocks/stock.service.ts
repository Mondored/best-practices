import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IStock } from './stock';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) { }

    getProduct(): Observable<IStock[]> {
        return this.http.get<IStock[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;  
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}