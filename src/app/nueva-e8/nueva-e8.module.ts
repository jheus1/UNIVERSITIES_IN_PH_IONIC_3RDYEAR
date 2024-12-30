import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaE8PageRoutingModule } from './nueva-e8-routing.module';

import { NuevaE8Page } from './nueva-e8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaE8PageRoutingModule
  ],
  declarations: [NuevaE8Page]
})
export class NuevaE8PageModule {}
