import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaE10PageRoutingModule } from './nueva-e10-routing.module';

import { NuevaE10Page } from './nueva-e10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaE10PageRoutingModule
  ],
  declarations: [NuevaE10Page]
})
export class NuevaE10PageModule {}
