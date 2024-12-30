import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camiguin8PageRoutingModule } from './camiguin8-routing.module';

import { Camiguin8Page } from './camiguin8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camiguin8PageRoutingModule
  ],
  declarations: [Camiguin8Page]
})
export class Camiguin8PageModule {}
