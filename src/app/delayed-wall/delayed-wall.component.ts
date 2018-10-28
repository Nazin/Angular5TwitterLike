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

  ngOnInit() {
    this.postService.getAllPostsSorted('id', SORT.DESC).subscribe((posts: Post[]) => this.posts = posts);
  }

}
