import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AklanPageRoutingModule } from './aklan-routing.module';

import { AklanPage } from './aklan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AklanPageRoutingModule
  ],
  declarations: [AklanPage]
})
export class AklanPageModule {}
