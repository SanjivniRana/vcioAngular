import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddEvent, EditEvent, GridComponent } from '@progress/kendo-angular-grid';

import { Observable } from 'rxjs/Rx';
import { Validators, FormBuilder } from '@angular/forms';
import { GridDataResult, PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { products, sampleProducts } from "../products";
import { UserService } from "../../services/user.service";
import { UserInformation } from "../userinformation";
declare var jquery:any;
declare var $ :any;

@Component({
    selector:'app-org',
    templateUrl:'./organisation.component.html',
    styleUrls:['./organisation.component.css']
})
export class OrganisationComponent{
    private gridView: GridDataResult;
    private data: Object[];
    private pageSize: number = 10;
    private skip: number = 0;
    private items: any[] = products; 
    public info:any[]
    private gridData: GridDataResult
   // public userinfo=UserInformation.getUser();
    constructor(
       // private userinformation:UserInformation,
        private userService: UserService,
    ) {
      this.loadItems();
       this.userService.getAll().subscribe((data) => {
      console.log(data);
     this.info=data,
     this.gridData = process(this.info, this.state);
     // this.states = state;
    //  console.log(this.states);
   });
    }
 
     protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
     this.loadItems();
     }

     private loadItems(): void {
       this.gridView = {
           data: this.items.slice(this.skip, this.skip + this.pageSize),
          total: this.items.length
        };
     }

       private state: State = {
        skip: 0,
        take: 5
    };
    // t:any;
     ngOnInit() {
     
     }
    
  // private gridData: GridDataResult = process(sampleProducts, this.state);
   // private gridData: GridDataResult = process(this.info, this.state);

     protected dataStateChange(state: DataStateChangeEvent): void {
         this.state = state;
          this.gridData = process(this.info, this.state);
      }
  
//  $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('whatever') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// } )


}

 
