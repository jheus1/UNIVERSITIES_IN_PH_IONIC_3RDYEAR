import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesSPageRoutingModule } from './camarines-s-routing.module';

import { CamarinesSPage } from './camarines-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesSPageRoutingModule
  ],
  declarations: [CamarinesSPage]
})
export class CamarinesSPageModule {}
