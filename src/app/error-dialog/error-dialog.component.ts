import {Component, OnInit, ViewChild} from '@angular/core';
import {ErrorService} from '../services/error.service';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.less']
})
export class ErrorDialogComponent implements OnInit {

  @ViewChild(ModalDirective) modal: ModalDirective;

  public message: string;

  constructor(private errorService: ErrorService) {
    this.errorService.handleErrorEvent.subscribe(message => {
      this.message = message;
      this.modal.show();
    });
  }

  ngOnInit() {
  }

}
