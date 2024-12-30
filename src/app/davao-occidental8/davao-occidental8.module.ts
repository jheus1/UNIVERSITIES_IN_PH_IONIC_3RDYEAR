import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOccidental8PageRoutingModule } from './davao-occidental8-routing.module';

import { DavaoOccidental8Page } from './davao-occidental8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOccidental8PageRoutingModule
  ],
  declarations: [DavaoOccidental8Page]
})
export class DavaoOccidental8PageModule {}
