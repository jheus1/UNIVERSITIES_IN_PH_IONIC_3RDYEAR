import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernL2PageRoutingModule } from './southern-l2-routing.module';

import { SouthernL2Page } from './southern-l2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernL2PageRoutingModule
  ],
  declarations: [SouthernL2Page]
})
export class SouthernL2PageModule {}
