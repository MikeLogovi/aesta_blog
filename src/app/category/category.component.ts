import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { CategoryService } from '../category.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category={}
  breadcrumb="categorie/"
  constructor(private globals:Globals,private categoryService:CategoryService,private route:ActivatedRoute) { }

  ngOnInit() {
        this.route.paramMap.subscribe((params:ParamMap)=>{
              let slug =params.get('slug')
              this.categoryService.getACategory(slug).then(data=>{
                   this.category=data
              })
        })
  }

}
