import { Injectable } from '@angular/core';
import { Globals } from './globals';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient,private globals:Globals) { }
  sendMessage(message){
       return this.http.post(this.globals.backendEndpoint()+'/api/sendMessage',message).toPromise()
  }
}
