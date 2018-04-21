import {
  AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {LineComponent} from '../../../shared/chart/line/line.component';
import {MiniProgressComponent} from "../../../shared/chart/mini-progress/mini-progress.component";


@Component({
  selector: 'nb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, AfterViewInit {

  img = 'http://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
  hotTags = [];
  validateForm: FormGroup;

  _date: Date = new Date();
  projectExpanede = true;

  @ViewChild('body', {read: ViewContainerRef})
  dym: ViewContainerRef;


  comp1: ComponentRef<MiniProgressComponent>;

  constructor(private fb: FormBuilder, private  resolver: ComponentFactoryResolver) {
    for (let i = 0; i < 60; i++) {
      this.hotTags.push({show: true, text: `${i}项目`});

    }
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      const fa = this.resolver.resolveComponentFactory(MiniProgressComponent);

      this.comp1 = this.dym.createComponent(fa);
      this.comp1.instance.value = 10;
    }, 10);

  }


  ngOnInit() {
    this.validateForm = this.fb.group({date: [new Date()]});
    /* this.validateForm.addControl('date', new FormControl([new Date()]
     ));*/
  }

  ha = (e) => console.log(e);

  _onsubmit(w) {
    console.log(w);
  }
}
