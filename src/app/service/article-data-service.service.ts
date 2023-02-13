import { ArticleModel } from './../utils/models/article.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/// this can be scoped when module will be needed.. maybe never.. who knows
@Injectable({
  providedIn: 'root',
})
export class ArticleDataServiceService {
  jsonDataResult: any;
  articlesTitles: string[] = [];

  constructor(private http: HttpClient) {}

  public getArticleByNumber(articleNumber: string) {
    return this.http.get<any>(
      'assets/data/articles/article' + articleNumber + '.data.json'
    );
  }

  public getAllarticleTitle(numberOfArticle: number): string[] {

    // we are just assuming that we want to fetch a certain number of article to display on the page
    for (let i = 1; i < numberOfArticle; i++) {
      this.http
        .get<any>('assets/data/articles/article' + i.toString() + '.data.json')
        .subscribe((res) =>
        // we assuming that every article has a title as intial item 
          this.articlesTitles.push(res.content[0].h1)
        );
    }
    return this.articlesTitles
  }
}

