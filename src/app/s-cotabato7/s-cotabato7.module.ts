import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCotabato7PageRoutingModule } from './s-cotabato7-routing.module';

import { SCotabato7Page } from './s-cotabato7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCotabato7PageRoutingModule
  ],
  declarations: [SCotabato7Page]
})
export class SCotabato7PageModule {}
