import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOccidental4PageRoutingModule } from './davao-occidental4-routing.module';

import { DavaoOccidental4Page } from './davao-occidental4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOccidental4PageRoutingModule
  ],
  declarations: [DavaoOccidental4Page]
})
export class DavaoOccidental4PageModule {}
