import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernL6PageRoutingModule } from './southern-l6-routing.module';

import { SouthernL6Page } from './southern-l6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernL6PageRoutingModule
  ],
  declarations: [SouthernL6Page]
})
export class SouthernL6PageModule {}
