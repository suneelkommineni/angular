import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  constructor(private http:HttpClient) { }


  getAllRecords(){

    return this.http.get('http://jsonplaceholder.typicode.com/posts');
    
    }
    
}
