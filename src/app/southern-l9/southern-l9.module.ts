import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernL9PageRoutingModule } from './southern-l9-routing.module';

import { SouthernL9Page } from './southern-l9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernL9PageRoutingModule
  ],
  declarations: [SouthernL9Page]
})
export class SouthernL9PageModule {}
