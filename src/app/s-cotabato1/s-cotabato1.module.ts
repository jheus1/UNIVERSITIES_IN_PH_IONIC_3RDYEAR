import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCotabato1PageRoutingModule } from './s-cotabato1-routing.module';

import { SCotabato1Page } from './s-cotabato1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCotabato1PageRoutingModule
  ],
  declarations: [SCotabato1Page]
})
export class SCotabato1PageModule {}
