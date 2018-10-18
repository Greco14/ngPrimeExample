import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { dropDownModels  } from './../../rgx/models/staff-type';
import { AppState } from './../../app.state';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
  inputs: ['openModal'],
})


export class EditModalComponent implements OnInit {
  
 // @Input() item: ItemClass; // you entity to edit
 @Input () openModal: boolean = false;
 roles: dropDownModels[];
 roleSelected: dropDownModels;
 afterCallWork: dropDownModels[];
 restrictCallHistory: dropDownModels[];
 afterCallSelected: dropDownModels;
 restrictCallSelected: dropDownModels;

  constructor(private store$: Store<AppState>) { 
    this.roles = [
      {
        label: 'AGENT',
        value: 'AGENT'
      },
      {
        label: 'MD',
        value: 'MD'
      },
      {
        label: 'RN',
        value: 'RN'
      }
    ];
    this.afterCallWork = [
      {
        label: 'YES',
        value: 'yes'
      },
      {
        label: 'NO',
        value: 'no'
      }
    ];
    this.restrictCallHistory = this.afterCallWork;
  }

  ngOnInit() {
  }


  showDialog(dato) {
    this.store$.select(state => state.modalEdit).subscribe( modalEdit  =>{ 
      this.openModal = modalEdit.isOpen; 
      console.log(this.openModal);
      console.log(dato)
    });
  }
  afterHide() {
  }
}
