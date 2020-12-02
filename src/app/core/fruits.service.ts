import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private http: HttpClient) { }
  
  getFruits() {
    return this.http.get<any[]>('http://localhost:4201/fruits');
  }

  getFruit(id: number) {
    return this.http.get<any>(`http://localhost:4201/fruits/${id}`);
  }
}
