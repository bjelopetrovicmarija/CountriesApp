import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Zemlja} from '../../../types/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = 'https://restcountries.eu/rest/v2';



  constructor(private http: HttpClient) { }

  vratiSveZemlje(){

    return this.http.get<Zemlja[]>('${this.api}/all');

  }



}
