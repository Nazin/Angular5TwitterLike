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

  ngOnInit() {
    this.searchService.change.subscribe(enabled => {
      this.enabled = enabled;
    });
  }
}
