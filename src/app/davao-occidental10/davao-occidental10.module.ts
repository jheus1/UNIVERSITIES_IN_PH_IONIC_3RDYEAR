import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOccidental10PageRoutingModule } from './davao-occidental10-routing.module';

import { DavaoOccidental10Page } from './davao-occidental10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOccidental10PageRoutingModule
  ],
  declarations: [DavaoOccidental10Page]
})
export class DavaoOccidental10PageModule {}
