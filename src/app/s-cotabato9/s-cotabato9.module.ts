import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCotabato9PageRoutingModule } from './s-cotabato9-routing.module';

import { SCotabato9Page } from './s-cotabato9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCotabato9PageRoutingModule
  ],
  declarations: [SCotabato9Page]
})
export class SCotabato9PageModule {}
