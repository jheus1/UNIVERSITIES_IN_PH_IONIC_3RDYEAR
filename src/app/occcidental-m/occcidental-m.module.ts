import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcccidentalMPageRoutingModule } from './occcidental-m-routing.module';

import { OcccidentalMPage } from './occcidental-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcccidentalMPageRoutingModule
  ],
  declarations: [OcccidentalMPage]
})
export class OcccidentalMPageModule {}
