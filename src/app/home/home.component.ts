import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  mySlideOptions={items: 1, dots: false, nav: true};
myCarouselOptions={items: 3, dots: true, nav: true};
  search=""
  articleSliders=[]
  articleSliders1=[]
  articles:any
  constructor(private http:HttpClient,private globals:Globals,private router:Router) { 
    this.http.get(this.globals.backendEndpoint()+'/api/articles/sliders').toPromise().then(data => {
      for(let key in data){
          if(data.hasOwnProperty(key)){
            this.articleSliders1.push(data[key])
          }
      }
     this.articleSliders1.forEach((d)=>{
          d.forEach((e)=>{
             this.articleSliders.push(e)
          })
     })
     console.log(this.articleSliders)
  
     
      }, error => console.log("Merde "+JSON.stringify(error)));



      this.http.get(this.globals.backendEndpoint()+'/api/articles/homepage').toPromise().then(data => {
       this.articles=data
        }, error => console.log("Merde "+JSON.stringify(error)));
  }
  backendEndpoint(){
    return this.globals.backendEndpoint()
  }
  public title="AESTA";
  searching(){
    this.router.navigate(['/search',this.search])

  }
  ngOnInit() {
   
   
  }

}
