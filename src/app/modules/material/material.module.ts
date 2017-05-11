import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdIconModule,
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdInputModule,
  MdTabsModule,
  MdMenuModule,
  MdDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdTabsModule,
    MdMenuModule,
    MdDialogModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdTabsModule,
    MdMenuModule,
    MdDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
