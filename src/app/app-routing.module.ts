import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostDetailsComponent} from './post-details/post-details.component';
import {DelayedWallComponent} from './delayed-wall/delayed-wall.component';

const routes: Routes = [
  { path: '', component: DelayedWallComponent },
  { path: 'post/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
