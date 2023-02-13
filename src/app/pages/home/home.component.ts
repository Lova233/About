import { Component, OnInit } from '@angular/core';
import { ArticleDataServiceService } from 'src/app/service/article-data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor(private articleDataService: ArticleDataServiceService) { }

  ngOnInit(): void {
    this.articleDataService.getArticleByNumber("1").subscribe((res) => console.log(res, "in component"))
  }

}
