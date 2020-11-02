import { Injectable } from '@angular/core';

export interface Putovanje{
  zemlja: string;
  grad: string;
  datum: string;
  opis: string;
}

@Injectable({
  providedIn: 'root'
})

export class PutovanjaService {

  constructor() { }
}
