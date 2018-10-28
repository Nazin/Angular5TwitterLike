import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class SearchService {

  private enabled = false;

  @Output() changeEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();

  enable() {
    this.toggle(true);
  }

  disable() {
    this.toggle(false);
  }

  toggle(enabled: boolean) {
    this.enabled = enabled;
    this.changeEvent.emit(this.enabled);
  }

  search(query: string) {
    this.searchEvent.emit(query);
  }
}
