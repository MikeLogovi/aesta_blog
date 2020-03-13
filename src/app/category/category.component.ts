import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { CategoryService } from '../category.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category={}
  breadcrumb="categorie/"
  config:any
  constructor(private globals:Globals,private categoryService:CategoryService,private route:ActivatedRoute,private router:Router,private articleService:ArticleService) { 
    this.config={
      currentPage:1,
      itemsPerPage:6,
      totalItems:0
     }
     route.queryParams.subscribe(
      params=>this.config.currentPage=params['page'] ? params['page']:1
    )
  }
  pagechange(newPage:number){
    let r=(this.router.url).split('?')
   this.router.navigate([r[0]],{queryParams:{ page:newPage}})
   }
   downloadPdf(id){
       this.articleService.downloadPdf(id)
   }
  ngOnInit() {
        this.route.paramMap.subscribe((params:ParamMap)=>{
              let slug =params.get('slug')
              this.categoryService.getACategory(slug).then(data=>{
                   this.category=data
              })
        })
  }

}
