import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TriStateCheckboxComponent } from './tri-state-checkbox.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TriStateCheckboxComponent],
  exports: [TriStateCheckboxComponent]
})

export class TriStateCheckboxModule { }
