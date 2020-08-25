import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('https://w9gy04gtw4.execute-api.us-east-1.amazonaws.com/dev/players')
  }

}
