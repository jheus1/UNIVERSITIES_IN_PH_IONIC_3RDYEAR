import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCotabato10PageRoutingModule } from './s-cotabato10-routing.module';

import { SCotabato10Page } from './s-cotabato10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCotabato10PageRoutingModule
  ],
  declarations: [SCotabato10Page]
})
export class SCotabato10PageModule {}
