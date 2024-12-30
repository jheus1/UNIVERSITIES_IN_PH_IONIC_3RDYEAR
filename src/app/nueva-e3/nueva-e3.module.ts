import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaE3PageRoutingModule } from './nueva-e3-routing.module';

import { NuevaE3Page } from './nueva-e3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaE3PageRoutingModule
  ],
  declarations: [NuevaE3Page]
})
export class NuevaE3PageModule {}
