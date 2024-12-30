import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCotabato8PageRoutingModule } from './s-cotabato8-routing.module';

import { SCotabato8Page } from './s-cotabato8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCotabato8PageRoutingModule
  ],
  declarations: [SCotabato8Page]
})
export class SCotabato8PageModule {}
