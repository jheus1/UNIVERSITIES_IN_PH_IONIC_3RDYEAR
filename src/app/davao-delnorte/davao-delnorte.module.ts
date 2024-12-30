import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelnortePageRoutingModule } from './davao-delnorte-routing.module';

import { DavaoDelnortePage } from './davao-delnorte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelnortePageRoutingModule
  ],
  declarations: [DavaoDelnortePage]
})
export class DavaoDelnortePageModule {}
