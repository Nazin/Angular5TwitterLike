import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  public enabled = false;

  constructor(private searchService: SearchService) { }

  search(value: string) {
    this.searchService.search(value);
  }

  ngOnInit() {
    this.searchService.changeEvent.subscribe(enabled => this.enabled = enabled);
  }
}
