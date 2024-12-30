import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesNPageRoutingModule } from './camarines-n-routing.module';

import { CamarinesNPage } from './camarines-n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesNPageRoutingModule
  ],
  declarations: [CamarinesNPage]
})
export class CamarinesNPageModule {}
