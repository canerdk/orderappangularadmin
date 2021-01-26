import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private BASE_URL = 'https://localhost:44300/api/';

  constructor(private http: HttpClient) { }

  async getCategories() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return await this.http.get(this.BASE_URL + 'categories').toPromise();
  }
}
