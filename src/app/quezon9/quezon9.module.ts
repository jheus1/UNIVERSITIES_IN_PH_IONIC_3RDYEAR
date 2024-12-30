import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quezon9PageRoutingModule } from './quezon9-routing.module';

import { Quezon9Page } from './quezon9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quezon9PageRoutingModule
  ],
  declarations: [Quezon9Page]
})
export class Quezon9PageModule {}
