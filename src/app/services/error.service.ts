import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class ErrorService {

  @Output() handleErrorEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  throw(errorMessage: string) {
    this.handleErrorEvent.emit(errorMessage);
  }
}
