import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TextBlockComponent } from './atoms/text-block/text-block.component';
import { NavComponent } from './molecules/nav/nav.component';
import { ImageComponent } from './atoms/image/image.component';
import { LinkComponent } from './atoms/link/link.component';
import { ArticleComponent } from './organism/article/article.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextBlockComponent,
    NavComponent,
    ImageComponent,
    LinkComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
