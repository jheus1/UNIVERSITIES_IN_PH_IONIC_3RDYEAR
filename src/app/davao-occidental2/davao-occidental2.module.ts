import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOccidental2PageRoutingModule } from './davao-occidental2-routing.module';

import { DavaoOccidental2Page } from './davao-occidental2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOccidental2PageRoutingModule
  ],
  declarations: [DavaoOccidental2Page]
})
export class DavaoOccidental2PageModule {}
