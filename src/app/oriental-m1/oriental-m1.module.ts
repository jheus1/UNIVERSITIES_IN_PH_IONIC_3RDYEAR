import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrientalM1PageRoutingModule } from './oriental-m1-routing.module';

import { OrientalM1Page } from './oriental-m1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrientalM1PageRoutingModule
  ],
  declarations: [OrientalM1Page]
})
export class OrientalM1PageModule {}
