import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { SearchService } from '../search.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PaginatePipe } from 'ngx-pagination';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search="Résultats de recherche"
  breadcrumb="vous-recherchez"
  results={}
  keywords=""
  config:any
  constructor(private globals:Globals,private searchService:SearchService,private route:ActivatedRoute,private router:Router) { 
       this.config={
          currentPage:1,
          itemsPerPage:1,
          totalItems:0
       }
       route.queryParams.subscribe(
         params=>this.config.currentPage=params['page'] ? params['page']:1
       )
  }
  
  pagechange(newPage:number){
      this.router.navigate(['/search/'+this.keywords],{queryParams:{ page:newPage}})
  }
  ngOnInit() {
       this.route.paramMap.subscribe((params:ParamMap)=>{
           this.keywords = params.get('keywords')
           this.searchService.search(this.keywords).then(data=>{
             this.results=data
           
           })
       })
  }

}
