import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaV5PageRoutingModule } from './nueva-v5-routing.module';

import { NuevaV5Page } from './nueva-v5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaV5PageRoutingModule
  ],
  declarations: [NuevaV5Page]
})
export class NuevaV5PageModule {}
