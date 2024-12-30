import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pampanga3PageRoutingModule } from './pampanga3-routing.module';

import { Pampanga3Page } from './pampanga3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pampanga3PageRoutingModule
  ],
  declarations: [Pampanga3Page]
})
export class Pampanga3PageModule {}
