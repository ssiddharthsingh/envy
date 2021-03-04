import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SapiService {

  constructor(private http:HttpClient) { }
  getData():Observable <any>{
    return this.http.get("https://api.github.com/users") 
  }
}
