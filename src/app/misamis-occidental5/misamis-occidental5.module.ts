import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOccidental5PageRoutingModule } from './misamis-occidental5-routing.module';

import { MisamisOccidental5Page } from './misamis-occidental5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOccidental5PageRoutingModule
  ],
  declarations: [MisamisOccidental5Page]
})
export class MisamisOccidental5PageModule {}
