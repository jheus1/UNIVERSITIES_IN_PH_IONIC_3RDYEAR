import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernL7PageRoutingModule } from './southern-l7-routing.module';

import { SouthernL7Page } from './southern-l7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernL7PageRoutingModule
  ],
  declarations: [SouthernL7Page]
})
export class SouthernL7PageModule {}
