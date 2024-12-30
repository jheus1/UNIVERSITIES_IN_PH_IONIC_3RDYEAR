import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesN3PageRoutingModule } from './camarines-n3-routing.module';

import { CamarinesN3Page } from './camarines-n3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesN3PageRoutingModule
  ],
  declarations: [CamarinesN3Page]
})
export class CamarinesN3PageModule {}
