import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camiguin10PageRoutingModule } from './camiguin10-routing.module';

import { Camiguin10Page } from './camiguin10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camiguin10PageRoutingModule
  ],
  declarations: [Camiguin10Page]
})
export class Camiguin10PageModule {}
