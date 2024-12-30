import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanaoDelnortePageRoutingModule } from './lanao-delnorte-routing.module';

import { LanaoDelnortePage } from './lanao-delnorte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanaoDelnortePageRoutingModule
  ],
  declarations: [LanaoDelnortePage]
})
export class LanaoDelnortePageModule {}
