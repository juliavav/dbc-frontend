import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() data: object[];
  @Input() columns: string[];
  @Input() columnsNames: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<object>;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.data);
  }

}
