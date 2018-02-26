import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MinibarComponent} from './minibar/minibar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MinibarComponent],
  exports: [MinibarComponent]
})
export class ChartModule {
}
