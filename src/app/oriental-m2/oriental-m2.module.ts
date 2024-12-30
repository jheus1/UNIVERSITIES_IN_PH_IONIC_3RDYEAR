import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrientalM2PageRoutingModule } from './oriental-m2-routing.module';

import { OrientalM2Page } from './oriental-m2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrientalM2PageRoutingModule
  ],
  declarations: [OrientalM2Page]
})
export class OrientalM2PageModule {}
