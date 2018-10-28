import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';
import {Post} from '../models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.less']
})
export class PostDetailsComponent implements OnInit {

  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.postService.getPost(params.id).subscribe((post: Post) => this.post = post));
  }

  public post: Post;

  ngOnInit() {
  }

}
