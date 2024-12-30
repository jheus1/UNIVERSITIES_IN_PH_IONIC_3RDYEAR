import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisamisOccidental1PageRoutingModule } from './misamis-occidental1-routing.module';

import { MisamisOccidental1Page } from './misamis-occidental1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisamisOccidental1PageRoutingModule
  ],
  declarations: [MisamisOccidental1Page]
})
export class MisamisOccidental1PageModule {}
