import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCotabato6PageRoutingModule } from './s-cotabato6-routing.module';

import { SCotabato6Page } from './s-cotabato6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCotabato6PageRoutingModule
  ],
  declarations: [SCotabato6Page]
})
export class SCotabato6PageModule {}
