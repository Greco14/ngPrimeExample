import { Component, OnInit } from '@angular/core';
import { MainDataService } from '../../services/main-data.service'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  datos;
  constructor(private mainData : MainDataService) { }

  ngOnInit() {
    this.mainData.getData().then(datos => {
      this.datos = datos;
      console.log(this.datos)
    });

  }

}
