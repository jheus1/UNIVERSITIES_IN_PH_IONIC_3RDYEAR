import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaE1PageRoutingModule } from './nueva-e1-routing.module';

import { NuevaE1Page } from './nueva-e1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaE1PageRoutingModule
  ],
  declarations: [NuevaE1Page]
})
export class NuevaE1PageModule {}
