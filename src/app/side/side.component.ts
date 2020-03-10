import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  categories=[]
 
  constructor(private http:HttpClient,private globals:Globals) { 
    this.http.get(this.globals.backendEndpoint()+'/api/categories').toPromise().then(data => {
      for(let key in data){
          if(data.hasOwnProperty(key)){
            this.categories.push(data[key])
          }
      }
      console.log(this.categories)  
      }, error => console.log("Merde "+JSON.stringify(error)));


  }

  ngOnInit() {
  }

}
