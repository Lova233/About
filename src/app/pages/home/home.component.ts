import { Component, OnInit } from '@angular/core';
import { ArticleDataServiceService } from 'src/app/service/article-data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articleTitles: string []

constructor(private articleDataService: ArticleDataServiceService) { }

  ngOnInit(): void {
    this.articleTitles = this.articleDataService.getAllarticleTitle(4);
    console.log(this.articleTitles)
  }

}
