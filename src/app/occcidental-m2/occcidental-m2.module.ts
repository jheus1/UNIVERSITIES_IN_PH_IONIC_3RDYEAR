import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcccidentalM2PageRoutingModule } from './occcidental-m2-routing.module';

import { OcccidentalM2Page } from './occcidental-m2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcccidentalM2PageRoutingModule
  ],
  declarations: [OcccidentalM2Page]
})
export class OcccidentalM2PageModule {}
