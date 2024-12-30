import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoDelnorte3PageRoutingModule } from './davao-delnorte3-routing.module';

import { DavaoDelnorte3Page } from './davao-delnorte3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoDelnorte3PageRoutingModule
  ],
  declarations: [DavaoDelnorte3Page]
})
export class DavaoDelnorte3PageModule {}
