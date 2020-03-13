import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../globals';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import { DepartmentComponent } from '../department/department.component';
import { ArticleService } from '../article.service';
@Component({
  selector: 'app-departicle',
  templateUrl: './departicle.component.html',
  styleUrls: ['./departicle.component.scss']
})
export class DeparticleComponent implements OnInit {
  @Input() public department;
  config:any;
  constructor(private globals:Globals,private router:Router,private route:ActivatedRoute,private articleService:ArticleService) {
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
  public article={};
  ngOnInit() {
     
  }
  displayArticle(department,article){
      this.router.navigate(['/department-'+department.slug+'/article',article.slug])
  }
}
