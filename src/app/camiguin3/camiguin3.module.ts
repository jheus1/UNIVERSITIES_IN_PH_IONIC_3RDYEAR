import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Camiguin3PageRoutingModule } from './camiguin3-routing.module';

import { Camiguin3Page } from './camiguin3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Camiguin3PageRoutingModule
  ],
  declarations: [Camiguin3Page]
})
export class Camiguin3PageModule {}
