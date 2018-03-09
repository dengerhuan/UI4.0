import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user.service';

@Component({
  selector: 'nb-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.less']
})
export class VisitComponent implements OnInit {


  cache = [];

  constructor(public user: UserService) {

    for (let i of user.urlcache) {
      this.cache.unshift(i);
    }

  }

  ngOnInit() {
  }

}
