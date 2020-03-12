import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from './globals';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient,private globals:Globals) { }
  search(keywords){
  
       keywords=keywords.replace('+',' ').trim()
       
       return this.http.get(this.globals.backendEndpoint()+'/api/search/'+keywords).toPromise()
  }
}
