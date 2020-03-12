import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { NticComponent } from './ntic/ntic.component';
import { EducationComponent } from './education/education.component';
import { SanteComponent } from './sante/sante.component';
import { SpirituelComponent } from './spirituel/spirituel.component';
import { EntreprenariatComponent } from './entreprenariat/entreprenariat.component';
import { AncienComponent } from './ancien/ancien.component';
import { AproposComponent } from './apropos/apropos.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { SearchComponent } from './search/search.component';
import { TesComponent } from './tes/tes.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'category/:slug',component:CategoryComponent},
  {path:'contact',component:ContactComponent},
  {path:'a-propos',component:AproposComponent},
  {path:'department-ntic',component:NticComponent},
  {path:'department-ntic/article/:slug',component:ArticleDetailComponent},
  {path:'department-education',component:EducationComponent},
  {path:'department-education/article/:slug',component:ArticleDetailComponent},
  {path:'department-sante',component:SanteComponent},
  {path:'department-sante/article/:slug',component:ArticleDetailComponent},
  {path:'department-spirituel',component:SpirituelComponent},
  {path:'department-spirituel/article/:slug',component:ArticleDetailComponent},
  {path:'department-entreprenarial',component:ArticleDetailComponent},
  {path:'department-entreprenarial/article/:slug',component:ArticleDetailComponent},
  {path:'department-ancien',component:AncienComponent},
  {path:'department-ancien/article/:slug',component:ArticleDetailComponent},
  {path:'search/:keywords',component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  HomeComponent,
  CategoryComponent,
  ContactComponent,
  AproposComponent,
  NticComponent,
  EducationComponent,
  SanteComponent,
  SpirituelComponent,
  EntreprenariatComponent,
  AncienComponent,
  ArticleDetailComponent,
  SearchComponent
]