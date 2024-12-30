import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Antique7PageRoutingModule } from './antique7-routing.module';

import { Antique7Page } from './antique7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Antique7PageRoutingModule
  ],
  declarations: [Antique7Page]
})
export class Antique7PageModule {}
