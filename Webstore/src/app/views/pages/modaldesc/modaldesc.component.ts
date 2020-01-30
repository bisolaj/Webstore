import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AProduct } from 'src/app/interfaces/aproduct';


@Component({
  selector: 'app-modaldesc',
  templateUrl: './modaldesc.component.html',
  styleUrls: ['./modaldesc.component.scss']
})
export class ModaldescComponent  {
  @Input() product: AProduct;
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  // open() {
  //   const modalRef = this.modalService.open(NgbdModalContent);
  //   modalRef.componentInstance.product = this.product;
  // }

  open(content) {
    this.modalService.open(content);
  }
}
