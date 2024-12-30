import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOrientalPageRoutingModule } from './davao-oriental-routing.module';

import { DavaoOrientalPage } from './davao-oriental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOrientalPageRoutingModule
  ],
  declarations: [DavaoOrientalPage]
})
export class DavaoOrientalPageModule {}
