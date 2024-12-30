import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camiguin1PageRoutingModule } from './camiguin1-routing.module';

import { Camiguin1Page } from './camiguin1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camiguin1PageRoutingModule
  ],
  declarations: [Camiguin1Page]
})
export class Camiguin1PageModule {}
