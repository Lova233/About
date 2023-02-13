import { ArticleComponent } from './organism/article/article.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent 
  },
  {
    path: 'article', children: [
      { path: ':id', component: ArticleComponent }
    ] 
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
