import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SultanKudarat5PageRoutingModule } from './sultan-kudarat5-routing.module';

import { SultanKudarat5Page } from './sultan-kudarat5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SultanKudarat5PageRoutingModule
  ],
  declarations: [SultanKudarat5Page]
})
export class SultanKudarat5PageModule {}
