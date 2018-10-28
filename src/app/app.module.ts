import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedBootstrapModule } from './shared-bootstrap.module';
import { PostComponent } from './post/post.component';
import { WallComponent } from './wall/wall.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DelayedWallComponent } from './delayed-wall/delayed-wall.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';

import { PostService } from './services/post.service';
import { SearchService } from './services/search.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    WallComponent,
    PostDetailsComponent,
    DelayedWallComponent,
    LoaderComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedBootstrapModule
  ],
  providers: [
    PostService,
    SearchService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
