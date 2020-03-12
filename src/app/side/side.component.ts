import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../category.service';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  public searchInput=''
  categories=[]
  popularArticles=[]
  constructor(private router:Router,private http:HttpClient,private globals:Globals,private articleService:ArticleService,private categoryService:CategoryService) { 
    this.categoryService.getCategories().then(data => {
            for(let key in data){
                if(data.hasOwnProperty(key)){
                  this.categories.push(data[key])
                }
            }
      }, error => console.log("Merde "+JSON.stringify(error)));
    
    this.articleService.getPopularArticles().then(data=>{
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.popularArticles.push(data[key])
        }
    }
    })


  }

  ngOnInit() {
  }
  search(){
       this.router.navigate(['/search',this.searchInput])
  }

}
