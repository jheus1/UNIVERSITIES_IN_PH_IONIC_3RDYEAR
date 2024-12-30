import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quezon2PageRoutingModule } from './quezon2-routing.module';

import { Quezon2Page } from './quezon2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quezon2PageRoutingModule
  ],
  declarations: [Quezon2Page]
})
export class Quezon2PageModule {}
