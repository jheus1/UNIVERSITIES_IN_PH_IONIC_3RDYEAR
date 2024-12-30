import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrientalM3PageRoutingModule } from './oriental-m3-routing.module';

import { OrientalM3Page } from './oriental-m3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrientalM3PageRoutingModule
  ],
  declarations: [OrientalM3Page]
})
export class OrientalM3PageModule {}
