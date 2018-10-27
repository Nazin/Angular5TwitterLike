import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.less']
})
export class WallComponent implements OnInit {

  @Input() posts: Array<Post>;

  constructor() { }

  ngOnInit() {
  }

}
