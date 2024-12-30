import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCotabato2PageRoutingModule } from './s-cotabato2-routing.module';

import { SCotabato2Page } from './s-cotabato2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCotabato2PageRoutingModule
  ],
  declarations: [SCotabato2Page]
})
export class SCotabato2PageModule {}
