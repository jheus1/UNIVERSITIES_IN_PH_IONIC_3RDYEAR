import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaE9PageRoutingModule } from './nueva-e9-routing.module';

import { NuevaE9Page } from './nueva-e9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaE9PageRoutingModule
  ],
  declarations: [NuevaE9Page]
})
export class NuevaE9PageModule {}
