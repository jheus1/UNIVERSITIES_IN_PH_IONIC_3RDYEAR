import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatangasPageRoutingModule } from './batangas-routing.module';

import { BatangasPage } from './batangas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatangasPageRoutingModule
  ],
  declarations: [BatangasPage]
})
export class BatangasPageModule {}
