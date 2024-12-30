import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernL3PageRoutingModule } from './southern-l3-routing.module';

import { SouthernL3Page } from './southern-l3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernL3PageRoutingModule
  ],
  declarations: [SouthernL3Page]
})
export class SouthernL3PageModule {}
