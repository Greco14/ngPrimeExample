import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {TabViewModule, DataTableModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

import { MainDataService } from './services/main-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TabViewModule,
    DataTableModule,
    TableModule
    
  ],
  providers: [MainDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
