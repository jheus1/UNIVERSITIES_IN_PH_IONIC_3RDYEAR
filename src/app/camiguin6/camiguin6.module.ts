import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camiguin6PageRoutingModule } from './camiguin6-routing.module';

import { Camiguin6Page } from './camiguin6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camiguin6PageRoutingModule
  ],
  declarations: [Camiguin6Page]
})
export class Camiguin6PageModule {}
