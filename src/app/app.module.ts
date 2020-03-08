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
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    routingComponents,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
