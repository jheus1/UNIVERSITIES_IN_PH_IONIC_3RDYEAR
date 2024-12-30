import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaEPageRoutingModule } from './nueva-e-routing.module';

import { NuevaEPage } from './nueva-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaEPageRoutingModule
  ],
  declarations: [NuevaEPage]
})
export class NuevaEPageModule {}
