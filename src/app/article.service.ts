import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IArticle} from './article';
import {Observable} from 'rxjs';
import { Globals } from './globals';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
      constructor(private http:HttpClient,private globals:Globals){}
      getArticleFromSlug(slug){
         return this.http.get(this.globals.backendEndpoint()+'/api/article/'+slug).toPromise()
      }
      setLike(article){
         this.http.get(this.globals.backendEndpoint()+'/api/setlike/article/'+article.id).toPromise().then(data=>{
          
         })
      }
      getPopularArticles(){
        return this.http.get(this.globals.backendEndpoint()+'/api/articles/popular').toPromise()
      }
      downloadPdf(id){
        this.http.get(this.globals.backendEndpoint()+'/api/articles/download_pdf/'+id).toPromise().then(data=>{
            console.log('Bravo')
        }).catch(error=>{
          console.log(error)
        })
      }
}
