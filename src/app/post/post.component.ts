import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post';
import {postConfiguration} from './post.component.config';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  public configuration: any;

  constructor() {
    this.configuration = postConfiguration;
  }

  ngOnInit() {
  }

}
