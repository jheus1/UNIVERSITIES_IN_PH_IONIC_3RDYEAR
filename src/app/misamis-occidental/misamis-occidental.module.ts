import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOccidentalPageRoutingModule } from './misamis-occidental-routing.module';

import { MisamisOccidentalPage } from './misamis-occidental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOccidentalPageRoutingModule
  ],
  declarations: [MisamisOccidentalPage]
})
export class MisamisOccidentalPageModule {}
