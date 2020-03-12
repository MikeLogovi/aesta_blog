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
  constructor(private globals:Globals,private router:Router,private route:ActivatedRoute,private articleService:ArticleService) { }
  public article={};
  ngOnInit() {
     
  }
  displayArticle(department,article){
      this.router.navigate(['/department-'+department.slug+'/article',article.slug])
  }
}
