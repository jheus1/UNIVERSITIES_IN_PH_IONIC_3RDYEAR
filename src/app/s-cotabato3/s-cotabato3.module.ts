import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCotabato3PageRoutingModule } from './s-cotabato3-routing.module';

import { SCotabato3Page } from './s-cotabato3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCotabato3PageRoutingModule
  ],
  declarations: [SCotabato3Page]
})
export class SCotabato3PageModule {}
