import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleService } from './article.service';
import { CategoryComponent } from './category/category.component';
import {Globals} from './globals';
import { SideComponent } from './side/side.component';
import { NticComponent } from './ntic/ntic.component';
import { SanteComponent } from './sante/sante.component';
import { SpirituelComponent } from './spirituel/spirituel.component';
import { EducationComponent } from './education/education.component';
import { EntreprenariatComponent } from './entreprenariat/entreprenariat.component';
import { AncienComponent } from './ancien/ancien.component'
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    routingComponents,
    CategoryComponent,
    SideComponent,
    NticComponent,
    SanteComponent,
    SpirituelComponent,
    EducationComponent,
    EntreprenariatComponent,
    AncienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticleService,Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
