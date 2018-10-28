import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostDetailsComponent} from './post-details/post-details.component';
import {DelayedWallComponent} from './delayed-wall/delayed-wall.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: DelayedWallComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'post/:id', component: PostDetailsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
