import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'nb-nav-head',
  templateUrl: './nav-head.component.html',
  styleUrls: ['./nav-head.component.less']
})
export class NavHeadComponent implements OnInit {
  position = [];

  @ContentChild('footer') footer: TemplateRef<any>;
  @ContentChild('extra') extra: TemplateRef<any>;


  @Input() img;
  @Input() logo;
  @Input() title;
  @Input() subTitle;


  constructor(private router: Router) {
    this.position.push('home');
    this.position = router.url.split('/');
    this.position[0] = 'home';
    console.log(this.position);


  }

  ngOnInit() {

  }

}
