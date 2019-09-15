import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * A service to intrepret all the `get` and `post` requests made to the server
 */
@Injectable({
  providedIn: 'root',
})
export class SyncService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private baseUrl: string = 'https://developers.zomato.com/api/v2.1/';

  constructor(private http: HttpClient) { }

  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${endpoint}`, this.httpOptions);
  }

  post(endpoint: string, payload: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}${endpoint}`,
      payload,
      this.httpOptions
    );
  }


}