import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  public title="Article Details";
  public breadCrumb="article-details";
  constructor(private articleService:ArticleService,private route:ActivatedRoute,private globals:Globals) { 

    this.route.paramMap.subscribe((params:ParamMap)=>{
      let slug=params.get('slug')
      this.articleService.getArticleFromSlug(slug).then(data=>{
            this.article=data
            console.log(this.article)
            this.articleService.setLike(this.article)
      })
    })
  }
  public article={}
  public count=0;
  ngOnInit() {
    
  }
  likeOrDislikeArticle(article){
    this.count++
    setInterval(function(){
         this.articleService.setLike()
    },10000)
  }

}
