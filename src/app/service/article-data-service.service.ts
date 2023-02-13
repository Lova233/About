import { ArticleModel } from './../utils/models/article.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

/// this can be scoped when module will be needed.. maybe never.. who knows
@Injectable({
  providedIn: 'root'
})
export class ArticleDataServiceService {
  jsonDataResult: any

  constructor(private http: HttpClient) {}

  public getArticleByNumber(articleNumber: string) {
    return this.http.get<any>('assets/data/articles/article'+articleNumber+'.data.json');
  }
}
