import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camiguin9PageRoutingModule } from './camiguin9-routing.module';

import { Camiguin9Page } from './camiguin9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camiguin9PageRoutingModule
  ],
  declarations: [Camiguin9Page]
})
export class Camiguin9PageModule {}
