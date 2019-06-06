import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getProducts = () => this._http.get('/api/objects');

  getProduct = (id: string) => this._http.get('api/objects/' + id);

  updateProduct = (id: string, data) => this._http.put('api/objects/' + id, data);

  deleteProduct = (id: string) => this._http.delete('api/objects/' + id);

  addProduct = (data) => this._http.post('api/objects/', data);



}

