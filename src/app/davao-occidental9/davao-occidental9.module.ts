import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOccidental9PageRoutingModule } from './davao-occidental9-routing.module';

import { DavaoOccidental9Page } from './davao-occidental9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOccidental9PageRoutingModule
  ],
  declarations: [DavaoOccidental9Page]
})
export class DavaoOccidental9PageModule {}
