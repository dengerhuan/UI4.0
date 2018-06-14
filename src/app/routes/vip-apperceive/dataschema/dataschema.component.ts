import {Component, OnInit, AfterViewInit} from '@angular/core';
import {UserService} from '../../../core/services/user.service';
import {Http} from '../../../core/services/http.client';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'nb-dataschema',
  templateUrl: './dataschema.component.html',
  styleUrls: ['./dataschema.component.less']
})
export class DataschemaComponent implements OnInit, AfterViewInit {


  schema = [];

  columns = [];

  index = 0;
  loaddata = true;

  constructor(public user: UserService, private http: Http) {

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.http.get('database/des/table').subscribe(table => {
      this.schema = table;
      this.loaddata = false;
      this.refreshColumn(1);
    });
  }

  show(id) {
    this.refreshColumn(id);
  }

  refreshColumn(id) {
    this.schema.forEach(item => {
      if (item.id === id) {
        this.columns = item.columns;
        return;
      }
    });
  }

  exportfile() {
    console.log("eee");
  }
}
