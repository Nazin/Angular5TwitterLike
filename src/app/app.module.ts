import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthGuard } from './_guards/auth.guard';

import { SharedBootstrapModule } from './shared/shared-bootstrap.module';
import { PostComponent } from './post/post.component';
import { WallComponent } from './wall/wall.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DelayedWallComponent } from './delayed-wall/delayed-wall.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PostService } from './services/post.service';
import { SearchService } from './services/search.service';
import { AuthenticationService } from './services/authentication.service';
import { ErrorService } from './services/error.service';
import { ErrorInterceptorProvider } from './shared/error-interceptor';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    WallComponent,
    PostDetailsComponent,
    DelayedWallComponent,
    LoaderComponent,
    SearchComponent,
    LoginComponent,
    PageNotFoundComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedBootstrapModule
  ],
  providers: [
    AuthGuard,
    ErrorInterceptorProvider,
    PostService,
    SearchService,
    AuthenticationService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
