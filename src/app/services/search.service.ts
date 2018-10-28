import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class SearchService {

  private enabled = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  enable() {
    this.toggle(true);
  }

  disable() {
    this.toggle(false);
  }

  toggle(enabled: boolean) {
    this.enabled = enabled;
    this.change.emit(this.enabled);
  }
}
