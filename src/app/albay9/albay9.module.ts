import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Albay9PageRoutingModule } from './albay9-routing.module';

import { Albay9Page } from './albay9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Albay9PageRoutingModule
  ],
  declarations: [Albay9Page]
})
export class Albay9PageModule {}
