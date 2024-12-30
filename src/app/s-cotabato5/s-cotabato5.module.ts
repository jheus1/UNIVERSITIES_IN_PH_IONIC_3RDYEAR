import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCotabato5PageRoutingModule } from './s-cotabato5-routing.module';

import { SCotabato5Page } from './s-cotabato5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCotabato5PageRoutingModule
  ],
  declarations: [SCotabato5Page]
})
export class SCotabato5PageModule {}
