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

  public query = '';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.enable();
    this.searchService.searchEvent.subscribe(query => this.query = query);
  }

  ngOnDestroy() {
    this.searchService.disable();
  }
}
