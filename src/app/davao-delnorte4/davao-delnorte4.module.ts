import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelnorte4PageRoutingModule } from './davao-delnorte4-routing.module';

import { DavaoDelnorte4Page } from './davao-delnorte4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelnorte4PageRoutingModule
  ],
  declarations: [DavaoDelnorte4Page]
})
export class DavaoDelnorte4PageModule {}
