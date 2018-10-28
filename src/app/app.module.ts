import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedBootstrapModule } from './shared-bootstrap.module';
import { PostComponent } from './post/post.component';
import { WallComponent } from './wall/wall.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DelayedWallComponent } from './delayed-wall/delayed-wall.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchComponent } from './search/search.component';

import { PostService } from './services/post.service';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    WallComponent,
    PostDetailsComponent,
    DelayedWallComponent,
    LoaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedBootstrapModule
  ],
  providers: [
    PostService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
