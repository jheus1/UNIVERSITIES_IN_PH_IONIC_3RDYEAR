import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcccidentalM1PageRoutingModule } from './occcidental-m1-routing.module';

import { OcccidentalM1Page } from './occcidental-m1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcccidentalM1PageRoutingModule
  ],
  declarations: [OcccidentalM1Page]
})
export class OcccidentalM1PageModule {}
