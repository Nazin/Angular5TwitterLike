import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Post } from '../models/post';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.less']
})
export class WallComponent implements OnInit, OnDestroy {

  @Input() posts: Array<Post>;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.enable();
  }

  ngOnDestroy() {
    this.searchService.disable();
  }
}
