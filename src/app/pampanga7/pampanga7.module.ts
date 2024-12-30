import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pampanga7PageRoutingModule } from './pampanga7-routing.module';

import { Pampanga7Page } from './pampanga7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pampanga7PageRoutingModule
  ],
  declarations: [Pampanga7Page]
})
export class Pampanga7PageModule {}
