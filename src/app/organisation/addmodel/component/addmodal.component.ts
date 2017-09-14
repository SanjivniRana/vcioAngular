import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
    selector:'app-addmodal',
    templateUrl:'./addmodal.component.html',
    styleUrls:['./addmodal.component.css']
})
export class AddmodalComponent{
     public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
