import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOccidental5PageRoutingModule } from './davao-occidental5-routing.module';

import { DavaoOccidental5Page } from './davao-occidental5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOccidental5PageRoutingModule
  ],
  declarations: [DavaoOccidental5Page]
})
export class DavaoOccidental5PageModule {}
