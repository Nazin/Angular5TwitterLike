import {Component, OnInit, ViewChild} from '@angular/core';
import {ErrorService} from '../services/error.service';
import {BsModalRef, BsModalService, ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.less']
})
export class ErrorDialogComponent implements OnInit {

  @ViewChild(ModalDirective) modal: ModalDirective;

  public message: string;
  public bsModalRef: BsModalRef;

  constructor(private errorService: ErrorService, private modalService: BsModalService) {
    this.errorService.handleErrorEvent.subscribe(message => {
      this.message = message;
      this.modal.show();
    });
  }

  ngOnInit() {
  }

}
