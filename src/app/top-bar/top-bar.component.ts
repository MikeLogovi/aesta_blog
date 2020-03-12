import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public title ="AESTA"
  public articles=[];
  @Input('parentData') public name;
  @Output() childVal=new EventEmitter();
  constructor(private _articles :  ArticleService) { }

  ngOnInit() {
      //this._articles.getArticle().subscribe(data=>this.articles=data);
  }
  send(){
    this.childVal.emit('coucou mike');
  }
  onClick(value){
    console.log('Entrain de rechercher ...'+value)
  }
}
