import { Component, OnInit } from '@angular/core';
import {Post} from '../models/post';
import {PostService} from '../services/post.service';
import {SORT} from '../shared/definitions';

@Component({
  selector: 'app-delayed-wall',
  templateUrl: './delayed-wall.component.html',
  styleUrls: ['./delayed-wall.component.less']
})
export class DelayedWallComponent implements OnInit {

  constructor(private postService: PostService) {
    this.postService = postService;
  }

  public posts: Array<Post> = [];
  private allPosts: Array<Post> = [];
  private postsDisplayed = 0;

  ngOnInit() {
    this.postService.getAllPostsSorted('id', SORT.DESC).subscribe(this.postsReceived.bind(this));
  }

  postsReceived(posts: Post[]) {
    this.allPosts = posts;
    this.delayPosts();
  }

  delayPosts() {
    this.posts = this.allPosts.slice(0, ++this.postsDisplayed);
    if (this.posts.length !== this.allPosts.length) {
      setTimeout(this.delayPosts.bind(this), 1000);
    }
  }
}
