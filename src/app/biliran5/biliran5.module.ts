import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Biliran5PageRoutingModule } from './biliran5-routing.module';

import { Biliran5Page } from './biliran5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Biliran5PageRoutingModule
  ],
  declarations: [Biliran5Page]
})
export class Biliran5PageModule {}
