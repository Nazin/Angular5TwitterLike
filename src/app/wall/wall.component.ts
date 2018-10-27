import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.less']
})
export class WallComponent implements OnInit {

  @Input() posts: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
