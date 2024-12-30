import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOccidental3PageRoutingModule } from './davao-occidental3-routing.module';

import { DavaoOccidental3Page } from './davao-occidental3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOccidental3PageRoutingModule
  ],
  declarations: [DavaoOccidental3Page]
})
export class DavaoOccidental3PageModule {}
