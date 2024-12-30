import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cebu5PageRoutingModule } from './cebu5-routing.module';

import { Cebu5Page } from './cebu5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cebu5PageRoutingModule
  ],
  declarations: [Cebu5Page]
})
export class Cebu5PageModule {}
