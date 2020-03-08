import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'categories',component:CategoryComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  HomeComponent,
  CategoryComponent,
  ContactComponent
]