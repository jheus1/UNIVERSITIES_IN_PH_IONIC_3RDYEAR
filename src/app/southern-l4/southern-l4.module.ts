import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernL4PageRoutingModule } from './southern-l4-routing.module';

import { SouthernL4Page } from './southern-l4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernL4PageRoutingModule
  ],
  declarations: [SouthernL4Page]
})
export class SouthernL4PageModule {}
