import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TemCacheService} from "../../../core/services/tem-cache.service";

@Component({
  selector: 'nb-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {
  img = 'http://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';

  public hotTags = [];
  public selectedTags = [];

  validateForm: FormGroup;
  controlArray = [];


  constructor(private fb: FormBuilder, public cache: TemCacheService) {
    for (let i = 0; i < 60; i++) {
      this.hotTags.push({show: true, text: `${i}项目`});

    }
  }

  addField(e?: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    const id = (this.controlArray.length > 0) ? this.controlArray[this.controlArray.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`
    };
    const index = this.controlArray.push(control);
    console.log(this.controlArray[this.controlArray.length - 1]);
    this.validateForm.addControl(this.controlArray[index - 1].controlInstance, new FormControl(null, Validators.required));
  }

  removeField(i, e: MouseEvent) {
    e.preventDefault();
    if (this.controlArray.length > 1) {
      const index = this.controlArray.indexOf(i);
      this.controlArray.splice(index, 1);
      console.log(this.controlArray);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    console.log(this.validateForm.value);
  }


  toggle() {

    this.hotTags.forEach((c, i) => {
      if (i > 6) {
        c.show = !c.show;
      } else {
        c.show = true;
      }
    });
  }

  ngOnInit() {
    this.validateForm = this.fb.group({});
    this.addField();
  }

  handleChange(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
    console.log('You are interested in: ', this.selectedTags);
  }
}
