import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernL1PageRoutingModule } from './southern-l1-routing.module';

import { SouthernL1Page } from './southern-l1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernL1PageRoutingModule
  ],
  declarations: [SouthernL1Page]
})
export class SouthernL1PageModule {}
