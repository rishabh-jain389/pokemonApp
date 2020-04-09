import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericDirective } from './directive/only-numbers.directive';

@NgModule({
  declarations: [NumericDirective],
  exports: [NumericDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
