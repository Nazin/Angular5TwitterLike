import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post';
import { SORT } from './shared/definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private postService: PostService) {
    postService.getAllPostsSorted('id', SORT.DESC).subscribe((posts: Post[]) => this.posts = posts);
  }

  public posts: Array<Post> = [];
}
