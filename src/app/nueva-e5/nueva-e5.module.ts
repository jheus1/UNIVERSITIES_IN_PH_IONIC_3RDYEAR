import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaE5PageRoutingModule } from './nueva-e5-routing.module';

import { NuevaE5Page } from './nueva-e5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaE5PageRoutingModule
  ],
  declarations: [NuevaE5Page]
})
export class NuevaE5PageModule {}
