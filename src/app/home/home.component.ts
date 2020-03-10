import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  articleSliders=[]
  articles=[]
  constructor(private http:HttpClient,private globals:Globals) { 
    this.http.get(this.globals.backendEndpoint()+'/api/articles/sliders').toPromise().then(data => {
      for(let key in data){
          if(data.hasOwnProperty(key)){
            this.articleSliders.push(data[key])
          }
      }
      console.log(this.articleSliders)
  
     
      }, error => console.log("Merde "+JSON.stringify(error)));



      this.http.get(this.globals.backendEndpoint()+'/api/articles/homepage').toPromise().then(data => {
        for(let key in data){
            if(data.hasOwnProperty(key)){
              this.articles.push(data[key])
            }
        }
        for(let article of this.articles){

          console.log(article.user)  
        }
        }, error => console.log("Merde "+JSON.stringify(error)));
  }
  backendEndpoint(){
    return this.globals.backendEndpoint()
  }
  public title="AESTA";

  ngOnInit() {
   
   
  }

}
