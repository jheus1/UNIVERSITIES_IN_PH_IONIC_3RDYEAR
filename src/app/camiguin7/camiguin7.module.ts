import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camiguin7PageRoutingModule } from './camiguin7-routing.module';

import { Camiguin7Page } from './camiguin7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camiguin7PageRoutingModule
  ],
  declarations: [Camiguin7Page]
})
export class Camiguin7PageModule {}
