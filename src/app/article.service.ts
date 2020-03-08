import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IArticle} from './article';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public url="/assets/data/articles.json"
  constructor(private http:HttpClient) { }
  getArticle():Observable<IArticle[]>{
    return this.http.get<IArticle[]>(this.url);
  }
}
