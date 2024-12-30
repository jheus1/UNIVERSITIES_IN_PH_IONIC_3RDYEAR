import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcccidentalM3PageRoutingModule } from './occcidental-m3-routing.module';

import { OcccidentalM3Page } from './occcidental-m3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcccidentalM3PageRoutingModule
  ],
  declarations: [OcccidentalM3Page]
})
export class OcccidentalM3PageModule {}
