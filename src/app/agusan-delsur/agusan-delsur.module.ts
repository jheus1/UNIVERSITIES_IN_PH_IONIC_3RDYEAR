import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelsurPageRoutingModule } from './agusan-delsur-routing.module';

import { AgusanDelsurPage } from './agusan-delsur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelsurPageRoutingModule
  ],
  declarations: [AgusanDelsurPage]
})
export class AgusanDelsurPageModule {}
