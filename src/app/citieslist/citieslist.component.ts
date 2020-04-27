import { Component, OnInit, ViewChild } from '@angular/core';
import { CityService } from '../services/city.service';
import { City } from '../models/city.model';

import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component'

@Component({
  selector: 'app-citieslist',
  templateUrl: './citieslist.component.html',
  styleUrls: ['./citieslist.component.css'],
  providers: [ CityService ]
})

export class CitieslistComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lattitude', 'longitude', 'action'];
  dataSource : City[] = [];

  constructor(private cityService : CityService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe(data => this.dataSource = data);
  }

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      } else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    this.dataSource.push({
      name:row_obj.name,
      lattitude:row_obj.lattitude,
      longitude:row_obj.longitude
    });
    this.cityService.createCity(row_obj.name, row_obj.lattitude, row_obj.longitude);
    this.table.renderRows();
  }

  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      this.cityService.deleteCity(row_obj.name);
      return value.name != row_obj.name;
    });
  }
}
