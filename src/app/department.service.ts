import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Globals} from './globals'
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  datas={}
  constructor(private http:HttpClient,private globals:Globals) { }
   serve(slug){
     console.log(slug)
     return this.http.get(this.globals.backendEndpoint()+'/api/articles/'+slug).toPromise()  
  }
}
