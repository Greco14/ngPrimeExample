import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import { StaffType } from './../../rgx/models/staff-type';

import { MainDataService } from '../../services/main-data.service';
import { EditModalComponent} from '../edit-modal/edit-modal.component';

import { AppState } from './../../app.state'
import { ActionTypes } from '../../rgx/actions/staff-type.actions';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [EditModalComponent]
})

export class TableComponent implements OnInit {
  datos;
  modal: EditModalComponent;
  items: StaffType[];
  error$: Observable<any>;
  isLoading$: Observable<boolean>;
  openModale: boolean;

  
  
  constructor(private mainData : MainDataService, private editModal : EditModalComponent, private store$: Store<AppState>) { 
    
  }
  

  ngOnInit() {

  this.store$.select(state => state.items).subscribe(items => this.items = items);
  

  }
  editTableData(dato){
    this.store$.dispatch( {type: ActionTypes.MODAL_OPEN})
    this.openModale = true;
    this.editModal.showDialog(dato);
  }

  

}
