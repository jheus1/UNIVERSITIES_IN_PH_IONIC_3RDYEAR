import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Masbate3PageRoutingModule } from './masbate3-routing.module';

import { Masbate3Page } from './masbate3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Masbate3PageRoutingModule
  ],
  declarations: [Masbate3Page]
})
export class Masbate3PageModule {}
