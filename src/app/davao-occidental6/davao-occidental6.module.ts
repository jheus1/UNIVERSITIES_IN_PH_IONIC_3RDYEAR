import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOccidental6PageRoutingModule } from './davao-occidental6-routing.module';

import { DavaoOccidental6Page } from './davao-occidental6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOccidental6PageRoutingModule
  ],
  declarations: [DavaoOccidental6Page]
})
export class DavaoOccidental6PageModule {}
