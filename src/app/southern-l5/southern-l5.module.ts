import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernL5PageRoutingModule } from './southern-l5-routing.module';

import { SouthernL5Page } from './southern-l5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernL5PageRoutingModule
  ],
  declarations: [SouthernL5Page]
})
export class SouthernL5PageModule {}
