import { ArticleDataServiceService } from 'src/app/service/article-data-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleModel } from 'src/app/utils/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private articleDataService: ArticleDataServiceService
    ) { }

  articleData: [any];


  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.articleDataService.getArticleByNumber(params['id']).subscribe(
        (res) => this.articleData = res.content,
      )
    });
  }

}
