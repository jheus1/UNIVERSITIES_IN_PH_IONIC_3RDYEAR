import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaVPageRoutingModule } from './nueva-v-routing.module';

import { NuevaVPage } from './nueva-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaVPageRoutingModule
  ],
  declarations: [NuevaVPage]
})
export class NuevaVPageModule {}
