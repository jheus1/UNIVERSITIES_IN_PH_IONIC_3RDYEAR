import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernL8PageRoutingModule } from './southern-l8-routing.module';

import { SouthernL8Page } from './southern-l8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernL8PageRoutingModule
  ],
  declarations: [SouthernL8Page]
})
export class SouthernL8PageModule {}
