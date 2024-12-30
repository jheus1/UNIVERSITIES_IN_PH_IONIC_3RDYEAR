import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarinesN5PageRoutingModule } from './camarines-n5-routing.module';

import { CamarinesN5Page } from './camarines-n5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarinesN5PageRoutingModule
  ],
  declarations: [CamarinesN5Page]
})
export class CamarinesN5PageModule {}
