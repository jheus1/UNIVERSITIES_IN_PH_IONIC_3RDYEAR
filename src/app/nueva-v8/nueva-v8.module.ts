import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaV8PageRoutingModule } from './nueva-v8-routing.module';

import { NuevaV8Page } from './nueva-v8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaV8PageRoutingModule
  ],
  declarations: [NuevaV8Page]
})
export class NuevaV8PageModule {}
