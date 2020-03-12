import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { SearchService } from '../search.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search="Résultats de recherche"
  breadcrumb="vous-recherchez"
  results={}
  constructor(private globals:Globals,private searchService:SearchService,private route:ActivatedRoute) { }

  ngOnInit() {
       this.route.paramMap.subscribe((params:ParamMap)=>{
           let keywords = params.get('keywords')
           this.searchService.search(keywords).then(data=>{
             this.results=data
           })
       })
  }

}
