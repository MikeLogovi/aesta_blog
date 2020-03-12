import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from './globals';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient,private globals:Globals) { }
  getCategories(){
    return this.http.get(this.globals.backendEndpoint()+'/api/categories').toPromise()
  }
  getACategory(slug){
    return this.http.get(this.globals.backendEndpoint()+'/api/category/'+slug).toPromise()
  }
  
}
