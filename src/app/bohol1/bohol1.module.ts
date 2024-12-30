import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohol1PageRoutingModule } from './bohol1-routing.module';

import { Bohol1Page } from './bohol1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohol1PageRoutingModule
  ],
  declarations: [Bohol1Page]
})
export class Bohol1PageModule {}
