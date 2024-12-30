import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasayPageRoutingModule } from './pasay-routing.module';

import { PasayPage } from './pasay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasayPageRoutingModule
  ],
  declarations: [PasayPage]
})
export class PasayPageModule {}
